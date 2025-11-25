// lib/rbac.ts

// Define roles in your system
export const Roles = {
    USER: "USER",
    ADMIN: "ADMIN",
    SUPERADMIN: "SUPERADMIN",
  } as const;
  
  export type RoleType = keyof typeof Roles;
  
  // Define permissions in your system
  export const Permissions = {
    CREATE_POST: "CREATE_POST",
    EDIT_POST: "EDIT_POST",
    DELETE_POST: "DELETE_POST",
    MANAGE_USERS: "MANAGE_USERS",
  } as const;
  
  // Map roles -> permissions
  export const RolePermissions: Record<string, string[]> = {
    USER: [Permissions.CREATE_POST],
    ADMIN: [
      Permissions.CREATE_POST,
      Permissions.EDIT_POST,
      Permissions.DELETE_POST,
    ],
    SUPERADMIN: [
      Permissions.CREATE_POST,
      Permissions.EDIT_POST,
      Permissions.DELETE_POST,
      Permissions.MANAGE_USERS,
    ],
  };
  