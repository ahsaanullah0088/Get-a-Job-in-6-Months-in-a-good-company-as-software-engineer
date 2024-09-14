// what is javascript 
//  javascript is a high-level, interpreted programming language that conforms to the ECMAScript specification.
// JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
// javascript is used for web development, web applications, server-side development, mobile app development, game development, and more.

// every body knows that javascript is a high-level, interpreted programming language that conforms to the ECMAScript specification.
// java script is the language which will convert the static web pages into dynamic web pages.


// datatypes  in javascript 

// premittive data types 
// Number 
let age = 20;

// string 
let name = "sai";
// boolean
let isTrue = true;
// null
let nullValue = null;
// undefined
let undefinedValue = undefined;
// symbol
let symbolValue = Symbol('symbol');
// bigint
let bigintValue = 100n;



/// non premittive data types

// object
let obj = {name: 'sai', age: 20};
// array
let arr = [1, 2, 3, 4];
// function
let func = function() {
    console.log('function');
}
// date
let date = new Date();
// regex

let regex = /sai/;
// map
let map = new Map();


///  Difference betwen premittive datatype and non primitive data type 

// premittive data types are immutable and non premittive data types are mutable.
// premittive data types are stored in stack memory and non premittive data types are stored in heap memory.
// premittive data types are passed by value and non premittive data types are passed by reference.
// premittive data types are copied by value and non premittive data types are copied by reference.
// premittive data types are compared by value and non premittive data types are compared by reference.

// premitive data types can hold only one value at a time and non premitive data types can hold multiple values at a time.

  // what are arrys functions and objects in javascript 
    // example
   

    let animail = ['dog', 'cat', 'lion', 'tiger'];

    console.log(animail.indexOf('dog')); // 0
    console.log(animail.indexOf('cat')); // 1
     
    //  objects in javascript
    // objects are the collection of key value pairs.
    // example
    let obj = {name: 'sai', age: 20};

    // functions in javascript
    // functions are the block of code which will perform a specific task.or return a value 

    // example
    function add(a, b) {
        return a + b;
    }
    console.log(add(3,4)) ; //7 

     // what is scope in javascript 
    // scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.

    ///local scope and golbal scope 
    // local scope is the scope which is defined inside the function and global scope is the scope which is defined outside the function.


    // difference between var let and const in javascript


    // var
    // var is function scoped.
    // var can be redeclared and updated.
    // var is hoisted.
    // let
    // let is block scoped.
    // let can be updated but not redeclared.
    // let is not hoisted.
    // const
    // const is block scoped.
    // const cannot be updated or redeclared.
    // const is not hoisted.

// what is loop and typpes of loops in javascritp 

// loops are used to execute the block of code multiple times.
// types of loops in javascript

// for loop
// example  
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
// example
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}


// do while loop
// example
let i = 0;
do {
    console.log(i);
    i++;
}
while(i < 5);
 

// for in loop 
// for in loop is used to iterate over the properties of an object.
// example
let obj = {name: 'sai', age: 20};
for(let key in obj) {
    console.log(key, obj[key]);
}

// for of loop
// for of loop is used to iterate over the values of an iterable object.

// example
let arr = [1, 2, 3, 4];
for(let value of arr) {
    console.log(value);
}






// difference between for in and for of loop in javascript

// for in loop is used to iterate over the properties of an object.
// for of loop is used to iterate over the values of an iterable object.

// for of loop is allow to access each value directly and for in loop is allow to access each key directly.


//   what is for each method 

// forEach() method is used to execute a provided function once for each array element.
// for each loop accept function as parameter and that function will be executed for each element in the array.

// example
let arr = [1, 2, 3, 4];
arr.forEach(function(value) {
    console.log(value);
});
 

// difference between for each and for in loop and for of loop 

// for of loop 
for (let item of array ){
    console.log(item);
}

// for each loop 
array.forEach(function(item){
    console.log(item);
})

// for in loop 
for (let key in array ){
    console.log(array[key]);
}


// for each loop 
Object.values(array).forEach(function(item){
    console.log(item);
})

// double equal to and triple equal to in javascript

// double equal to is used to compare the values of two variables.


// example
console.log(1 == '1'); // true
console.log(1 == 1); // true
console.log('sai' == 'sai'); // true
 

