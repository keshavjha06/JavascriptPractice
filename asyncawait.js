/* async function f1() {
    console.log("This is async function without await step");
    return 42; // return a promise(resolved) on top of 42 
}

f1()
.then(result => {
    console.log(result);  
})
 */
//async without await but with error:
async function f2() {
    console.log("This is async function with error");
    throw new Error("this is my error"); // return a promise (rejected)
}

/* f2().catch(error => {
    console.log(`the error message ${error}`);
})
 */
// async function with a resolved/rejected promise

function getInfo() {
    return new Promise((resolve , reject)=>{
        const randomNumber = Math.random();
        setTimeout(() => {
            if(randomNumber < 0.5) {
                resolve(randomNumber);
            } else{
                reject(new Error("wrong value error"))
            }
        }, 2000);
    })

}

//create async function which is calling getInfo()
async function getNumberInfo() {
    try{
    const result = await getInfo();
    console.log("result "  , result);
    }catch(error){
        console.log("error " , error); 
    }
    
}

getNumberInfo();

async function f3() {
    await f2();
}