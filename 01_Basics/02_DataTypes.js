"use strict"; // treat all JS code as newer version

// alert("hello"); // we are using nodejs not browser

let name = "Jyotir" // string
let age = 23 // number
let isSubscribed = false // boolean

// ++++++++ Data Types +++++++++++++ //

// Primitive Data type

/*
number => 2^53
bigint
string = ""
boolean => true/false
null => standalone value
undefined => value isnt assigned to variable
symbol => unique
*/
console.log(typeof null)
console.log(typeof undefined)
// Non Primitive Data type

/*
object => {}
*/

// ++++++++++++++++++++++++++++++++++++++ Type Conversion ++++++++++++++++++++++++++++++++ //

/*
let score = "33aaa"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber)
*/

/*
"33" => 33
"33abc" => Nan
null => 0
true/false => 1/0
*/

 /*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

1 => true; 0 => false
"" => false
"hitesh" ==> true
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Interview questions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// 🔹 Data Types – Interview Q&A

/*
Q1. What are the primitive data types in JavaScript?
Ans: Number, String, Boolean, null, undefined, Symbol, BigInt.
*/

/*
Q2. What is the difference between primitive and reference types?
Ans: Primitive stored by value; Reference stored by memory address.
*/

/*
Q3. What is the output of typeof null?
Ans: "object" – a legacy bug in JavaScript.
*/

console.log(typeof null); // object

/*
Q4. What is the output of typeof NaN?
Ans: "number" – even though it means Not-a-Number.
*/

console.log(typeof NaN); // number

/*
Q5. What’s the difference between undefined and null?
Ans: undefined → not assigned. null → intentionally empty value.
*/

/*
Q6. Is NaN equal to NaN?
Ans: No, NaN !== NaN. Use Number.isNaN(NaN) to check.
*/

console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

/*
Q7. What’s the result of typeof function(){}?
Ans: "function" – functions have their own typeof category.
*/

console.log(typeof function() {}); // function

/*
Q8. What is BigInt and when should we use it?
Ans: For numbers > 2^53−1. Use `123456789012345678901234567890n`.
*/

let big = 12345678901234567890n;

/*
Q9. How is Symbol used and why is it unique?
Ans: Symbol() creates unique identifiers, often used as object keys.
*/

const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

/*
Q10. What’s the default value of an uninitialized variable?
Ans: `undefined`.
*/

let x;
console.log(x); // undefined

// 🔹 Advanced Concepts

/*
Q11. How are primitive types stored in memory?
Ans: Stored directly in the stack.
*/

/*
Q12. How are objects and arrays stored in memory?
Ans: Stored in the heap; variables hold reference in the stack.
*/

/*
Q13. What is type coercion in JavaScript?
Ans: JS automatically converts data types in expressions.
*/

console.log('5' + 2); // '52' (string concatenation)
console.log('5' - 2); // 3   (string converted to number)

/*
Q14. What is the result of '5' + 3 and why?
Ans: "53" → number converted to string (concatenation).
*/

/*
Q15. What is the result of '5' - 3 and why?
Ans: 2 → string "5" converted to number.
*/

/*
Q16. How do you accurately check for null?
Ans: Use `value === null` (not typeof).
*/

/*
Q17. What is the difference between == and ===?
Ans: == allows type coercion. === checks type + value.
*/

console.log('5' == 5);  // true
console.log('5' === 5); // false

/*
Q18. Why is typeof null "object"?
Ans: Legacy bug in JS engine from 1995 – can't fix due to backward compatibility.
*/

/*
Q19. What is implicit vs explicit type conversion?
Ans: Implicit is automatic by JS. Explicit is manual via functions like Number(), String().
*/

let a = '10' * 2; // implicit → 20
let b = Number('10'); // explicit → 10

/*
Q20. How to check if a variable is an array?
Ans: Use Array.isArray(arr)
*/

console.log(Array.isArray([])); // true
