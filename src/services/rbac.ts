export type UserRole = "owner" | "admin" | "manager" | "staff";

export type Permission =
  | "patient:read"
  | "patient:write"
  | "patient:delete"
  | "billing:read"
  | "billing:write"
  | "settings:read"
  | "settings:write"
  | "audit:read";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  owner: [
    "patient:read",
    "patient:write",
    "patient:delete",
    "billing:read",
    "billing:write",
    "settings:read",
    "settings:write",
    "audit:read",
  ],
  admin: [
    "patient:read",
    "patient:write",
    "billing:read",
    "billing:write",
    "settings:read",
    "settings:write",
    "audit:read",
  ],
  manager: [
    "patient:read",
    "patient:write",
    "billing:read",
    "settings:read",
  ],
  staff: [
    "patient:read",
    "settings:read",
  ],
};

export class RbacService {
  /**
   * Verify if a role has permission to execute an action.
   */
  static hasPermission(role: UserRole, permission: Permission): boolean {
    const permissions = ROLE_PERMISSIONS[role];
    return permissions ? permissions.includes(permission) : false;
  }

  /**
   * Enforce permission checks, throwing an error if validation fails.
   */
  static check(role: UserRole, permission: Permission) {
    if (!this.hasPermission(role, permission)) {
      throw new Error(`Forbidden: Role '${role}' lacks the required '${permission}' permission.`);
    }
  }

  /**
   * Safe check returning a boolean.
   */
  static can(role: UserRole, permission: Permission): boolean {
    return this.hasPermission(role, permission);
  }
}
