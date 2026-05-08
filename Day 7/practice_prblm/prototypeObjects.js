// Every object --> Object

const car = {
    brand: "Tesla",

    start: () => console.log("VroomVroom")
};

function start() {
    console.log("VroomVroom");
}

const c1 = new start();
const c2 = new start();

start.prototype.stop = function() {
    console.log("Stop");
};

// c1.stop();
// c2.stop();

// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start

const animal = { eats: true };

const rabbit = Object.create(animal);

rabbit.carrot = () => console.log("He is eating carrot");

console.log(rabbit.eats);

console.log(rabbit.hasOwnProperty("eats"));

console.log(rabbit.hasOwnProperty("carrot"));

console.log(rabbit.toString());

const arr = [1, 2, 3, -1];

arr.reverse();

arr.sort();

for(let e of arr) { // in -> index, of -> value

    console.log(e);

}