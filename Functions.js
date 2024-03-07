function AddTwoNumbers (a, b){
    // console.log(a+b);
}

AddTwoNumbers(4,66)




function loginUserMessage(username = "sam"){
    if(!username){
        consol
        e.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "",
    hitesh:"",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

const users =  {
    username: "Jyotir",
    uniqueId: 123,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`)
        console.log(this)

    }
}
// users.welcomeMessage();
// users.username = "Faiza"
// users.welcomeMessage();

console.log(users)
function tea(){
    // console.log(this)
}
tea();