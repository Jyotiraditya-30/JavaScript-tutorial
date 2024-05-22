function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}

// console.log(getFee(true));

// console.log(getFee(false));

// console.log(getFee(null));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};

// console.log(greeting({ name: "Alice" }));
// console.log(greeting(null)); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

var obj = {
    x: true,
    y: {
        xy: 'some value'
    }
}

var result = obj ? obj.y ? obj.y.xy ? obj.y.xy : 'N/A' : 'N/A' : 'N/A'

console.log(result) 
