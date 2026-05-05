function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// setTimeout example
setTimeout(() => {
    console.log("Data received after 5 seconds");
}, 5000);

// setInterval example
setInterval(() => {
    console.log("Checking for new data...");
}, 3000);