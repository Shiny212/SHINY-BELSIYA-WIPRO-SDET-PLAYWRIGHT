//let name = "Shiny";
//console.log(name);
let name: string = "Sindhu";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(2, 20));