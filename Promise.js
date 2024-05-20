// ++++++++++++++++++++++++++++++++++++++++ PROMISE ++++++++++++++++++++++++++++++++++++ //

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data from a server)
        const data = { name: 'John', age: 30 };
        const data1 = { name: 'Jyotir', age: 22 }
        // Simulate successful data retrieval
        resolve(data);
        reject(data1);
    });
}

// Using the promise
fetchData()
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// function firstFunction() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("First function completed");
//             resolve();
//         }, 1000);
//     });
// }

// function secondFunction() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Second function completed");
//             resolve();
//         }, 1000);
//     });
// }

// function thirdFunction() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Third function completed");
//             resolve();
//         }, 1000);
//     });
// }

// async function runFunctions() {
//     await firstFunction();
//     await secondFunction();
//     await thirdFunction();
//     console.log("All functions completed");
// }

// runFunctions();

// function firstFunction() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("First function completed");
//             resolve();
//         }, 1000);
//     });
// }

// function secondFunction() {
//     return new Promise((resolve) => {
//         console.log(Promise)
//         setTimeout(function () {
//             console.log("Second function completed");
//             resolve();
//         }, 1000);
//     });
// }

// function thirdFunction() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Third function completed");
//             resolve();
//         }, 1000);
//     });
// }

// firstFunction()
//     .then(secondFunction)
//     .then(thirdFunction)
//     .then(() => {
//         console.log("All functions completed");
//     });
