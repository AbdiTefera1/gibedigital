// app/api/auth/logout/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const ACCESS_TOKEN_COOKIE = "access_token";
const REFRESH_TOKEN_COOKIE = "refresh_token";

export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const cookies = Object.fromEntries(
      cookieHeader.split(";").map((c) => {
        const [k, ...v] = c.trim().split("=");
        return [k, decodeURIComponent(v.join("="))];
      })
    );
    const refreshToken = cookies[REFRESH_TOKEN_COOKIE];
    if (refreshToken) {
      // attempt to decode to find user id and clear hashed token
      // NOTE: safe to ignore errors; we simply try to clear DB entry
      try {
        const jwt = (await import("@/lib/jwt")) as any;
        const decoded = jwt.verifyToken(refreshToken);
        if (decoded?.userId) {
          await prisma.user.update({ where: { id: decoded.userId }, data: { hashedRefreshToken: null } });
        }
      } catch (e) {
        // ignore
      }
    }

    const res = NextResponse.json({ message: "Logged out" });
    // clear cookies
    res.cookies.set({ name: ACCESS_TOKEN_COOKIE, value: "", httpOnly: true, path: "/", maxAge: 0 });
    res.cookies.set({
      name: REFRESH_TOKEN_COOKIE,
      value: "",
      httpOnly: true,
      path: "/api/auth/refresh",
      maxAge: 0,
    });

    return res;
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
