// lib/authGuard.ts
import { verifyToken } from "@/lib/jwt";

export function getTokenFromRequest(req: Request) {
  // prefer Authorization header Bearer (for API clients)
  const auth = req.headers.get("authorization") ?? "";
  if (auth.startsWith("Bearer ")) return auth.split(" ")[1];

  // fallback: cookie access_token
  const cookieHeader = req.headers.get("cookie") ?? "";
  const cookies = Object.fromEntries(cookieHeader.split(";").map((c) => {
    const [k, ...v] = c.trim().split("=");
    return [k, decodeURIComponent(v.join("="))];
  }));
  return cookies["access_token"];
}

export function authGuard(req: Request) {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  return verifyToken(token);
}
