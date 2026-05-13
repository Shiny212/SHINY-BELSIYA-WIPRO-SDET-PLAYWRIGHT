// 5. Template Literal Types

// Allowed margin types
type MarginValue =
  `${number}px`
  | `${number}rem`
  | `${number}vh`;

// Margin values
let margin1: MarginValue = "10px";
let margin2: MarginValue = "2rem";
let margin3: MarginValue = "100vh";

// Print values
console.log(margin1);
console.log(margin2);
console.log(margin3);