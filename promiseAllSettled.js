/* It returns a single promise that is fulfilled with an array of result objects , one for each promise
Each result object contains:
a status ( either "fulfilled" or "rejected") and
a value (fulfilled value) or reason (rejection reason). */

/* Use Case:
Useful when you want to process all promises , whether they succeed or fail
and you want to gather information about outcome of each promise */

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from getData");
        }, 2000)
    })
}

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("data is not available from getError");
        }, 2000)
    })
}

Promise.allSettled([
    getData(),
    getError()
])
    .then(results => {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log("Value: ", result.value);
            } else {
                console.error("reason for rejection: ", result.reason);
            }
        })
    })