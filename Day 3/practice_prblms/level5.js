const scores = [80, 90, 70, 100];

const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(avg);

const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log(flat);