// JavaScript Coding Problems for Practice - All Answers in One File
// User Input Version using prompt-sync

const prompt = require("prompt-sync")();

// =====================================================
// 1. VARIABLES & DATA TYPES
// =====================================================

// 1. Swap two numbers without using third variable
let a1 = Number(prompt("Enter first number: "));
let b1 = Number(prompt("Enter second number: "));
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log("After Swap:", a1, b1);

// 2. Check data type
let value = prompt("Enter any value: ");
if (value === "null") {
    console.log("Type: null");
} else if (value === "undefined") {
    console.log("Type: undefined");
} else if (value === "true" || value === "false") {
    console.log("Type: boolean");
} else if (!isNaN(Number(value))) {
    console.log("Type: number");
} else {
    console.log("Type: string");
}

// 3. Celsius to Fahrenheit
let celsius = Number(prompt("Enter Celsius value: "));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Fahrenheit:", fahrenheit);

// 4. Simple calculator
let num1 = Number(prompt("Enter first calculator number: "));
let num2 = Number(prompt("Enter second calculator number: "));
console.log("Add:", num1 + num2);
console.log("Sub:", num1 - num2);
console.log("Mul:", num1 * num2);
console.log("Div:", num1 / num2);

// 5. Calculate age
let birthYear = Number(prompt("Enter birth year: "));
let currentYear = Number(prompt("Enter current year: "));
let age = currentYear - birthYear;
console.log("Age:", age);

// =====================================================
// 2. STRINGS
// =====================================================

// 1. Reverse string without reverse()
let str1 = prompt("Enter string to reverse: ");
let reversed = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log("Reversed:", reversed);

// 2. Count vowels
let str2 = prompt("Enter string to count vowels: ");
let vowelCount = 0;
for (let i = 0; i < str2.length; i++) {
    let ch = str2[i].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowelCount++;
    }
}
console.log("Vowels:", vowelCount);

// 3. Palindrome string
let str3 = prompt("Enter string to check palindrome: ");
let rev3 = "";
for (let i = str3.length - 1; i >= 0; i--) {
    rev3 += str3[i];
}
if (str3 === rev3) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 4. Capitalize first letter of every word
let sentence1 = prompt("Enter sentence to capitalize: ");
let words1 = sentence1.split(" ");
let capitalized = "";
for (let i = 0; i < words1.length; i++) {
    capitalized += words1[i][0].toUpperCase() + words1[i].slice(1) + " ";
}
console.log("Capitalized:", capitalized);

// 5. Find longest word
let sentence2 = prompt("Enter sentence to find longest word: ");
let words2 = sentence2.split(" ");
let longest = words2[0];
for (let i = 1; i < words2.length; i++) {
    if (words2[i].length > longest.length) {
        longest = words2[i];
    }
}
console.log("Longest Word:", longest);

// =====================================================
// 3. NUMBERS & MATH
// =====================================================

// 1. Random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);

// 2. Prime number check
let primeNum = Number(prompt("Enter number to check prime: "));
let isPrime = true;
if (primeNum <= 1) {
    isPrime = false;
}
for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    }
}
console.log("Prime:", isPrime);

// 3. Factorial
let factNum = Number(prompt("Enter number for factorial: "));
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

// 4. Fibonacci series
let n = Number(prompt("Enter count for Fibonacci series: "));
let f1 = 0;
let f2 = 1;
console.log("Fibonacci:");
for (let i = 1; i <= n; i++) {
    console.log(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
}

// 5. Armstrong number
let armNum = Number(prompt("Enter number to check Armstrong: "));
let tempArm = armNum;
let sumArm = 0;
while (tempArm > 0) {
    let digit = tempArm % 10;
    sumArm += digit * digit * digit;
    tempArm = Math.floor(tempArm / 10);
}
console.log("Armstrong:", sumArm === armNum);

// =====================================================
// 4. ARRAYS
// =====================================================

// 1. Largest and smallest
let arr1 = prompt("Enter numbers separated by comma: ").split(",").map(Number);
let largest = arr1[0];
let smallest = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) largest = arr1[i];
    if (arr1[i] < smallest) smallest = arr1[i];
}
console.log("Largest:", largest, "Smallest:", smallest);

