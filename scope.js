// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);

// }



// // console.log(a);
// // console.log(b);
// // console.log(c);


// function one() {
//     const username = "hitesh"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()

// }

// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++



// // function addone(num){
// //     return num + 1
// // }

// // console.log(addone(5))


// // const addTwo = function(num){
// //     return num + 2
// // }
// // console.log(addTwo(5))


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

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

(function () {
    var myVar = "I'm a local variable inside an IIFE!";
})();

console.log(myVar); 