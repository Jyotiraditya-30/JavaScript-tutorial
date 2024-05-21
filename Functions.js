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
// handleObject(
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

// // ++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++++ //

// const sum = (a, b) => a + b;
// console.log(sum(5, 10));

// // ************************************************************* //

// const num = (a, b) => {
//     return a + b;
// };
// console.log(num(10, 20));

// // ************************************************************* //

// const double = n => n * 2;
// console.log(double(4));

// // ************************************************************* //

// const createUser = (name, age) => ({ name: name, age: age });
// console.log(createUser('Alice', 30));

// // ************************************************************* //

// function Timer() {
//     this.seconds = 0;
//     this.intervalId = setInterval(() => {
//         if (this.seconds < 10) {
//             this.seconds++;
//             console.log(this.seconds);
//         } else {
//             clearInterval(this.intervalId);
//         }
//     }, 1000);
// }

// const timer = new Timer();

// // ************************************************************* //

// const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);
// console.log(sumAll(1, 2, 3, 4));

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(n => n * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // Output: [2, 4]

// const sum1 = numbers.reduce((total, n) => total + n, 0);
// console.log(sum1); // Output: 15


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

// function callback(result) {
//     console.log("The result is: " + result);
// }

// // Define the myCalculator function
// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
// }

// Call myCalculator with numbers and the callback function
// myCalculator(5, 5, callback);

