// // +++++++++++++++++++++++++++++++++++++++++++++++ TRY & CATCH ++++++++++++++++++++++++++++++++++++++++++++++++ //

// // Function to divide two numbers
// function divide(a, b) {
//     // Attempt division
//     try {
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed.');
//         }
//         return a / b;
//     } catch (error) {
//         // Handle division by zero error
//         console.error('Error:', error.message);
//         // Return a default value (e.g., Infinity) or re-throw the error
//         throw error; // re-throwing the error to let the caller handle it
//     }
// }

// // Example usage of the divide function
// try {
//     const result = divide(10, 10);
//     console.log('Result:', result); // This line won't be executed
// } catch (error) {
//     // Handle the error caught from divide function
//     console.error('Caught error from divide function:', error.message);
// }

// // Code execution continues after the catch block
// console.log('Continuing execution...');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// try {
//     throw "Oops; this is not an Error object";
// } catch (e) {
//     if (!(e instanceof Error)) {
//         e = new Error(e);
//     }
//     console.error(e.message);
// }

// +++++++++++++++++++++++++++++       The finally block     +++++++++++++++++++++++++++++++++++++++++ //

// try {
//     try {
//         throw new Error("oops");
//     } finally {
//         console.log("finally");
//     }
// } catch (ex) {
//     console.error("outer", ex.message);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// try {
//     try {
//         throw new Error("oops");
//     } catch (ex) {
//         console.error("inner", ex.message);
//         throw ex;
//     } finally {
//         console.log("finally");
//     }
// } catch (ex) {
//     console.error("outer", ex.message);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

let n = 0;
let x = 0;

while (n < 3) {
    n++;
    x += n;
}

console.log(x)

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = ' '.repeat(rows - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(str + stars + str);
    }
}

printPyramid(5);

let text = "Hello world!";
let result = text.repeat(2);
console.log(result)