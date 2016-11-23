/*
Challenge
Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 
Sample Test Cases
Input:5 & num2 = 2
Output:"3"

Input:6874 & num2 = 67
Output:"103"
*/

function DivisionStringified(num1,num2) { 
    var quotient = Math.round(num1 / num2);
    return quotient < 1000 ? quotient.toString() : Math.floor(quotient/1000).toString() + "," + (quotient%1000).toString();
}

/*
Oops doesn't handle >= 1 million 
if quotient.length > 3, quotient.split("") and use a for loop

*/

 if (numleng > 3) {
    var arr = string.split("");
   for (var i= numleng - 3; i > 0; i = i - 3) {
        arr.splice(i, 0, ",");
        // index, how many to remove, and what to add
        // removes nothing but adds the comma before the current value at i
   }
    var newstring = arr.join("");
 }  










