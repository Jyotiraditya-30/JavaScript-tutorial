const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'batman', 'flash']

// marvel_heros.push(dc_heros)
// console.log(...marvel_heros, ...dc_heros) // spread operator
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const another_array = [1,2,3,4,5,[6,7,8,[44,55]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let scroe2 = 200
let score3 = 300

console.log(Array.of(score1,scroe2, score3))