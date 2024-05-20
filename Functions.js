// function AddTwoNumbers(a, b) {
//     // console.log(a+b);
// }

// AddTwoNumbers(4, 66)




// function loginUserMessage(username = "sam") {
//     if (!username) {
//         consol
//         e.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))



// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray) {
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// // console.log(returnSecondValue([200, 400, 500, 1000]));

// const users = {
//     username: "Jyotir",
//     uniqueId: 123,
//     welcomeMessage: function () {
//         // console.log(`${this.username}, welcome`)
//         // console.log(this)

//     }
// }
// // users.welcomeMessage();
// // users.username = "Faiza"
// // users.welcomeMessage();

// // console.log(users)
// function tea() {
//     // console.log(this)
// }
// tea();

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 0);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
// }

// asyncCall();



// // ++++++++++++++++++++++++++++++++++ IIFE's ++++++++++++++++++++++++++++++++++++++++++ //

// (function () {
//     // This code will execute immediately
//     var message = "Hello, world!";
//     console.log(message);
// })();

// function normalFunction() {
//     myVar = "I'm a global variable!";
// }
// normalFunction();
// console.log(myVar);

// (function () {
//     var myVar = "I'm a local variable inside an IIFE!";
// })();

// console.log(myVar); 


// let x = 10;
// let y = 20;

// function normalFunction() {
//     globalVar = "I am a global variable!";
//     console.log(globalVar);
// }

// normalFunction();


// (function () {
//     localVar = "I am a local variable!";
//     console.log(localVar); // Output: I am a local variable!
// })();

// console.log(localVar);

// normalFunction();

// +++++++++++++++++++++++++++++++++++++++++ CALLBACK +++++++++++++++++++++++++++++++++++ //

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

function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("First function completed");
            resolve();
        }, 1000);
    });
}

function secondFunction() {
    return new Promise((resolve) => {
        console.log(Promise)
        setTimeout(function () {
            console.log("Second function completed");
            resolve();
        }, 1000);
    });
}

function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("Third function completed");
            resolve();
        }, 1000);
    });
}

firstFunction()
    .then(secondFunction)
    .then(thirdFunction)
    .then(() => {
        console.log("All functions completed");
    });
