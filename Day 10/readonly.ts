// const user = {
//     id: 21,
//     name: "Shiny",
//     age: 22
// } as const;

// // user.name = "Maha"
// console.log(user);


interface Task {
    readonly title: string;
    completed: boolean;
}

const myTask: Readonly<Task> = {
    title: "Do task",
    completed: true
}

const myTask1: Task = {
    title: "Do task",
    completed: true
}

// myTask.completed = false;

console.log(myTask);
console.log(myTask1);

const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);