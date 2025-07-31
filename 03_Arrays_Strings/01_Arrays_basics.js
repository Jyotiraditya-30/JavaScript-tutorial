// declaration

const myArr = [0,1,2,3,4,5, true, 'Jyotir']
////console.log(myArr)

const newArr = myArr
////console.log("new Array: ", newArr)
newArr[1] = "Please;"
////console.log(myArr)

const myArr2 = new Array(1,2,3,4,5)

// +++++++++++++++++ Array Methods ++++++++++++++++++++ //

myArr.push(6) // add extra element at the last of array
//console.log(myArr)

myArr.pop() // remove lase element of the array
//console.log(myArr)

myArr.unshift(100) // add element in 0th index
myArr.shift() // remove first element of array
//console.log(myArr) 

//console.log(myArr.includes('Jyotir')) // tells wether the element is in array or not
//console.log(myArr.indexOf(2)) // tell the value of index of an array

const myArr3 = myArr.join()
//console.log(myArr3)

// ++++++++++++++++++++ Slice and Splice

console.log("A: ", myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("B: ", myArr)

const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("C: ", myArr)
