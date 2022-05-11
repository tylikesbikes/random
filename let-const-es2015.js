// var PI = 3.14;
// PI = 42; // stop me from doing this!
const PI = 3.14;

PI = 'March 14';  // causes error

/*
What is the difference between var and let?
    var variables can be hoisted, but let is more strict about when you can use them.
    let is a block-scope variable;  var is function scoped at best
    you can't redeclare a let variable

What is the difference between var and const?
    const can't be re-assigned, but var can.  no hoisting with const

What is the difference between let and const?
    you can re-assign let variables, but not const variables.

What is hoisting?
    when a browser 'knows' about a variable that's been declared (with var, specifically) and lets you reference it w/o error
    before your code has officially declared it.  it functions as if variable declarations
    were moved to the top / beginning of a code file.
*/