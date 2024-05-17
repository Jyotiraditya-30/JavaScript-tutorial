// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY DESTRUCTURING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ++++++++++++++++++++++++++++++ Basic Array Destructuring ++++++++++++++++++++++++++++++++++++++++ //

const array = [1, 2, 3, 4, 5];
const [first, second, third] = array;
// console.log(first);
// console.log(second);
// console.log(third);

// +++++++++++++++++++++++++++++++++++ Skipping Items ++++++++++++++++++++++++++++++++++++++++++++++ //

const array2 = [1, 2, 3, 4, 5];
const [first1, , second1] = array2;
// console.log(first1);  // Output: 1
// console.log(second1);  // Output: 3

// +++++++++++++++++++++++++++++++ Using Rest Parameter ++++++++++++++++++++++++++++++++++++++++++++ //

const array3 = [1, 2, 3, 4, 5];
const [first2, second2, ...rest] = array3;
// console.log(first2);  // Output: 1
// console.log(second2); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ OBJECT DESTRUCTURING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// +++++++++++++++++++++++++++++++ Basic Object Destructuring: ++++++++++++++++++++++++++++++++++++++++++++ //

const person = {
    name: 'John Doe',
    age: 30,
    profession: 'Developer'
};
const { name, age, profession } = person;
// console.log(name);       // Output: John Doe
// console.log(age);        // Output: 30
// console.log(profession);

// ++++++++++++++++++++++++++++++++++++ Renaming Variables: ++++++++++++++++++++++++++++++++++++++++++++++ //

const person1 = {
    name: 'John Doe',
    age: 30,
    profession: 'Developer'
};
const { name: fullName, age: yearsOld, profession: job } = person1;
// console.log(fullName);
// console.log(yearsOld);
// console.log(job);

// ++++++++++++++++++++++++++++++++++++ Default Values: ++++++++++++++++++++++++++++++++++++++++++++++ //

const person2 = {
    name: 'John Doe',
    age: 30
};
const { name2, age2, profession2 = 'Unknown' } = person2;
// console.log(profession2); // Output: Unknown

// ++++++++++++++++++++++++++++++++++++ Nested Object Destructuring: ++++++++++++++++++++++++++++++++++++++++++++++ //

const person3 = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};
const { name3, address: { street, city } } = person3;
// console.log(street); // Output: 123 Main St
// console.log(city);   // Output: Anytown

// ++++++++++++++++++++++++++++++++++++ Function Parameters Destructuring ++++++++++++++++++++++++++++++++++++++++++++++ //

// ++++++++++++++++++++++++++++++++++++ Object Destructuring in Function Parameters ++++++++++++++++++++++++++++++++++++++++++++++ //

function displayPerson({ name, age, profession }) {
    // console.log(`Name: ${name}`);
    // console.log(`Age: ${age}`);
    // console.log(`Profession: ${profession}`);
}

const person4 = {
    name: 'John Doe',
    age: 30,
    profession: 'Developer'
};

// displayPerson(person4);


// ++++++++++++++++++++++++++++++++++++ Array Destructuring in Function Parameters ++++++++++++++++++++++++++++++++++++++++++++++ //

function sum([a, b]) {
    return a + b;
}

const numbers = [3, 4];
// console.log(sum(numbers)); // Output: 7