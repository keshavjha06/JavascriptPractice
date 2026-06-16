//callback function
//async call / task -- once this task is completed -- then only callback function is called

//basic callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function welcome() {
    console.log("welcome function called");
}

greet("Keshav", welcome);

//callback with async function:
function printInfo(name, callback) {
    //async function/task/step:
    setTimeout(function () {
        console.log("printing info for " + name);
        callback("plz call me back.....")
    }, 1000)

}

//callback
function displayMessage(message) {
    console.log(message);

}

printInfo("Bob", displayMessage)

function fetchUserData(userId, callback) {
    setTimeout(function () {
        const users = {
            1: { id: 1, name: "Keshav" },
            2: { id: 2, name: "Tom" }
        };

        const user = users[userId]
        if (user) {
            callback(null, user)
        }
        else {
            callback("User not found", null)
        }
    }, 2000)
}

//callback function:
function handleUserData(error, user) {
    if (error) {
        console.error("Error :", error)
    }
    else {
        console.log("User: ", user);

    }
}

fetchUserData(1, handleUserData)
fetchUserData(3, handleUserData)