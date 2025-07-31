let newDate = new Date();
console.log("Time", newDate);
console.log(newDate.getDate())
console.log(newDate.getTime()/1000)
console.log(newDate.getFullYear())
console.log(newDate.getHours())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timezone: ''
}))

