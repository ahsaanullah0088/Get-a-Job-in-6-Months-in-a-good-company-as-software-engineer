// Funcations  in js 
 // block of code that performs a specific tasks, can be invoked wehnever needed 


// invoked means call karna 

// such as .toUpperCase() is a function that converts a string to uppercase

 
// two parts of functions 
//1. function defination 
//2. function call

//function defination : 
// function functionName({
//     // code block})


// function myFunction(){
//     console.log("welcome to uoe ")
// }

// myFunction(); // function call

// // function code mein redundancy se bachati hain 
// // function ko call karke use kar sakte hain

// // function with parameters
// function paramerter(msg){ // parameter
//     console.log(msg)
// }

// paramerter("hello world") // argument 


// // function with sum two numbers

// function sum(a,b){
//     console.log(a+b)

// }

// sum(2,3)


// // return a value from a function
// function s(a,b){
//     return a+b
// }

// //scope of a function 
// // local scope and global scope
//   // funciton parm -> local sop0e of a function _> block scope 

//   //arrow function 


//   // modern javascript
//   const su = (a,b) => a+b
//     console.log(su(2,3))

//     const arrowMul = (a,b)=> a*b
//     console.log(arrowMul(2,3))

//     //practice question 

//     // create a function using funciton keyword that takes a string as an argument & returns a numeber of owels in string 

//     function countVowels(str){
//         let count =0;
//         const vowels = ['a','e','i','o','u']
//         for(let char of str.toLowerCase()){
//             if(vowels.includes(char)){
//                 count++
//             }
//         }
//     }

//     console.log(countVowels("hello world"))



//     // create a arrow function to perform a smae task 

//     const countVowelsArrow = (str) =>{
//         let count =0;
//         const vowels = ['a','e','i','o','u']
//         for(let char of str.toLowerCase()){
//             if(vowels.includes(char)){
//                 count++
//             }
//         }
//     }

//     console.log(countVowelsArrow("hello world"))


//     const countVow = (str)=>{
//         let count =0;
//         for(const char of str){
//             if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//                 count++
//             }
//         }
//     }

//     console.log(countVow("hello world"))


// for each loop 

//used for arrays 


// function myFunc(num){
//     return num;
// }

// A callback is a funciton that is passed as an argument to another function


// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function printVal(val){
//     // value at each 
//     console.log(val)
// }

// )


// arrow function 

// let arr1 = ["a,b,c,d,e,f,g,h,i,j"]
// arr.forEach((val) =>{
//     console.log(val.toUpperCase() , idx , arr1)
// })


/// Higher order functions // methods

// functions that take another function as an argument or return a function as a result



// practice question 

// for a given array of number print the squrare of each value using for each 

let arr2 =[1,2,3,4,5,6,7,8,9,10]
arr2.forEach((val)=>{
    console.log(val*val)
})



// some more array methods

// map() method
// create a new array with the results of calling a provided function on every element in the calling array

// new array return karta hai 

// create a new array with the result of some operation. The value its callback returns are used to form a new array 

// arr.map(calbackFnx(value in ex , array))



let arr3 = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr3.map((val)=>{
    return val*val
})



// filter method
// creates a new array with all elements that pass the test implemented by the provided function


let arr4 = [1,2,3,4,5,6,7,8,9,10]
let newArr1 = arr4.filter((val)=>{
    return val>5
})


// reduce ethod

// executes a reducer function on each element of the array, resulting in a single output value

// arr.reduce(callbackFnx(accumulator, currentValue, index, array), initialValue)


// practice questions 

// we are given array of marks of student . filterout f the markds of students that scored more than 90 marks

let marks = [50,60,70,80,90,100,95,85,75,65,55]
let topMarks = marks.filter((val)=>{
    return val>90
})


// take a number from user as an input . create an array f number from 1 to n 

let n =10;
let arr5 = []
for(let i=1;i<=n;i++){
    arr5.push(i)
}

// by shahrada khapra 

let m = 10;
let arr6= [];

for(let i)
