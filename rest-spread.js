/*
given:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

refactor using rest and an arrow function
*/

function filterOutOdds(...nums) {
    return nums.filter(num => num%2===0);
}



/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.
*/

const findMin = (...nums) =>
    nums.reduce((min,next) => next<min?next:min);

/*
mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array 
and a variable number of arguments. 
The function should return a new array with the original array values 
and all of additional arguments doubled.
*/

function doubleAndReturnArgs (arr,...addlArgs) {
    return [...arr,...addlArgs].map(x => x*2);
}


/* 
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0,randomIndex),...items.slice(randomIndex+1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1,...array2];
}

//refactored
const extend_arrow = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj,[key]:val};
}

//refactored
const addKeyVal_arrow = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1,...obj2};
}

//refactor
const combine_arrow = (obj1, obj2) => ({...obj1,...obj2});


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj,...{[key]:val}};
}

//refactor
const update_arrow = (obj, key, val) => ({...obj,...{[key]:val}});