// ES5 Map Callback  

/*

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

*/

//ES2015 Arrow Functions Shorthand:

function double_arrow(arr) {
    return arr.map(val => val*2);
}

//or

const double_oneliner = arr => arr.map(val => val*2);



/*  refactor this function to use only arrow functions
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

function squareAndFindEvens(numbers) {
    return numbers.map(num => num**2).filter(sq => sq%2===0);
}

//or

const squareAndFindEvens_oneline = numbers => numbers.map(num => num**2).filter(sq => sq%2===0);