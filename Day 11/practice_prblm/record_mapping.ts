// 2. Record Mapping

// Enum values
enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest"
}

// Record object
const PermissionMap: Record<Role, boolean> = {

  // Admin permission
  [Role.Admin]: true,

  // Editor permission
  [Role.Editor]: true,

  // Guest permission
  [Role.Guest]: false
};

// Print values
console.log(`Admin: ${PermissionMap[Role.Admin]}`);
console.log(`Editor: ${PermissionMap[Role.Editor]}`);
console.log(`Guest: ${PermissionMap[Role.Guest]}`);