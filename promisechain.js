function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value % 2 == 0) {
                resolve(value)
            } else {
                reject(new Error("Value is not even"))
            }
        }, delay)
    })
}

//promise chain
getEvenNumber(4, 1000)
    .then(result => {
        console.log("Promise is fullfilled with the value: " + result);
        return getEvenNumber(3, 2000)
    })
    .then(result => {
        console.log("Promise is fullfilled with the value: " + result);
    })
    .catch(error => {
        console.error("promise chain error: " + error.message);
    })