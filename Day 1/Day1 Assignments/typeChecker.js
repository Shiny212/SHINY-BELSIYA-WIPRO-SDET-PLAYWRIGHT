function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    } else if (typeof value === "boolean") {
        console.log("This is a boolean");
    } else if (typeof value === "object") {
        if (value === null) {
            console.log("This is null");
        } else if (Array.isArray(value)) {
            console.log("This is an array");
        } else {
            console.log("This is an object");
        }
    } else if (typeof value === "undefined") {
        console.log("This is undefined");
    } else {
        console.log("Other data type");
    }
}

checkType(10);
checkType("Hello");