// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         // console.log(name); // use variable declared in the parent function
//     }
//     // name = "JyotirawdgAW";
//     displayName();
// }
// init();

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// var names = 'Jyotir'
// function a() {
//     names = "Jyotiraditya"
//     console.log(names)
//     function b() {
//         names = "Aditya"
//         console.log(names)
//     }
//     b();
// }

// a();

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }
// console.log(x);

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // function makeFunc() {
// //     const name = "Mozilla";
// //     function displayName() {
// //         console.log(name);
// //     }
// //     return displayName;
// // }

// // const myFunc = makeFunc();
// // myFunc();

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // const seconds = new Date().getTime() / 1000;

// // setTimeout(() => {
// //     // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
// //     console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
// // }, 500);

// // while (true) {
// //     if (new Date().getTime() / 1000 - seconds >= 2) {
// //         console.log("Good, looped for 2 seconds");
// //         break;
// //     }
// // }


// (() => {
//     console.log("this is the start");

//     setTimeout(() => {
//         console.log("Callback 1: this is a msg from call back");
//     });

//     console.log("this is just a message");

//     setTimeout(() => {
//         console.log("Callback 2: this is a msg from call back");
//     }, 0);

//     console.log("this is the end");
// })();

function one() {
    var isValid = true; // local env
    two(); // new execution context
}

function two() {
    var isValid; // undefined
}

var isValid = false; // global
one();