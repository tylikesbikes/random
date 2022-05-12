/*
ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
*/

//ES2015
const obj = { 
    numbers: {
        a:1,
        b:2
    }
};

const {numbers:{a,b}} = obj;

console.log(a);
console.log(b);


/*
ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

//ES2015

const arr = [1,2];

[arr[0],arr[1]] = [arr[1],arr[0]];


/*
raceResults()
Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array


Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)
*/

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

