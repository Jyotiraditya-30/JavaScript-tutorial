// +++++++++++++++++++++++++++++++++ Stack Memory ++++++++++++++++++++++++++++//

/* Premetive datatypes value stoores in Stack Memory */

let name = "Jyotir"
let Full_Name = name;
// console.log(Full_Name);

Full_Name = 'Jyotiraditya Singh'

// console.log('Name: ', name)
// console.log('Full Name: ', Full_Name)

// +++++++++++++++++++++++++++++++++++++ Heap Memory +++++++++++++++++++++++++++++++++ //

let user = {
    name: "Jyotir",
    Roll_No: 21
}

let StudentUser = user;

console.log(StudentUser)

StudentUser.name = "Jyotiradirya Singh"

console.log(user)