// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { comparePassword, hashToken } from "@/lib/hash";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";



// Helper to set cookies on NextResponse
function attachAuthCookies(res: NextResponse, accessToken: string, refreshToken: string) {
  // access cookie: short lived
  res.cookies.set({
    name: process.env.ACCESS_TOKEN_COOKIE ?? "access_token",
    value: accessToken,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: undefined, // browser session or use expires by token expiry
  });

  // refresh cookie: long lived
  res.cookies.set({
    name: process.env.REFRESH_TOKEN_COOKIE ?? "refresh_token",
    value: refreshToken,
    httpOnly: true,
    path: "/api/auth/refresh",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    // maxAge in seconds (7 days example)
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await comparePassword(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const payload = { userId: user.id, email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    // store hashed refresh token in DB (rotation)
    const hashedRefresh = await hashToken(refreshToken);
    await prisma.user.update({
      where: { id: user.id },
      data: { hashedRefreshToken: hashedRefresh },
    });

    const res = NextResponse.json({
      message: "Logged in",
      user: { id: user.id, email: user.email, role: user.role },
    });

    attachAuthCookies(res, accessToken, refreshToken);
    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
