function person(name) {
    this.name = name;
}

person.prototype.sayHi = function() {
    console.log("hello " + this.name);
};

const me = new person("Shiny");
const you = new person("Sindhu");

me.sayHi();
you.sayHi();

console.log(Object.getPrototypeOf(me) === person.prototype);
console.log(me.sayHi === you.sayHi);