// 2. Remove duplicates
let arr2 = prompt("Enter duplicate numbers separated by comma: ").split(",").map(Number);
let uniqueArr = [];
for (let i = 0; i < arr2.length; i++) {
    if (!uniqueArr.includes(arr2[i])) {
        uniqueArr.push(arr2[i]);
    }
}
console.log("Unique:", uniqueArr);

// 3. Sort without sort()
let arr3 = prompt("Enter numbers to sort separated by comma: ").split(",").map(Number);
for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] > arr3[j]) {
            let temp = arr3[i];
            arr3[i] = arr3[j];
            arr3[j] = temp;
        }
    }
}
console.log("Sorted:", arr3);

// 4. Second largest
let arr4 = prompt("Enter numbers to find second largest: ").split(",").map(Number);
let firstLargest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr4[i];
    } else if (arr4[i] > secondLargest && arr4[i] !== firstLargest) {
        secondLargest = arr4[i];
    }
}
console.log("Second Largest:", secondLargest);

// 5. Merge two arrays and remove duplicates
let arr5a = prompt("Enter first array separated by comma: ").split(",").map(Number);
let arr5b = prompt("Enter second array separated by comma: ").split(",").map(Number);
let merged = [...arr5a, ...arr5b];
let mergedUnique = [];
for (let i = 0; i < merged.length; i++) {
    if (!mergedUnique.includes(merged[i])) {
        mergedUnique.push(merged[i]);
    }
}
console.log("Merged Unique:", mergedUnique);

// =====================================================
// 5. OBJECTS
// =====================================================

// 1. Student object and display dynamically
let student = {
    name: prompt("Enter student name: "),
    age: Number(prompt("Enter student age: ")),
    course: prompt("Enter student course: ")
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 2. Count keys
let keyCount = Object.keys(student).length;
console.log("Key Count:", keyCount);

// 3. Merge two objects
let objA = { name: prompt("Enter object name: ") };
let objB = { age: Number(prompt("Enter object age: ")) };
let mergedObj = { ...objA, ...objB };
console.log("Merged Object:", mergedObj);

// 4. Object keys and values
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

// 5. Shopping cart total
let cart = {
    item1: Number(prompt("Enter item1 price: ")),
    item2: Number(prompt("Enter item2 price: ")),
    item3: Number(prompt("Enter item3 price: "))
};
let totalBill = 0;
for (let key in cart) {
    totalBill += cart[key];
}
console.log("Total Bill:", totalBill);

// =====================================================
// 6. LOOPS
// =====================================================

// 1. Star pyramid pattern
let rows = Number(prompt("Enter number of rows: "));
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// 2. Multiplication table
let tableNum = Number(prompt("Enter table number: "));
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// 3. Sum of even numbers
let evenLimit = Number(prompt("Enter limit for even sum: "));
let evenSum = 0;
for (let i = 1; i <= evenLimit; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log("Even Sum:", evenSum);

// 4. Prime numbers up to limit
let primeLimit = Number(prompt("Enter limit for prime numbers: "));
console.log("Prime Numbers:");
for (let i = 2; i <= primeLimit; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) console.log(i);
}

// 5. Number guessing game
let secretNumber = 7;
let guess = Number(prompt("Guess number between 1 and 10: "));
while (guess !== secretNumber) {
    console.log("Wrong guess");
    guess = Number(prompt("Try again: "));
}
console.log("Correct guess");

// =====================================================
// 7. FUNCTIONS
// =====================================================

// 1. Greatest of three numbers
function greatestOfThree(a, b, c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}
let g1 = Number(prompt("Enter first number: "));
let g2 = Number(prompt("Enter second number: "));
let g3 = Number(prompt("Enter third number: "));
console.log("Greatest:", greatestOfThree(g1, g2, g3));

// 2. Number palindrome
function isNumberPalindrome(num) {
    let original = num;
    let reverse = 0;
    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reverse;
}
let palNum = Number(prompt("Enter number to check palindrome: "));
console.log("Number Palindrome:", isNumberPalindrome(palNum));

// 3. Currency conversion
function convertCurrency(amount, rate) {
    return amount * rate;
}
let amount = Number(prompt("Enter amount: "));
let rate = Number(prompt("Enter conversion rate: "));
console.log("Currency:", convertCurrency(amount, rate));

// 4. Return even numbers from array
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let evenInput = prompt("Enter numbers separated by comma: ").split(",").map(Number);
console.log("Even Numbers:", getEvenNumbers(evenInput));

// 5. Calculator using functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
let calA = Number(prompt("Enter first calculator number: "));
let calB = Number(prompt("Enter second calculator number: "));
console.log("Add:", add(calA, calB));
console.log("Sub:", subtract(calA, calB));
console.log("Mul:", multiply(calA, calB));
console.log("Div:", divide(calA, calB));

// =====================================================
// 8. SCOPE & HOISTING
// =====================================================

// 1. Variable hoisting example
console.log("Hoisting var:", hoistVar);
var hoistVar = prompt("Enter hoisted variable value: ");
console.log("After assignment:", hoistVar);

// 2. Block scope using let
{
    let blockValue = prompt("Enter block value: ");
    console.log("Block Value:", blockValue);
}

// 3. Closure behavior
function outerFunction() {
    let message = prompt("Enter closure message: ");
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
}
let closureDemo = outerFunction();
closureDemo();

// 4. Nested functions
function outer() {
    let outerValue = prompt("Enter outer value: ");
    function inner() {
        console.log("Access:", outerValue);
    }
    inner();
}
outer();

// 5. Correct variable scoping
let scopeName = prompt("Enter outside scope name: ");
if (true) {
    let scopeName = prompt("Enter inside scope name: ");
    console.log("Inside:", scopeName);
}
console.log("Outside:", scopeName);

// =====================================================
// 9. CALLBACK FUNCTIONS & SETTIMEOUT
// =====================================================

// 1. Delayed greeting
let delayedName = prompt("Enter name for delayed greeting: ");
setTimeout(() => {
    console.log("Hello " + delayedName);
}, 1000);

// 2. Countdown timer
let count = Number(prompt("Enter countdown number: "));
let timer = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
        clearInterval(timer);
        console.log("Time up");
    }
}, 1000);

