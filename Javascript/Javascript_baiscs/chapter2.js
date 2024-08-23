 // Operators and Conditional statenments 

 // Operators 
    // 1. Arithmetic Operators
    // 2. Assignment Operators
    // 3. Comparison Operators
    // 4. Logical Operators
    // 5. Bitwise Operators
    // 6. Ternary Operators
    // 7. Type Operators
    // 8. String Operators
    // 9. Comma Operators
    // 10. Unary Operators
    // 11. Relational Operators
    // 12. Grouping Operators
    // 13. Destructuring Assignment
    // 14. Spread Operator
    // 15. Nullish Coalescing Operator
    // 16. Optional Chaining Operator
    // 17. delete Operator
    // 18. typeof Operator
    // 19. void Operator
    // 20. in Operator
    // 21. instanceof Operator
    // 22. new Operator
    // 23. super Operator
    // 24. this Operator
    // 25. yield Operator
    // 26. await Operator
    // 27. new.target Operator

    // Operators ;
    // Use to perfrom operations on data 
    // 1. Arithmetic Operators
    // + , - , * , / , % , ++ , --
    //  Modulus Operator % gives the remainder of the division
    //  Increment Operator ++ increases the value by 1
    //  Decrement Operator -- decreases the value by 1
    // 2. Assignment Operators 
    // = , += , -= , *= , /= , %= , **= , <<= , >>= , >>>= , &= , ^= , |=
    // = is used to assign the value to the variable
    // += is used to add the value to the variable
    // -= is used to subtract the value from the variable
    // *= is used to multiply the value to the variable
    // /= is used to divide the value from the variable
    // %= is used to get the remainder of the division
    // **= is used to raise the power of the value
    // <<= is used to left shift the value
    // >>= is used to right shift the value
    // >>>= is used to unsigned right shift the value'
    // &= is used to bitwise AND the value
    // ^= is used to bitwise XOR the value
    // |= is used to bitwise OR the value
    // 3. Comparison Operators 
    // == , === , != , !== , > , < , >= , <=

      let c = 10;
      let b = 20;
      console.log(c == b);
      // Output: false
    // == is used to compare the values
    // === is used to compare the values and data types
     // it  is stricter version of the equality operator
    // != is used to compare the values and data types
    // !== is used to compare the values and data types
    // > is used to check the greater value
    // < is used to check the smaller value
    // >= is used to check the greater or equal value
    // <= is used to check the smaller or equal value
    // 4. Logical Operators


    // && , || , !
    // && is used to check the both conditions
    // || is used to check the one of the condition
    // ! is used to check the opposite condition
    // 5. Bitwise Operators
    // & , | , ^ , ~ , << , >> , >>>
    // & is used to bitwise AND the values

    // | is used to bitwise OR the values
    // ^ is used to bitwise XOR the values
    // ~ is used to bitwise NOT the values
    // << is used to bitwise left shift the values
    // >> is used to bitwise right shift the values
    // >>> is used to bitwise unsigned right shift the values
    // 6. Ternary Operators
    // ? :
    // ? is used to check the condition
    // : is used to return the value
    // 7. Type Operators
    // typeof , instanceof
    // typeof is used to check the type of the value
    // instanceof is used to check the instance of the object
    // 8. String Operators
    // + , +=
    // + is used to concatenate the strings
    // += is used to concatenate the strings
    // 9. Comma Operators
    // ,
    // , is used to separate the values
    // 10. Unary Operators
    // delete , typeof , void , + , - , ~ , !
    // delete is used to delete the object
    // typeof is used to check the type of the value
    // void is used to return the undefined value
    // + is used to convert the string to number
    // - is used to convert the string to number
    // ~ is used to bitwise NOT the values
    // ! is used to check the opposite condition
    // 11. Relational Operators

    // Unary operator 
    var a = 10;
     a++;
     console.log(a);



     // Conditional Statenments 
       // 1. if statement
       let color =" red " ;
       if(color == "red"){
           console.log('Color is red');
         } else {
           console.log('Color is not red');
         }


         // 2. else if statement
         
         // syntax 
         // syntax are rules to write a language 

         // else if else 
         let mode = "dark";
         if(mode == "light"){
             console.log('Light mode is enabled');
         }
          else if(mode == "dark"){
              console.log('Dark mode is enabled');
          }
          else {
              console.log('Mode is not enabled');
          }


          var age = 18;
          age >= 18 ? console.log('You are eligible to vote') : console.log('You are not eligible to vote');

         

          // MDN DOCUMENTATION 
          // Switch statement
          // The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
          // Syntax
          // switch(expression) {
          //   case x:
          //     // code block
          //     break;
          //   case y:
          //     // code block
          //     break;
          //   default:
          //     // code block
          // }
          // This is how it works:
          // The switch expression is evaluated once.
              // 











              // Practice question 
              //  get user to input a number using prompt ( " Enter a number"). check if the number i a multiple fo 5 or not 

      //  let num =       prompt ("Enter a number"); 

      //       if(num % 5 === 0){
      //           console.log('Number is multiple of 5');
      //       } else {
      //           console.log('Number is not multiple of 5');
      //       }



      // question 2 
      // wirte a code whcih can give grades of students according to therir socers 
      let marks =  89;
      switch (true) {
          case marks >= 90:
              console.log('A');
              break;
          case marks >= 80:
              console.log('B');
              break;
          case marks >= 70:
              console.log('C');
              break;
          case marks >= 60:
              console.log('D');
              break;
          case marks >= 50:
              console.log('E');
              break;
          default:
              console.log('F');
              break;
      } 





