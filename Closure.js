function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        // console.log(name); // use variable declared in the parent function
    }
    // name = "JyotirawdgAW";
    displayName();
}
init();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

var names = 'Jyotir'
function a() {
    names = "Jyotiraditya"
    console.log(names)
    function b() {
        names = "Aditya"
        console.log(names)
    }
    b();
}

a();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
