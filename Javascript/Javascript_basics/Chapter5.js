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


function myFunction(){
    console.log("welcome to uoe ")
}

myFunction(); // function call

// function code mein redundancy se bachati hain 
// function ko call karke use kar sakte hain

// function with parameters
function paramerter(msg){ // parameter
    console.log(msg)
}

paramerter("hello world") // argument 


// function with sum two numbers

function sum(a,b){
    console.log(a+b)

}

sum(2,3)


// return a value from a function
function s(a,b){
    return a+b
}

//scope of a function 
// local scope and global scope
  // funciton parm -> local sop0e of a function _> block scope 

  //arrow function 


  // modern javascript
  const su = (a,b) => a+b
    console.log(su(2,3))

    const arrowMul = (a,b)=> a*b
    console.log(arrowMul(2,3))

    //




