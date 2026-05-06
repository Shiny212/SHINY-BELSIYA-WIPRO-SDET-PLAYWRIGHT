class User {
    constructor(name) {
        this.name = name;
    }

    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }

    logIn() {
        super.logIn();
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}

const user1 = new User("Shiny");
const admin1 = new Admin("Sindhu", "Super Admin");

user1.logIn();
admin1.logIn();