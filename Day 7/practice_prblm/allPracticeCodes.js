// JavaScript Coding Problems for Practice - All Answers in One File

// =====================================================
// 1. VARIABLES & DATA TYPES
// =====================================================

// 1. Swap two numbers without third variable
let a1 = 10;
let b1 = 20;
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log("Swap:", a1, b1);

// 2. Check data type
let value = null;
if (value === null) {
    console.log("Type: null");
} else if (value === undefined) {
    console.log("Type: undefined");
} else {
    console.log("Type:", typeof value);
}

// 3. Celsius to Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Fahrenheit:", fahrenheit);

// 4. Simple calculator
let num1 = 10;
let num2 = 5;
console.log("Add:", num1 + num2);
console.log("Sub:", num1 - num2);
console.log("Mul:", num1 * num2);
console.log("Div:", num1 / num2);

// 5. Calculate age
let birthYear = 2003;
let currentYear = 2026;
let age = currentYear - birthYear;
console.log("Age:", age);


// =====================================================
// 2. STRINGS
// =====================================================

// 1. Reverse string without reverse()
let str1 = "Shiny";
let reversed = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log("Reversed:", reversed);

// 2. Count vowels
let str2 = "JavaScript";
let vowelCount = 0;
for (let i = 0; i < str2.length; i++) {
    let ch = str2[i].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowelCount++;
    }
}
console.log("Vowels:", vowelCount);

// 3. Palindrome string
let str3 = "madam";
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
let sentence1 = "hello world javascript";
let words1 = sentence1.split(" ");
let capitalized = "";
for (let i = 0; i < words1.length; i++) {
    capitalized += words1[i][0].toUpperCase() + words1[i].slice(1) + " ";
}
console.log("Capitalized:", capitalized);

// 5. Longest word
let sentence2 = "JavaScript is a powerful language";
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
let primeNum = 17;
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
let factNum = 5;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

// 4. Fibonacci series
let n = 7;
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
let armNum = 153;
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
let arr1 = [10, 5, 30, 2, 50];
let largest = arr1[0];
let smallest = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) largest = arr1[i];
    if (arr1[i] < smallest) smallest = arr1[i];
}
console.log("Largest:", largest, "Smallest:", smallest);

// 2. Remove duplicates
let arr2 = [1, 2, 2, 3, 4, 4];
let uniqueArr = [];
for (let i = 0; i < arr2.length; i++) {
    if (!uniqueArr.includes(arr2[i])) {
        uniqueArr.push(arr2[i]);
    }
}
console.log("Unique:", uniqueArr);

// 3. Sort without sort()
let arr3 = [5, 2, 8, 1];
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
let arr4 = [10, 40, 20, 50, 30];
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
let arr5a = [1, 2, 3];
let arr5b = [3, 4, 5];
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
    name: "Shiny",
    age: 22,
    course: "CSE"
};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 2. Count keys
let keyCount = Object.keys(student).length;
console.log("Key Count:", keyCount);

// 3. Merge two objects
let objA = { name: "Shiny" };
let objB = { age: 22 };
let mergedObj = { ...objA, ...objB };
console.log("Merged Object:", mergedObj);

// 4. Object into keys and values array
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

// 5. Shopping cart total
let cart = {
    item1: 100,
    item2: 200,
    item3: 300
};
let totalBill = 0;
for (let key in cart) {
    totalBill += cart[key];
}
console.log("Total Bill:", totalBill);


// =====================================================
// 6. LOOPS
// =====================================================

// 1. Star pyramid
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// 2. Multiplication tables 1 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// 3. Sum of even numbers 1 to 100
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log("Even Sum:", evenSum);

