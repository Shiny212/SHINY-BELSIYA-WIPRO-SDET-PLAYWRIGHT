// 4. Recursive Navigation Type

// Recursive type
type FolderNode = {

  // Folder name
  name: string;

  // File list
  files?: string[];

  // Sub folders
  subFolders?: FolderNode[];
};

// Folder object
const folder: FolderNode = {

  // Main folder
  name: "Root",

  // Files
  files: ["index.html", "style.css"],

  // Nested folder
  subFolders: [
    {
      name: "Assets",
      files: ["logo.png"]
    }
  ]
};

// Print values
console.log(`Folder: ${folder.name}`);
console.log(`File: ${folder.files?.[0]}`);
console.log(`Sub Folder: ${folder.subFolders?.[0]?.name}`);