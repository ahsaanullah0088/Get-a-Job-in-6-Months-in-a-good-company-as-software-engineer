// loops 

// loops are used to repeat the same code multiple times 

// for loop
// for loop is used to repeat the same code multiple times
// for loop has 3 parts
// 1. initialization
// 2. condition
// 3. increment/decrement
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }
 

// code 
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }



// calculate the sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


// infinite loop 
 

// while loop 
// while loop is used to repeat the same code multiple times
// while loop has only one part
// 1. condition
// while (condition) {
//     // code to be executed
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// do while loop
// do while loop is used to repeat the same code multiple times
// do while loop has only one part
// 1. condition
// do {
//     // code to be executed
// } while (condition);


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// for of loop 
// for of loop is used to loop through the elements of an array
// for (variable of array) {
//     // code to be executed
// }


 // for of loop is used to loop through every character of the loops 

//  let str = "hello";
//     for (let char of str) {
//         console.log(char);
//     }


// for in loop
// for in loop is used to loop through the properties of an object
// for (variable in object) {
//     // code to be executed
// }
// it is used for objectss 

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
 
// for ( let key in person){
//     console.log(key, person[key]);
// }


 

// practice questions about for loop 

// write a program to print all even number form 1 to 100



// for (let i = 1; i<=100; i++){
//     if(i %2 ==0){
//         console.log(i);
//     }
// }


// practice question 2 
// write a program to print all odd number from 1 to 100

// for (let i = 1; i<=100; i++){
//     if(i %2 !=0){
//         console.log(i);
//     }


// wirte a program whcih guess write number from the use r
// let number = Math.floor(Math.random() * 100) + 1;
// let guess;
// do {
//     guess = parseInt(prompt("Guess a number between 1 and 100"));
//     if (guess < number) {
//         alert("Too low");
//     } else if (guess > number) {

//         alert("Too high");
//     }
// } while (guess !== number);
// alert("Congratulations! You guessed the right number");




// strings in js 

// strings are used to store text
// strings are written with quotes
// let name = "John";
// let message = 'Hello';
// let text = `Hello ${name}`;
// console.log(text);


// str = "hello";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str.indexOf('e'));
// console.log(str.lastIndexOf('l'));
// console.log(str.startsWith('he'));
// console.log(str.endsWith('lo'));
// console.log(str.includes('l'));
// console.log(str.substring(1, 4));
// console.log(str.slice(1, 4));
// console.log(str.split(''));
// console.log(str.replace('l', 'a'));
// console.log(str.trim());
// console.log(str.padStart(8, 'a'));
// console.log(str.padEnd(8, 'a'));
  

   // template literals 
// template literals are used to embed expressions in strings
let name = "John";

let specialstring = `Hello ${name}`;
console.log(specialstring);



// objects in js 
// objects are used to store multiple values in a single variable
// objects are written with curly braces
// objects have properties and methods
// properties are values associated with an object
// methods are functions associated with an object
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function() {
//         console.log("Hello");
//     }
// };


// place holders in template literals
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//} 
// let specialstring = `Hello ${person.name}`;


 // escape characters 
// escape characters are used to include special characters in strings
// let text = "We are the so-called \"Vikings\" from the north.";

// /n new line
// /t tab
// /b backspace
// /r carriage return
// /f form feed
// /' single quote
// /" double quote
// // backslash
// let text = "Hello\nWorld";
// console.log(text);



 // strings methods in js

// let str = "hello";
 // str.toUpperCase(); is used to convert the string into upper case
 // str.toLowerCase(); is used to convert the string into lower case
    // str.charAt(0); is used to get the character at a specific index
    // str.indexOf('e'); is used to get the index of a character
    // str.lastIndexOf('l'); is used to get the last index of a character   
    // str.startsWith('he'); is used to check if a string starts with a specific character
    // str.endsWith('lo'); is used to check if a string ends with a specific character
    // str.includes('l'); is used to check if a string includes a specific character
    // str.substring(1, 4); is used to get a part of a string
    // str.slice(1, 4); is used to get a part of a string
    // str.split(''); is used to split a string into an array
    // str.replace('l', 'a'); is used to replace a character in a string
    // str.trim(); is used to remove whitespace from the beginning and end of a string
    // str.padStart(8, 'a'); is used to add characters to the beginning of a string
    // str.padEnd(8, 'a'); is used to add characters to the end of a string



    // in javascript the strings are immutable
     // that means we cannot change the string once it is created
     // but we can create a new string based on the old string

     