// 4. Prime numbers 1 to 100
console.log("Prime Numbers 1 to 100:");
for (let i = 2; i <= 100; i++) {
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
let guess = 7;
while (guess !== secretNumber) {
    console.log("Wrong guess");
    break;
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
console.log("Greatest:", greatestOfThree(10, 20, 15));

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
console.log("Number Palindrome:", isNumberPalindrome(121));

// 3. Currency conversion
function convertCurrency(amount, rate) {
    return amount * rate;
}
console.log("Currency:", convertCurrency(10, 83));

// 4. Return even numbers from array
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6]));

// 5. Calculator using functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
console.log(add(10, 5), subtract(10, 5), multiply(10, 5), divide(10, 5));


// =====================================================
// 8. SCOPE & HOISTING
// =====================================================

// 1. Variable hoisting
console.log("Hoisting var:", hoistVar);
var hoistVar = "Hello";

// 2. Block scope using let
{
    let blockValue = 100;
    console.log("Block Value:", blockValue);
}

// 3. Closure behavior
function outerFunction() {
    let message = "Hello Closure";
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
}
let closureDemo = outerFunction();
closureDemo();

// 4. Nested functions
function outer() {
    let outerValue = "Outer";
    function inner() {
        console.log("Access:", outerValue);
    }
    inner();
}
outer();

// 5. Correct scoping
let scopeName = "Shiny";
if (true) {
    let scopeName = "Sindhu";
    console.log("Inside:", scopeName);
}
console.log("Outside:", scopeName);


// =====================================================
// 9. CALLBACK FUNCTIONS & SETTIMEOUT
// =====================================================

// 1. Delayed greeting
setTimeout(() => {
    console.log("Hello after delay");
}, 1000);

// 2. Countdown timer
let count = 3;
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
console.log("Callback Add:", calculator(5, 3, add));

// 4. Food ordering callback
function orderFood(callback) {
    console.log("Food ordered");
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

// 1. Normal to arrow
const greet = () => {
    console.log("Hello");
};
greet();

// 2. One-line arrow
const square = n => n * n;
console.log("Square:", square(5));

// 3. Arrow with map()
let numbers1 = [1, 2, 3];
let doubled = numbers1.map(n => n * 2);
console.log("Doubled:", doubled);

// 4. Even/odd checker
const checkEvenOdd = n => n % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(7));

// 5. Grade calculator
const gradeCalculator = marks => {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else return "C";
};
console.log("Grade:", gradeCalculator(85));


// =====================================================
// 11. MAP, FILTER, FOREACH
// =====================================================

// 1. Double numbers
let nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 2));

// 2. Students above 80
let students = [
    { name: "Shiny", marks: 90 },
    { name: "Sindhu", marks: 70 }
];
console.log(students.filter(s => s.marks > 80));

// 3. Print values using forEach()
nums.forEach(n => console.log(n));

// 4. Names uppercase
let names = ["shiny", "sindhu"];
console.log(names.map(n => n.toUpperCase()));

// 5. Extract even numbers
console.log(nums.filter(n => n % 2 === 0));


// =====================================================
// 12. PRIMITIVE VS REFERENCE TYPES
// =====================================================

// 1. Primitive copy
let p1 = 10;
let p2 = p1;
p2 = 20;
console.log(p1, p2);

// 2. Object reference
let ref1 = { name: "Shiny" };
let ref2 = ref1;
ref2.name = "Sindhu";
console.log(ref1.name);

// 3. Clone object
let originalObj = { name: "Shiny", age: 22 };
let clonedObj = { ...originalObj };
clonedObj.name = "Sindhu";
console.log(originalObj, clonedObj);

// 4. Compare arrays
let arA = [1, 2];
let arB = [1, 2];
console.log(arA === arB);

// 5. Shallow copy
let shallow1 = { name: "Shiny" };
let shallow2 = { ...shallow1 };
console.log(shallow2);


// =====================================================
// 13. STACK & HEAP MEMORY
// =====================================================

// 1. Stack memory
let stackA = 5;
let stackB = stackA;
stackB = 10;
console.log(stackA, stackB);

