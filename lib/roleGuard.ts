// lib/roleGuard.ts
import { JWTPayload } from "@/lib/jwt";

export function roleGuard(
  user: JWTPayload | null,
  allowedRoles: string[]
): boolean {
  if (!user) return false;
  return allowedRoles.includes(user.role ?? "");
}
