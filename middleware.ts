// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authGuard } from "@/lib/authGuard";
import { roleGuard } from "./lib/roleGuard";
import { Roles } from "./lib/rbac";

// Protect paths example: /api/protected/*
export function middleware(req: NextRequest) {
  const protectedPaths = ["/api/protected", "/admin"]; // use prefixes where appropriate
  const pathname = req.nextUrl.pathname;

  const shouldProtect = protectedPaths.some((p) => pathname.startsWith(p));
  if (!shouldProtect) {
    return NextResponse.next();
  }

  const user = authGuard(req as unknown as Request);
  if (!user) {
    // for API call
    if (pathname.startsWith("/api")) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
    }
    // for pages, redirect to login
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/admin")) {
    const user = authGuard(req as unknown as Request);

    if (!user || !roleGuard(user, [Roles.ADMIN, Roles.SUPERADMIN])) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }


  // attach user info via header for downstream handlers (optional)
  req.nextUrl.searchParams.set("auth_user", JSON.stringify({ userId: user.userId, email: user.email, role: user.role }));
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/protected/:path*","/admin/:path*"]
};
