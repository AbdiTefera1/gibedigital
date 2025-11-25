// lib/permissionGuard.ts
import { JWTPayload } from "@/lib/jwt";
import { RolePermissions } from "@/lib/rbac";

// export function permissionGuard(
//   user: JWTPayload | null,
//   requiredPermission: string
// ): boolean {
//   if (!user) return false;

//   const role = user.role ?? "";
//   const permissions = RolePermissions[role];

//   if (!permissions) return false;

//   return permissions.includes(requiredPermission);
// }

export function permissionGuard(user: JWTPayload | null, requiredPermission: string) {
    if (!user) return false;
  
    const rolePermissions = RolePermissions[user.role ?? ""] ?? [];
    const userPermissions = user.permissions ?? [];
  
    return [...rolePermissions, ...userPermissions].includes(requiredPermission);
  }
