// 6. Conditional Types with infer

// Conditional type
type UnwrapPromise<T> =
  T extends Promise<infer U> ? U : T;

// Promise type
type A = UnwrapPromise<Promise<string>>;

// Normal type
type B = UnwrapPromise<number>;

// Variables
let value1: A = "Hello";
let value2: B = 100;

// Print values
console.log(value1);
console.log(value2);