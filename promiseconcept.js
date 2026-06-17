const randomNumberPromise = new Promise((resolve, reject) => {
    //async operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue)
        } else {
            reject(new Error("value is too small!!"))
        }
    }, 2000)

})

randomNumberPromise
    .then(result => {
        console.log("promise is fullfilled with the value: " + result);
    })
    .catch(error => {
        console.error("promise is rejected with the value: " + error);
    })

