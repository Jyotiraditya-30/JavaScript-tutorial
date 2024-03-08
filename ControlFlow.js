if(true){
    // console.log("Hello")
}

const id = 10
const email = "abc@gmail.com"

if(id != 0){ 
    // console.log("wlcome")
}else{
    // console.log("Access denied")
}
 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
}

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
    
// }

// const month = "march"
const month = "December"


switch (month) {
    case "jan":
        // console.log("January");
        break;
    case "feb":
        // console.log("feb");
        break;
    case "march":
        // console.log("march");
        break;
    case "april":
        // console.log("april");
        break;

    default:
        // console.log("default case match");
        break;
}


// Falsy values =>>  0, BigInt, 0nn, "", null, undefined, NaN
// Truthy values =>> "0", "fales". " ", [], {}, function()}{}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")