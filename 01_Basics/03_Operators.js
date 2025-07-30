let value = 3
let negValue = -value
// console.log(negValue)s

// +++++++++++++++++++++++ all operator ++++++++++++++++++++++++++++ //

// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/2)
// console.log(3**3)
// console.log(3%2)

// +++++++++++++++++++++++++++ string ++++++++++++++++++++++++++++++++ //

let str1 = "hello"
let str2 = " Jyotir"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log( 1 + "2" )
// console.log("1" + "1")
// console.log(1 + 2 + "3")
// console.log("1" + 2 + 3)

// console.log(3+4*5%3)

// ++++++++++++ tricky conversion ++++++++++++++++++++++++ //

// console.log(+true)
// console.log(+"")
// console.log(+false)

// let num1, num2, num3

// num1 = num2 = num3 = 2+2

let count = 1
count++
console.log(count)

// ++++++++++++++++++++++++++++++++ Interview Questions ++++++++++++++++++++++++++++++++++++++++++++++++ //

// 🔹 Arithmetic & Assignment

/*
Q1. What is the difference between ++x and x++?
Ans: ++x increments before use; x++ increments after use.
*/

/*
Q2. What does x %= 3 do?
Ans: Updates x to the remainder of x divided by 3.
*/

/*
Q3. What is the result of 2 ** 3?
Ans: 8 → Exponentiation (2 to the power 3).
*/

/*
Q4. What is the output of: let x = 5; console.log(x++);?
Ans: 5 → prints first, then increments.
*/

// 🔹 Comparison & Logical

/*
Q5. Difference between == and ===?
Ans: == checks value with coercion, === checks value + type.
*/

/*
Q6. What is the output of: '5' == 5 and '5' === 5?
Ans: true, false → value matches but type doesn't.
*/

/*
Q7. When will !(false || true) be true?
Ans: Never → false || true = true → !true = false.
*/

/*
Q8. What does a && b return?
Ans: Returns `b` if `a` is truthy; otherwise returns `a`.
*/

/*
Q9. What is the result of true && "Hello"?
Ans: "Hello" → because true is truthy, so returns second operand.
*/

/*
Q10. What is the result of null || 'Guest'?
Ans: "Guest" → returns first truthy value.

// 🔹 Ternary Operator

/*
Q11. What is a ternary operator?
Ans: Short form of if...else → condition ? value1 : value2
*/

/*
Q12. What will (age >= 18 ? "Adult" : "Minor") return for age = 16?
Ans: "Minor"
*/

// 🔹 Bitwise Operators

/*
Q13. What is 5 & 1?
Ans: 1 → AND operation on binary bits (101 & 001 = 001)
*/

/*
Q14. What is 5 | 1?
Ans: 5 → OR operation (101 | 001 = 101)
*/

/*
Q15. What is ~5?
Ans: -6 → bitwise NOT flips bits and adds -1
*/

// 🔹 Advanced: Nullish & Optional Chaining

/*
Q16. What does ?? operator do?
Ans: Returns right-hand value only if left is null or undefined.
*/

/*
Q17. What’s the difference between || and ???
Ans: || checks for any falsy value. ?? only checks for null/undefined.
*/

/*
Q18. What does ?. (optional chaining) do?
Ans: Safely accesses nested properties, avoids crash if property is undefined.
*/

/*
Q19. What is the result of:
let user = null;
console.log(user?.name);
Ans: undefined → doesn't throw error.
*/

/*
Q20. Which operator avoids 'Cannot read property of undefined' errors?
Ans: Optional chaining `?.`
*/
