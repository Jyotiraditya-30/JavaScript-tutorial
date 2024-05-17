// +++++++++++++++++++++++++++++ Hoisting +++++++++++++++++++++++++++++++++++++ //
/*
1.In JavaScript, a variable can be declared after it has been used.
  In other words; a variable can be used before it has been declared. 

2.JavScipt only hoists declarations, not initializations. the variables
  will be undefined unitill the line where its initialized is reached.

*/

// let y;
// console.log(y)
// y = 10;

// x = 10
// console.log(x)
// var x;

// AddTwoNumbers(2, 3);
// function AddTwoNumbers(a, b) {
//   var num = a + b;
//   console.log(num)
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000
  )
  console.log(i)
}