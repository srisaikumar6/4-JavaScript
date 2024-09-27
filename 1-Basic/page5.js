/*
    isNaN() - it is use to check given value is number or not
    -> for string value it return true.
    -> for number value it return false.

    = for assignment
    == for comapre the value
    === for value and data type compare
*/

let input = "879654";
let mystatus = isNaN(input);
if( mystatus == true ) {
    console.log(input, " is a string value ");
}
else {
    console.log(input, " is a number value ");
   if (input %2==0 ) {
    console.log(input, " is a even value ");
   } else {
    console.log(input, " is a odd value ");

   }
}

// if - it is use to check range condition and exact condition.
// switch case - use to check only exact condition.