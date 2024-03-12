// const myArr = [2,3,4,5,6]
// myArr.push(9)
// console.log(myArr)

// const myArr = [1,2,3,4,5,6]
// console.log(typeof myArr)

// const myArr2 = myArr.slice(1,4)
// console.log(myArr2)
// console.log("A", myArr)

// const myArr3 = myArr.splice(1,4)
// console.log(myArr3)
// console.log("B", myArr)

// const vehicle = []
// vehicle.push("car", "truck", "bike")
// console.log(vehicle)

// vehicle[5] = "Scooty"
// console.log(vehicle)
// console.log(vehicle.length)

// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// const A = [1,2,3,4,5]
// const B = [6,7,8,9,10] 
// const C = A.concat(B)
// A.push(B)
// console.log(A)
// console.log(C)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums) => {
    
//     return nums > 4;
// })

// console.log(newNums);

const newNums = []

myNums.forEach((nums)=>{
   if (nums >4){
      newNums.push(nums)
   }
})
console.log(newNums);
