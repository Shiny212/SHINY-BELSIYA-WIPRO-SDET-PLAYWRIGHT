const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
    console.log("Hello, " + name);
});

const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(c => c * 1.8 + 32);

console.log(fahrenheit);