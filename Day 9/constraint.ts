interface HasLength {
    length: number;
}

// generics with contraints | extends keyword
function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays
    console.log(arg.length);
}

logLength("Mahalakshmi"); // string --> length
logLength([1, 2, 3]); // array --> length
// logLength(10); // number --> X