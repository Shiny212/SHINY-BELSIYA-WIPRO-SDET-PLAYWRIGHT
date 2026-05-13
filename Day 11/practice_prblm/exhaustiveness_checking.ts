// 3. Exhaustiveness Checking

// Union type
type TaskStatus = "Open" | "InProgress" | "Closed";

// Function
function handleTask(status: TaskStatus): string {

  // Switch condition
  switch (status) {

    // Open case
    case "Open":
      return "Task is open";

    // InProgress case
    case "InProgress":
      return "Task is in progress";

    // Closed case
    case "Closed":
      return "Task is closed";

    // Never type check
    default:
      const neverStatus: never = status;
      return neverStatus;
  }
}

// Function call
console.log(handleTask("Open"));
console.log(handleTask("InProgress"));
console.log(handleTask("Closed"));