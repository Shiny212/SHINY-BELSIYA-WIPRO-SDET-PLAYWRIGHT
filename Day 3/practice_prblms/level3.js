const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, item) => {
    return item === "apple" ? acc + 1 : acc;
}, 0);

console.log(count);