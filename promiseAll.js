const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("function1 resolve")
            const data = [1, 2, 3, 4]
            resolve(data);
        }, 2000)
    })
}
const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("function2 resolve")
            const data = [4, 5, 6, 7]
            resolve(data);
        }, 2000)
    })
}
const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("function3 resolve")
            const data = [8, 9, 10, 11]
            resolve(data);
        }, 2000)
    })
}

//promise all
Promise.all([
    function1(),
    function2(),
    function3()
])
    .then(result => {
        console.log("All promises are fullfilled ", result);
    })
    .catch(error => {
        console.error("Error in promises", error.message);
    })

//case 2:

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

Promise.all([
    getData(),
    getError()
])
    .then(dataArray => {
        console.log("All data fetched: ", dataArray);
    })
    .catch(error => {
        console.error("Error occured: ", error); // if any one promise is rejected , It will show the error
    })