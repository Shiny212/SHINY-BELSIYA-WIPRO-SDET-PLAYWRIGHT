// 9. Index Signatures

// Interface
interface UserMetadata {

  // Required field
  createdAt: Date;

  // Dynamic keys
  [key: string]: string | number | boolean | Date;
}

// Object
const metadata: UserMetadata = {

  // Date value
  createdAt: new Date(),

  // Username
  username: "Shiny",

  // Age
  age: 22,

  // Active status
  isActive: true
};

// Print values
console.log(metadata.createdAt);
console.log(metadata.username);
console.log(metadata.age);
console.log(metadata.isActive);