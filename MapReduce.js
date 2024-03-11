const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums)

// const newNums = myNums.reduce((acc, curv)=>{
//     console.log(`acc: ${acc} and curv: ${curv}`)
//     return acc + curv
// }, 0)

// console.log(newNums)


const shoppingCart =[
    {
        itemName: 'Java course',
        price: 999,
    },
    {
        itemName: 'Python course',
        price: 1999,
    },
    {
        itemName: 'Golang course',
        price: 1499,
    },
    {
        itemName: 'JavaScript course',
        price: 899,
    },
    {
        itemName: 'Swift course',
        price: 2999,
    }
]

const PriceAll = shoppingCart.reduce((acc, item)=>{
  return acc + item.price
},0)

// console.log(PriceAll)

const article = shoppingCart.filter((item)=> item.itemName == "Java course" )

console.log(article)

const a = shoppingCart.map((item)=>  item)

console.log(a)