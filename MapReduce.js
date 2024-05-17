// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ FILTERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// const Values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newValues = Values.filter((element) => element > 4)
// console.log(newValues)

// let newValuess = Values.filter((element) => {
//     return element > 4;

// })
// console.log(newValuess)
// let nValues
// Values.forEach((y) => {
//     if (y > 4) {
//         nValues.push(y)
//     }
// })
// console.log(nValues)

// arr = new Array(1, 2, 3, 6, 5, 4);
// var new_arr = arr.filter(function (x) {
//     return x;
// });
// console.log(new_arr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBook = books.map((bk) => {
//     return (bk.genre == 'History' || bk.publish == 1992)
// })
let userBook = books.filter((bk) => {
    return (bk.title)
})
console.log(userBook)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const Numnbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = Numnbers.map((nums) => nums + 10)
console.log(newNumbers)

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

const officersIds = officers.map((officer) => officer.id);
console.log(officersIds)