// 3. Callback calculator
function calculator(a, b, callback) {
    return callback(a, b);
}
let cbA = Number(prompt("Enter first callback calculator number: "));
let cbB = Number(prompt("Enter second callback calculator number: "));
console.log("Callback Add:", calculator(cbA, cbB, add));

// 4. Food ordering callback
function orderFood(callback) {
    let food = prompt("Enter food name: ");
    console.log(food + " ordered");
    callback();
}
function deliverFood() {
    console.log("Food delivered");
}
orderFood(deliverFood);

// 5. Sequential callbacks
function step1(callback) {
    console.log("Step 1 completed");
    callback();
}
function step2() {
    console.log("Step 2 completed");
}
step1(step2);

// =====================================================
// 10. ARROW FUNCTIONS
// =====================================================

// 1. Arrow greeting
const greet = () => {
    let name = prompt("Enter name for arrow greeting: ");
    console.log("Hello " + name);
};
greet();

// 2. One-line arrow function
const square = n => n * n;
let squareNum = Number(prompt("Enter number to square: "));
console.log("Square:", square(squareNum));

// 3. Arrow with map()
let numbers1 = prompt("Enter numbers for doubling: ").split(",").map(Number);
let doubled = numbers1.map(n => n * 2);
console.log("Doubled:", doubled);

// 4. Even/odd checker
const checkEvenOdd = n => n % 2 === 0 ? "Even" : "Odd";
let evenOddNum = Number(prompt("Enter number to check even/odd: "));
console.log(checkEvenOdd(evenOddNum));

// 5. Grade calculator
const gradeCalculator = marks => {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else return "C";
};
let marksInput = Number(prompt("Enter marks: "));
console.log("Grade:", gradeCalculator(marksInput));

// =====================================================
// 11. MAP, FILTER, FOREACH
// =====================================================

// 1. Double numbers using map()
let nums = prompt("Enter numbers separated by comma: ").split(",").map(Number);
console.log("Doubled:", nums.map(n => n * 2));

// 2. Filter students above 80
let students = [
    { name: prompt("Enter first student name: "), marks: Number(prompt("Enter first student marks: ")) },
    { name: prompt("Enter second student name: "), marks: Number(prompt("Enter second student marks: ")) }
];
console.log("Above 80:", students.filter(s => s.marks > 80));

// 3. Print array values using forEach()
nums.forEach(n => console.log(n));

