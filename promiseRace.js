const resolvePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 1000)
    })
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected");
        }, 500)
    })
}

// Use Promise.race() to see which promise settles first
Promise.race([
    resolvePromise(),
    rejectPromise()
])
    .then(result => {
        console.log("Result: ", result);
    })
    .catch(error => {
        console.error("Error: ", error);
    })