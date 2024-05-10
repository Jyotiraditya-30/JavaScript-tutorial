function A() {
  // console.log("AB");
  function B() {
    // console.log("CD");

  }
  B();
}

function C() {
  // console.log("EF");
}

// A() || B();
C() || A();

// ++++++++++++++++++++++++++++++++++++++++++++++++ //


var a = 1;
var b = 3;

function add() {
  return a + b;
}


sum = add();
// console.log(sum);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

function reverseString(str) {
  return str.split('').reverse().join('');
}

// console.log(reverseString("hello"))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16, 1];
bubbleSort(numbers);
// console.log(numbers);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


let data = 30.986878;
let ans = data.toFixed(2)

let result = Math.round(data * 100) / 100

// console.log(ans)
// console.log(result)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap arr[j] and arr[j+1]
//         console.log(j)
//         console.log(i)
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const value = [1, 3, -10, 4, 5, 11, 23];
// const sortedNumbers = bubbleSort(value);

// console.log(sortedNumbers); // Output: [-10, 1, 3, 4, 5, 11, 23]

function Sort(arr) {
  const Jyotir = arr.length;
  for (let i = 0; i < Jyotir - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap arr[j] and arr[j+1]
      console.log(i)
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}
const value = [1, 3, -10, 4, 5, 11, 23];
const sortedNumbers = Sort(value);
console.log(sortedNumbers);