// 4. Names uppercase
let names = prompt("Enter names separated by comma: ").split(",");
console.log("Uppercase:", names.map(n => n.toUpperCase()));

// 5. Extract even numbers
console.log("Even Numbers:", nums.filter(n => n % 2 === 0));

// =====================================================
// 12. PRIMITIVE VS REFERENCE TYPES
// =====================================================

// 1. Primitive copy
let p1 = Number(prompt("Enter primitive value: "));
let p2 = p1;
p2 = Number(prompt("Enter changed copied value: "));
console.log("Original:", p1);
console.log("Copied:", p2);

// 2. Object reference
let ref1 = { name: prompt("Enter object name: ") };
let ref2 = ref1;
ref2.name = prompt("Enter changed name: ");
console.log("Original object name:", ref1.name);

// 3. Clone object
let originalObj = { name: prompt("Enter original name: "), age: Number(prompt("Enter age: ")) };
let clonedObj = { ...originalObj };
clonedObj.name = prompt("Enter cloned object new name: ");
console.log("Original Object:", originalObj);
console.log("Cloned Object:", clonedObj);

// 4. Compare arrays
let arA = [1, 2];
let arB = [1, 2];
console.log("Arrays Equal:", arA === arB);

// 5. Shallow copy
let shallow1 = { name: prompt("Enter shallow copy name: ") };
let shallow2 = { ...shallow1 };
console.log("Shallow Copy:", shallow2);

// =====================================================
// 13. STACK & HEAP MEMORY
// =====================================================

// 1. Stack memory
let stackA = Number(prompt("Enter stack value: "));
let stackB = stackA;
stackB = Number(prompt("Enter changed stack value: "));
console.log("Stack A:", stackA);
console.log("Stack B:", stackB);

// 2. Heap memory
let heapA = { value: Number(prompt("Enter heap value: ")) };
let heapB = heapA;
heapB.value = Number(prompt("Enter changed heap value: "));
console.log("Heap A Value:", heapA.value);

// 3. Object mutation
let userObj = { name: prompt("Enter user name: ") };
let sameUser = userObj;
sameUser.name = prompt("Enter changed user name: ");
console.log("User Object:", userObj);

// 4. Memory output prediction
let m1 = Number(prompt("Enter memory value: "));
let m2 = m1;
m2 = Number(prompt("Enter changed memory value: "));
console.log("Original Memory Value:", m1);

// 5. Memory explanation
console.log("Stack stores primitive values.");
console.log("Heap stores objects and arrays.");

// =====================================================
// 14. CALL STACK
// =====================================================

// 1. Nested function call order
function first() {
    console.log("First");
    second();
}
function second() {
    console.log("Second");
    third();
}
function third() {
    console.log("Third");
}
first();

// 2. Recursive factorial
function recursiveFactorial(n) {
    if (n === 1) return 1;
    return n * recursiveFactorial(n - 1);
}
let recFactNum = Number(prompt("Enter recursive factorial number: "));
console.log("Recursive Factorial:", recursiveFactorial(recFactNum));

