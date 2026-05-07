// Stack --> box | | --> 1 | 2 | 3 --> 3 | 2 | 1 (LIFO)
// Heap --> box | | --> doeach | sayGoodbye | greetUser

let age = 25;
let name = "Shiny";

let user = {
    name: "Shiny",
    age: 25
};

// Primitive Copy (Stack)
let x = 5;
let y = x;

// Reference Copy (Heap)
let obj1 = { name: "Shiny" };
let obj2 = obj1;

obj2.name = "Sindhu";

console.log(obj1.name);

const a = [1, 2, 3];
const b = [3, 4, 5];

let c = [...a, ...b, 10];

const obj = {
    name: "Shiny"
};

const obj3 = {
    age: 25
};

const obj4 = { ...obj1, ...obj3 };

console.log(obj4);

console.log(c);