function A(){
  // console.log("AB");
  function B(){
      // console.log("CD");

  }
  B();
}

function C(){
  // console.log("EF");
}

// A() || B();
C() || A();

// ++++++++++++++++++++++++++++++++++++++++++++++++ //


var a = 1;
var b = 3;

function add(){
  return a+b;
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

var numbers = [12, 10, 15, 11, 14, 13, 16,1];
bubbleSort(numbers);
// console.log(numbers);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


let data = 30.920000000000005;
let ans = data.toFixed(2)

let result = Math.round(data * 100)/100

console.log(ans)
console.log(result)
