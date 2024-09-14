function func(){
    function f(a,b){
        const sum = a+b;
        return sum;
    }
    return f;
}

var numsum = func();
console.log(numsum(2,3))

// example : 

// leetcode 2667 


// Answer : 
// function createHelloWorld(){
//     function f(){
//         return "Hello World";
//     }
//     return f;
// }

