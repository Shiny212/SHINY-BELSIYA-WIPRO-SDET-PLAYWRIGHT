const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);

console.log(result);

const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];

const titles = products.map(product => product.title);

console.log(titles);