// 3. Recursive Fibonacci
function recursiveFibonacci(n) {
    if (n <= 1) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
let recFibNum = Number(prompt("Enter recursive Fibonacci position: "));
console.log("Recursive Fibonacci:", recursiveFibonacci(recFibNum));

// 4. Stack overflow simulation
console.log("Stack overflow happens when a function calls itself continuously without stopping.");

// 5. Call stack flow
console.log("Call Stack Flow: first() -> second() -> third() -> return back");

// =====================================================
// 15. JSON PROBLEMS
// =====================================================

// 1. JSON string to object
let jsonName = prompt("Enter JSON name: ");
let jsonAge = Number(prompt("Enter JSON age: "));
let jsonString = '{"name":"' + jsonName + '","age":' + jsonAge + '}';
let jsonObject = JSON.parse(jsonString);
console.log("JSON Object:", jsonObject);

// 2. Object to JSON string
let objectData = { name: prompt("Enter object name: "), age: Number(prompt("Enter object age: ")) };
let jsonData = JSON.stringify(objectData);
console.log("JSON String:", jsonData);

// 3. Parse API-like JSON
let apiData = '[{"id":1,"name":"Shiny"},{"id":2,"name":"Sindhu"}]';
let parsedApiData = JSON.parse(apiData);
parsedApiData.forEach(item => console.log(item.name));

// 4. JSON employee records
let employees = [
    { id: 1, name: prompt("Enter employee 1 name: "), salary: Number(prompt("Enter employee 1 salary: ")) },
    { id: 2, name: prompt("Enter employee 2 name: "), salary: Number(prompt("Enter employee 2 salary: ")) }
];
console.log("Employees JSON:", JSON.stringify(employees));

// 5. Filter JSON data
let highSalary = employees.filter(emp => emp.salary > 4000);
console.log("High Salary Employees:", highSalary);

// =====================================================
// MINI PROJECTS
// =====================================================

// 1. Student Grade Calculator
let studentMarks = Number(prompt("Enter student marks: "));
if (studentMarks >= 90) console.log("Grade A");
else if (studentMarks >= 75) console.log("Grade B");
else console.log("Grade C");

// 2. ATM Withdrawal Simulator
let balance = Number(prompt("Enter ATM balance: "));
let withdrawAmount = Number(prompt("Enter withdraw amount: "));
if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log("Withdrawal Successful. Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

// 3. To-Do List using Arrays
let todoList = [];
todoList.push(prompt("Enter first task: "));
todoList.push(prompt("Enter second task: "));
console.log("Todo List:", todoList);

// 4. Password Generator
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let passwordLength = Number(prompt("Enter password length: "));
let password = "";
for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
}
console.log("Password:", password);

// 5. Quiz Application
let answer = prompt("Which language are you learning? ");
if (answer === "JavaScript") {
    console.log("Correct Answer");
} else {
    console.log("Wrong Answer");
}

// =====================================================
// LOGIC BUILDING CHALLENGES
// =====================================================

// 1. Missing number in array
let missingArr = prompt("Enter numbers with one missing separated by comma: ").split(",").map(Number);
let missingLimit = Number(prompt("Enter maximum number: "));
let missingNum = 0;
for (let i = 1; i <= missingLimit; i++) {
    if (!missingArr.includes(i)) {
        missingNum = i;
    }
}
console.log("Missing Number:", missingNum);

// 2. Anagram check
let word1 = prompt("Enter first word: ");
let word2 = prompt("Enter second word: ");
let sortedWord1 = word1.split("").sort().join("");
let sortedWord2 = word2.split("").sort().join("");
console.log("Anagram:", sortedWord1 === sortedWord2);

// 3. Rotate array by k positions
let rotateArr = prompt("Enter array to rotate separated by comma: ").split(",").map(Number);
let k = Number(prompt("Enter rotate count: "));
for (let i = 0; i < k; i++) {
    let last = rotateArr.pop();
    rotateArr.unshift(last);
}
console.log("Rotated Array:", rotateArr);

// 4. Duplicate elements
let dupArr = prompt("Enter array with duplicates separated by comma: ").split(",").map(Number);
let duplicates = [];
for (let i = 0; i < dupArr.length; i++) {
    for (let j = i + 1; j < dupArr.length; j++) {
        if (dupArr[i] === dupArr[j] && !duplicates.includes(dupArr[i])) {
            duplicates.push(dupArr[i]);
        }
    }
}
console.log("Duplicates:", duplicates);

// 5. Flatten nested arrays manually
let nestedArr = [1, [2, 3], [4, 5]];
let flatArr = [];
for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            flatArr.push(nestedArr[i][j]);
        }
    } else {
        flatArr.push(nestedArr[i]);
    }
}
console.log("Flat Array:", flatArr);

// =====================================================
// DEBUGGING CHALLENGES
// =====================================================

// 1. Fixed infinite loop
let loopNum = 1;
while (loopNum <= 5) {
    console.log(loopNum);
    loopNum++;
}

// 2. Undefined return fixed
function returnValue() {
    return "Value returned";
}
console.log(returnValue());

// 3. Correct number sorting
let sortNums = prompt("Enter numbers to sort separated by comma: ").split(",").map(Number);
sortNums.sort((a, b) => a - b);
console.log("Sorted:", sortNums);

// 4. Scope issue fixed
let message = prompt("Enter message: ");
function showMessage() {
    console.log(message);
}
showMessage();

// 5. Callback order fixed
function firstTask(callback) {
    console.log("First task completed");
    callback();
}
function secondTask() {
    console.log("Second task completed");
}
firstTask(secondTask);
