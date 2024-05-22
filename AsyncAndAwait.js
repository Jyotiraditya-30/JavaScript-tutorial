// +++++++++++++++++++++++++++ Using Async and Await +++++++++++++++++++++++++++++++++++++++++ //

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User data fetched");
//             resolve({ userId: 1, name: 'John Doe' });
//         }, 2000);
//     });
// }

// function fetchUserDetails(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User details fetched");
//             resolve({ ...user, age: 30, email: 'john.doe@example.com' });
//         }, 1000);
//     });
// }

// async function fetchUser() {
//     try {
//         const user = await fetchUserData();
//         console.log("User:", user);

//         const details = await fetchUserDetails(user);
//         console.log("User details:", details);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchUser();

// +++++++++++++++++++++++++++ Using Promise +++++++++++++++++++++++++++++++++++++++++ //

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ userId: 1, name: 'John Doe' });
        }, 2000);
    });
}

function fetchUserDetails(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User details fetched");
            resolve({ ...user, age: 30, email: 'john.doe@example.com' });
        }, 1000);
    });
}

fetchUserData()
    .then(user => {
        console.log("User:", user);
        return fetchUserDetails(user);
    })
    .then(details => {
        console.log("User details:", details);
    })
    .catch(error => {
        console.error("Error:", error);
    });
