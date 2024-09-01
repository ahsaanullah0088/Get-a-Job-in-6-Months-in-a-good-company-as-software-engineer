// arrays


//colletions of items 

/// create array 

// let heros= ['superman','batman','spiderman','ironman','captain america'];

// let markst = [10,20,30,40,50,60,70,80,90,100];

// let infor = ['john',25];


// linear way to store the data are arrays 

/// position , index matters in arrays 
// 

let marks = [10,20,30,40,50,60,70,80,90,100];
 console.log(marks)


 console.log(marks.length) // property of array to display the size of the array 



 // type of marks 

 console.log(typeof marks) //object 

 // array indices 

 /// array name [index],.....

 /// 
    console.log(marks[0]) //10
    console.log(marks[1]) //20
    console.log(marks[2]) //30
    console.log(marks[3]) //40
    console.log(marks[4]) //50

    marks[0] = 100; // update the value at index 0

    console.log(marks[0]) //100

    console.log(marks[100]) // undefined 

    // looping over an array ...
    // print all the items in the array using loop 


    let arr = [10,20,30,40,50,60,70,80,90,100];

    // for loop : 

    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }

    // index 0 se jae ga uski value print kare ga phir index 1 se jae ga uski value print kare ga phir index 2 se jae ga uski value print kare ga phir index 3 se jae ga uski value print kare ga phir index 4 se jae ga uski value print kare ga phir index 5 se jae ga uski value print kare ga phir index 6 se jae ga uski value print kare ga phir index 7 se jae ga uski value print kare ga phir index 8 se jae ga uski value print kare ga phir index 9 se jae ga uski value print kare ga

    // phir loop khatam ho jae ga

    // we can also use for of loop or for in loop 


    // for(let item of arr){
    //     console.log(item)
    // }

    // for of loop is used to iterate over the array

    // for in loop is used to iterate over the object

// practice question //

// for a given array with marks of students -> [ 85 , 97 , 44 , 37, 76 , 60 , ]  find the average marks of the entire class.. 

let mark = [85,97,44,37,76,60];
let n = mark.length;

let sum = 0;
for(let val of mark){
    sum += val; 
}
let avg = sum/n;
console.log(avg);



// practice question 2 

// for a given array with prices of 5 items -> [250 , 645 , 300, 900, 50] all items have an order of 10% OFF ON THEM . change teh arra to sore the final price after applying the offer 


let prices = [250,645,300,900,50];

// for(let i=0;i<prices.length;i++){
//     prices[i] = prices[i] - prices[i]*0.1;
// }

// console.log(prices)

/// second method 

for(let val of prices){
    let discount = val/10;
    val = val - discount;
    console.log(val)
}


// Array methods 

// push() -> add an item at the end of the array
// pop() -> remove an item from the end of the array
// shift() -> remove an item from the start of the array
// unshift() -> add an item at the start of the array
// splice() -> add or remove an item from the array at any position
// slice() -> create a new array from the existing array
// indexOf() -> find the index of an item in the array
// includes() -> check if an item exists in the array
// concat() -> merge two arrays
// reverse() -> reverse the array
// join() -> convert the array to a string
// sort() -> sort the array
// filter() -> filter the array based on a condition
// map() -> create a new array based on the existing array
// reduce() -> reduce the array to a single value
// forEach() -> iterate over the array
// find() -> find the first item based on a condition
// findIndex() -> find the index of the first item based on a condition
// some() -> check if any item satisfies a condition
// every() -> check if all items satisfy a condition
// fill() -> fill the array with a static value
// flat() -> flatten the array
// flatMap() -> flatten and map the array
// keys() -> get the keys of the array
// values() -> get the values of the array
// entries() -> get the key-value pairs of the array
// from() -> create an array from an array-like object
// of() -> create an array from the arguments
// isArray() -> check if an object is an array

