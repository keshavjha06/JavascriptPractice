//method overloading is not supported in javascript
//but we can achieve it using function parameters

function print() {
}

function print(name) {
    console.log(name);
}

function print(name, age) {
    console.log(name, age);
}

function print(name, age, job) {
    console.log(name, age, job);
}

//calling function with different number of arguments
print(); // undefined undefined undefined
print("John"); // John undefined undefined
print("John", 30); // John 30 undefined
print("John", 30, "Developer"); // John 30 Developer

function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
    if (typeof browserVersion === 'number' && typeof remoteExecution === 'boolean') {
        console.log(`Browser: ${browserName} , Version: ${browserVersion} , Remote Execution: ${remoteExecution}`);
    }
    else if (typeof browserVersion === 'number') {
        console.log(`Browser: ${browserName} , Version: ${browserVersion}`);
    }
    else {
        console.log(`Browser: ${browserName}`);
    }
}

displayBrowserInfo("Chrome", 115, true);
displayBrowserInfo("Firefox", 116);
displayBrowserInfo("Safari");