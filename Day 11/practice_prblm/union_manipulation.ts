// 7. Union Manipulation

// Union values
type AllEvents =
  "click"
  | "dbclick"
  | "submit"
  | "reset"
  | "keypress";

// Extract values
type MouseEvents =
  Extract<AllEvents, "click" | "dbclick">;

// Exclude values
type NonFormEvents =
  Exclude<AllEvents, "submit" | "reset">;

// Variables
let mouseEvent: MouseEvents = "click";
let nonFormEvent: NonFormEvents = "keypress";

// Print values
console.log(mouseEvent);
console.log(nonFormEvent);