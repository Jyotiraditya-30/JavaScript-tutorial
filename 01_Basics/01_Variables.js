//++++++++++++++ Variables Tutorial +++++++++++++++++++++++ //

/*

🔹 What is a Variable?
    A variable is a named container for storing data values in memory that can be used and changed later.

🔹 Types of Variable Declarations
    1. var – Old and mostly outdated
       * Function-scoped (NOT block-scoped)
       * Gets hoisted (declared at the top of scope)
       * Can be redeclared and updated

    2. let – Modern and preferred
       * Block-scoped (inside { })
       * Can be updated, but not redeclared in the same scope
       * Not hoisted like var

    3. const – Modern and strict
       * Block-scoped
       * Cannot be updated or redeclared
       * Must be initialized during declaration

*/

const Unique_ID = 1123456789;
let name = "Jyotiraditya Singh";
var email = "jyotir2k1@gmail.com";
city = "Delhi";
let bloodGroup;

/*
prefer not to use var because of issue in block scope and functional scopes
*/

// Unique_ID = 987654321
name = "Jyotir"
email = "jyotir@gmail.com"
city = 123

// console.log(Unique_ID)
// console.log(name)
// console.log(email)
// console.log(city)

console.table([Unique_ID, name, email, city, bloodGroup])

console.log(typeof (Unique_ID))
console.log(typeof (name))
console.log(typeof (email))
console.log(typeof (city))
console.log(typeof (bloodGroup))

//++++++++++++++ Hoisting & Temporal Dead Zone (TDZ) Tutorial +++++++++++++++++++++++ //

/* 
🔹 Hoisting & TDZ – Quick Notes (English)
   * Hoisting moves variable and function declarations to the top during execution phase.
   * var is hoisted and initialized with undefined before code runs.
   * let and const are hoisted but not initialized immediately.
   * Accessing let/const before declaration causes ReferenceError due to Temporal Dead Zone (TDZ).
   * TDZ is the block period before variable is initialized, not safe to access.
*/

// 🔷 1. Example of Hoisting with var

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

/*  how actually above code seems to be internally 

    var a;            // hoisted
    console.log(a);   // undefined (default value)
    a = 10;
    console.log(a);   // 10
*/

// 🔷 2. Example of TDZ with let

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

/* 🔍 Why?
let b is hoisted, but not initialized.

So from the start of the block until the let line, it’s in the TDZ.

🧠 TDZ starts at the block opening { and ends at let b = 20;. */

//  3. Example of TDZ with const

console.log(c); // ❌ ReferenceError
const c = 30;

// Same as let, but const must be initialized during declaration.

// So hoisted ➜ in TDZ ➜ accessing before assignment = error.



// ++++++++++++++++++++++++++++++++++++++++++ Interview Questions ++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// 🔹 Basic Variable Declarations

/*
Q1. Difference between var, let, and const?
Ans: var is function-scoped, can be redeclared. let/const are block-scoped. const can't be reassigned.
*/

/*
Q2. Scope of var vs let vs const?
Ans: var → function scope. let & const → block scope (inside {}, if, loops, etc).
*/

/*
Q3. Can you redeclare or reassign var, let, const?
Ans: var → redeclare & reassign. let → only reassign. const → neither redeclare nor reassign.
*/

// 🔹 Hoisting Concepts

/*
Q4. What is hoisting in JavaScript?
Ans: Variable and function declarations are moved to the top during memory phase.
*/

/*
Q5. What gets hoisted and how?
Ans: var hoisted with undefined. let/const hoisted but uninitialized (in TDZ). Functions fully hoisted.
*/

/*
Q6. Why var behaves differently than let/const in hoisting?
Ans: var is initialized to undefined. let/const stay uninitialized until actual declaration (TDZ).
*/

// 🔹 Temporal Dead Zone (TDZ)

/*
Q7. What is the Temporal Dead Zone (TDZ)?
Ans: Time between hoisting and declaration where let/const exist but can't be accessed.
*/

/*
Q8. Why let/const throw error if accessed before declaration?
Ans: Because they're in TDZ — memory reserved but not initialized yet.
*/

/*
Q9. How does TDZ prevent bugs?
Ans: Prevents access to uninitialized variables, forcing better coding practices.
*/

// 🔹 Real-world Scenarios

/*
Q10. What will be the output?
console.log(a);
var a = 5;
Ans: undefined (because var is hoisted with value undefined).
*/

/*
Q11. What will be the output?
console.log(b);
let b = 10;
Ans: ReferenceError (b is in TDZ until declared).
*/

/*
Q12. Why does this throw an error?
console.log(x);
const x = 15;
Ans: const is in TDZ and must be initialized during declaration.
*/

// 🔹 Const Behavior

/*
Q13. Can const variables be mutated?
Ans: Yes, if it's an object or array — only the reference is constant.
*/

/*
Q14. Can we declare an object or array with const and still change its properties?
Ans: Yes, object properties or array elements can be updated.
*/

// 🔹 Function Hoisting

/*
Q15. Difference between function declaration and expression in hoisting?
Ans: Declarations are fully hoisted. Expressions hoist only the variable, not the function body.
*/

/*
Q16. Why does this throw a TypeError and not ReferenceError?
console.log(foo);
var foo = function() {};
Ans: foo is hoisted as undefined. Calling undefined() gives TypeError.
*/

// 🔹 Bonus Conceptual

/*
Q17. Why should we prefer let/const over var?
Ans: They provide block scope and avoid common hoisting-related bugs.
*/

/*
Q18. How can hoisting lead to bugs in large codebases?
Ans: Accessing vars before assignment returns undefined, leading to hidden logic issues.
*/

/*
Q19. Is JavaScript interpreted or compiled when it comes to hoisting?
Ans: JavaScript is compiled first (memory phase), then interpreted — allowing hoisting.
*/

/*
Q20. How is memory allocated for variables before execution?
Ans: Declarations are scanned. var gets undefined, let/const stay in TDZ until initialized.
*/