// triple equal to is used to compare the values and types of two variables.

// example
console.log(1 === '1'); // false
console.log(1 === 1); // true
console.log('sai' === 'sai'); // true


// what are teh types of function in javascript ? what are the named and anonymous function ? 

// 7 types of cuntion in javascript 
// named function
// anonymous function
// function expression
// arrow function
// iffi function
// callback function
// higher order function

// named function 
// named function is a function which has a name.

// example
function add(a, b) {
    return a + b;
}
// here add is a named function.

// anonymous function

// anonymous function is a function which does not have a name.

// example

let add = function(a, b) {
    return a + b;
}
// here add is an anonymous function.

// function expression

// function expression is a function which is assigned to a variable.

// example

let add = function(a, b) {
    return a + b;
}
// here add is a function expression.

// arrow function

// arrow function is a function which is defined using the arrow (=>) syntax.

// example

let add = (a, b) => {
    return a + b;
}
// here add is an arrow function.

// iffi function

// iffi function is a function which is immediately invoked after it is defined.

// example

(function() {
    console.log('iffi function');
}
)();
// here the function is immediately invoked after it is defined.


// callback function

// callback function is a function which is passed as an argument to another function.

// example

function add(a, b, callback) {
    return callback(a, b);
}
function sum(a, b) {
    return a + b;
}
console.log(add(3, 4, sum)); // 7


// higher order function

// higher order function is a function which takes another function as an argument or returns a function.


// example

function add(a, b) {
    return a + b;
}
function higherOrderFunction(callback) {
    return callback;
}
let sum = higherOrderFunction(add);
console.log(sum(3, 4)); // 7





// what is function expresssion in javascript? 

// function expression is a function which is assigned to a variable.

// FUNCTION expression is a way of defining a function in javascript.

// we mostlyy used anaonymous function in function expression.
// we can also use named function in function expression.
// example

let add = function(a, b) {
    return a + b;
}

// here add is a function expression.




// what are arrow function in javascript ? 

// arrow function is a function which is defined using the arrow (=>) syntax.

// arrow function is a new way of defining functions in javascript.

// arrow function is more concise and shorter than the traditional function syntax.
// also knowns as fat arrow function.

// example

let add = (a, b) => {
    return a + b;
}

// here add is an arrow function.



// what are callback function ? 

// callback function is a function which is passed as an argument to another function.

// callback function is used to perform some action after the completion of another function.

// example

function add(a, b, callback) {
    return callback(a, b);
}
function sum(a, b) {
    return a + b;
}
console.log(add(3, 4, sum)); // 7

// here sum is a callback function which is passed as an argument to the add function.


// advantage of callback function

// callback function is used to perform some action after the completion of another function.
// callback function is used to handle asynchronous operations in javascript.
// callback function is used to perform some action after the completion of an ajax request.
// call back funciton is help full in more than one function  make the code more structured and readable.


// when to use callback function in real application ? 

// callback function is used to handle asynchronous operations in javascript.

// iteration , event handling , ajax requests , promises , settimeout , setinterval , file reading , database operations ,  asynchronous operation  higher orderfunctions , promises etc..


// iteration ; for each method 

const numerbers = [1, 2, 3, 4, 5];

function logNumbers(number) {
    console.log(number);
}
numbers.forEach(logNumbers);







// what is the use of event handling in javascript ? 

// event handling is used to handle the events in javascript.

// event handling is used to perform some action when an event occurs.
// evvent handling is the process of responding to user actions in web pages
// teh addeventlistener method of javascrpt allows to attach an event name and with the function that you wnat to call when the event occurs.
// 
// such as 
// onclick , onmouseover , onmouseout , onkeydown , onkeyup , onload , onsubmit , onchange , onfocus , onblur etc..

// example 
// <button onclick="alert('hello')">click me</button>
// document.getElementById('button').onclick = function() {
//     alert('hello');
// }



// what are higher order functions in javascript ? 

// higher order function is a function which takes another function as an argument or returns a function.

// higher order function is used to perform some action after the completion of another function.



// example

function add(a, b) {
    return a + b;
}
function higherOrderFunction(callback) {
    return callback;
}
let sum = higherOrderFunction(add);
console.log(sum(3, 4)); // 7






