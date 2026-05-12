enum Role {
    Admin = "Admin",
    User = "User",
    SuperUser = "SuperUser"
}
enum Priviledge {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}
type Emp = { id: number | string, name: string, role: Role }; // keyof -> "id" | "name" | "role"
type Admin = { priviledges: Priviledge[] };
type SuperUser = Emp & Admin;

let list: (Emp | Admin | SuperUser)[] = []; // any -> anything
function addEmp(emp: Emp | Admin | SuperUser): void {
    list.push(emp);
}

function getEmp(index: number) {
    console.log(list[index]);
}

addEmp({ id: 10, name: "Shiny", role: Role.User });
addEmp({ id: "abc", name: "Sindhiya", role: Role.User });
addEmp({ id: 20, name: "Maha", role: Role.Admin, priviledges: [Priviledge.Read, Priviledge.Write] });
getEmp(0);
getEmp(1);
getEmp(2);

const points = {a: 10, b: 20};
type PointKeys = keyof typeof points; // Result "a" | "b"

function getProperty<T, K extends keyof T>(obj: T, key: K) { // keyof "id" | "username" | "email"
    return obj[key];
}

const user = { id: 1, username: "hello", email: "abc@example.com" }
// console.log(getProperty(user, "email"));
// console.log(getProperty(user, "username"));
// console.log(getProperty(user, "id"));


