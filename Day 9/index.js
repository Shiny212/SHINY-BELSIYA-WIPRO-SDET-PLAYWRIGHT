// Default parameters
function welcome(name = "Guest") {
    console.log(`Welcome ${name}!`);
}

welcome("Shiny");
welcome("Sindhu");
welcome();

// Spread operator with array
const nums = [1, 2, 3, 4, 5];

const newNums = [...nums, 6, 7, 8];

console.log(newNums);

// Spread operator with object
const obj = { name: "Shiny" };

const updatedObj = { ...obj, age: 22 };

console.log(updatedObj);

// Rest operator
const cal = {
    sum: (...nums) => nums.reduce((a, b) => a + b, 0),
};

console.log(cal.sum(1, 2, 43, 4));

// Array destructuring
const [first, second, third, fourth, fifth] =
    ["Shiny", "Sindhu", "Vivek", "Rohit"];

const [one, two, ...three] = [1, 3, 5, 6, 7];

console.log(first, second, third, fourth, fifth);

console.log(one, two, three);

// Object destructuring
const { name, age } = { name: "Shiny", age: 22 };

console.log(name, age);