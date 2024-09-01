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


    for(let item of arr){
        console.log(item)
    }

    // for of loop is used to iterate over the array

    // for in loop is used to iterate over the object





