const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);

function filterStrings(arr) {
    return arr.filter(str => str.length > 5);
}

console.log(filterStrings(["apple", "banana", "orange", "kiwi"]));