// 2. Heap reference
let heapA = { value: 5 };
let heapB = heapA;
heapB.value = 10;
console.log(heapA.value);

// 3. Object mutation
let userObj = { name: "Shiny" };
let sameUser = userObj;
sameUser.name = "Sindhu";
console.log(userObj.name);

// 4. Memory output prediction
let m1 = 100;
let m2 = m1;
m2 = 200;
console.log(m1);

// 5. Memory diagram explanation
console.log("Stack stores primitive values, Heap stores objects and arrays.");


// =====================================================
// 14. CALL STACK
// =====================================================

// 1. Nested function execution order
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
console.log("Recursive Factorial:", recursiveFactorial(5));

// 3. Recursive Fibonacci
function recursiveFibonacci(n) {
    if (n <= 1) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log("Recursive Fibonacci:", recursiveFibonacci(6));

// 4. Stack overflow simulation
// function overflow() {
//     overflow();
// }
// overflow();

// 5. Call stack flow
console.log("Call Stack Flow: first() -> second() -> third() -> return back");


// =====================================================
// 15. JSON PROBLEMS
// =====================================================

// 1. JSON string to object
let jsonString = '{"name":"Shiny","age":22}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// 2. Object to JSON string
let objectData = { name: "Sindhu", age: 25 };
let jsonData = JSON.stringify(objectData);
console.log(jsonData);

// 3. Parse API-like JSON
let apiData = '[{"id":1,"name":"Shiny"},{"id":2,"name":"Sindhu"}]';
let parsedApiData = JSON.parse(apiData);
parsedApiData.forEach(item => console.log(item.name));

// 4. JSON array of employees
let employees = [
    { id: 1, name: "Alice", salary: 5000 },
    { id: 2, name: "Bob", salary: 3000 }
];
console.log(JSON.stringify(employees));

// 5. Filter JSON data
let highSalary = employees.filter(emp => emp.salary > 4000);
console.log(highSalary);


// =====================================================
// MINI PROJECTS
// =====================================================

// 1. Student Grade Calculator
let studentMarks = 85;
if (studentMarks >= 90) console.log("Grade A");
else if (studentMarks >= 75) console.log("Grade B");
else console.log("Grade C");

// 2. ATM Withdrawal Simulator
let balance = 5000;
let withdrawAmount = 1000;
if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log("Withdrawal Successful. Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

// 3. To-Do List using Arrays
let todoList = [];
todoList.push("Learn JavaScript");
todoList.push("Practice Coding");
console.log(todoList);

// 4. Password Generator
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
}
console.log("Password:", password);

// 5. Quiz Application
let answer = "JavaScript";
if (answer === "JavaScript") {
    console.log("Correct Answer");
} else {
    console.log("Wrong Answer");
}


// =====================================================
// LOGIC BUILDING CHALLENGES
// =====================================================

// 1. Missing number in array
let missingArr = [1, 2, 4, 5];
let missingNum = 0;
for (let i = 1; i <= 5; i++) {
    if (!missingArr.includes(i)) {
        missingNum = i;
    }
}
console.log("Missing Number:", missingNum);

// 2. Anagram check
let word1 = "listen";
let word2 = "silent";
let sortedWord1 = word1.split("").sort().join("");
let sortedWord2 = word2.split("").sort().join("");
console.log("Anagram:", sortedWord1 === sortedWord2);

// 3. Rotate array by k positions
let rotateArr = [1, 2, 3, 4, 5];
let k = 2;
for (let i = 0; i < k; i++) {
    let last = rotateArr.pop();
    rotateArr.unshift(last);
}
console.log("Rotated Array:", rotateArr);

// 4. Duplicate elements
let dupArr = [1, 2, 3, 2, 4, 1];
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
let sortNums = [10, 5, 20, 1];
sortNums.sort((a, b) => a - b);
console.log(sortNums);

// 4. Scope issue fixed
let message = "Hello";
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
