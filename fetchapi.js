const url = "https://jsonplaceholder.typicode.com/posts"

const fetchUserInfo = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("user data not found..")
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}

fetchUserInfo();
// fetch() returns a promise that resolves to a Response object