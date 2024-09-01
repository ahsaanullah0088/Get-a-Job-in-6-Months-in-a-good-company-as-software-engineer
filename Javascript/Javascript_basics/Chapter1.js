// Variables and Datatypes
 // console is the part of browser in which we write javascript code 
 // Visual studio code
 // it is free
 // it is popular
 // Every code will b written in vs code
    // it is a text editor
    //  its by microsoft 
    // Our fist coe 
    // console.log("Hello World");
    console.log("hello world");


    // variables in js 
      // var, let, const
      // var is used to declare the variable
      // varibales are containers for data
      // var is global scoped
      // double quotes for string in variables
      // sno quotes for numbers in variables
        var num = 10;
        var name = "John";
      console.log( num);
      // null is the special value means nothing
      // undefined is the special value means no value assigned
      var a = null;
      var b = undefined;
      console.log(a);


      // boolean value is true or false
      isFollow = true;
      console.log(isFollow);


      //  variable rules
      // 1. variables names are case sensitive "a" and "A" are different
      // 2. Only , letters , digits, underscore and dollar sign are allowed not even spaces
      // 3. variable name can not start with a digit
      // 4. Only letters , underscore and dollars should be first character
      // 5. variable names should be meaningful
      // 6. Reserved words cannot be variables name
      // no space used in variable name 
      // resrved words like console , var , let , const , if , else , for , while , do , break , continue , return , function , true , false , null , undefined , new , delete , this , super , class , extends , are not used as variable names ;
      // fullName -> Camel Case
      //full_name -> Snake Case
      // full-name -> Kebab Case
      // Fullname -> Pascal Case



          // Let :
      // let is used to declare the variable
      // we cant redeclare the variable with let
      // let is block scoped


          // Const :
      // const is used to declare the variable
      // const is block scopped

      // Data types in js 


      // 1. Primitive Data Types
      // 1. Number  num = 10  output 10
      // 2. String  name = "John" output John
      // 3. Boolean isFollow = true  output true
      // 4. Null  a = null  output null
      // 5. Undefined b = undefined
      // 6. Symbol  const sym = Symbol('hello') output Symbol(hello)
      // 7. BigInt  let x = BigInt(123); output 123n 



      // 2. Non Primitive Data Types
      // 1. Object  collections of key values pairs example  var obj = {name: "John", age: 30} output {name: "John", age: 30}  typeof obj output object
      // how to access objects obj.keyvalue such as obj.name
       // assign new value to object obj.name = "Doe"
      // 2. Array
      // 3. Function
      // 4. Date
      // 5. RegExp


      // practice question

      const product = {
          title  :'ball pen',
          price : 10,
          stock : true,
          rating : 4.5,
         description : 'This is a ball pen',
      } 
      console.log(product);
    

      const Profile = {
         name : 'Ahsaan Rajput',
         isfollow : true,
         followers : 1000,
         following : 100,
      }
      typeof(Profile);
      console.log(Profile);