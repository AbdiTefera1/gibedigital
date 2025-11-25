// app/api/auth/refresh/route.ts
import { NextResponse } from "next/server";
import { verifyToken, signAccessToken, signRefreshToken } from "@/lib/jwt";
import { compareToken, hashToken } from "@/lib/hash";
import { prisma } from "@/lib/prisma";

const ACCESS_TOKEN_COOKIE = "access_token";
const REFRESH_TOKEN_COOKIE = "refresh_token";

function attachAuthCookies(res: NextResponse, accessToken: string, refreshToken: string) {
  res.cookies.set({
    name: ACCESS_TOKEN_COOKIE,
    value: accessToken,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.cookies.set({
    name: REFRESH_TOKEN_COOKIE,
    value: refreshToken,
    httpOnly: true,
    path: "/api/auth/refresh",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function POST(req: Request) {
  try {
    // refresh token should be in cookie
    const cookieHeader = req.headers.get("cookie") ?? "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => {
        const [k, ...v] = c.trim().split("=");
        return [k, decodeURIComponent(v.join("="))];
      })
    );
    const refreshToken = cookies[REFRESH_TOKEN_COOKIE];

    if (!refreshToken) {
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    const decoded = verifyToken(refreshToken);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user || !user.hashedRefreshToken) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    // verify hashed refresh token
    const ok = await compareToken(refreshToken, user.hashedRefreshToken);
    if (!ok) {
      // token reuse or invalid -> clear stored token
      await prisma.user.update({ where: { id: user.id }, data: { hashedRefreshToken: null } });
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    // rotate: issue new refresh token & update hashed version
    const payload = { userId: user.id, email: user.email, role: user.role };
    const newAccess = signAccessToken(payload);
    const newRefresh = signRefreshToken(payload);

    const newHashed = await hashToken(newRefresh);
    await prisma.user.update({ where: { id: user.id }, data: { hashedRefreshToken: newHashed } });

    const res = NextResponse.json({ message: "Refreshed", user: { id: user.id, email: user.email, role: user.role } });
    attachAuthCookies(res, newAccess, newRefresh);
    return res;
  } catch (err) {
    console.error("Refresh error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
