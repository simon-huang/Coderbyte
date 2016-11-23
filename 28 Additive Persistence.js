/*
Challenge
Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
Sample Test Cases
Input:4
Output:0

Input:19
Output:2
*/

function AdditivePersistence(num) { 
    function numToArray(n){
        return n.toString().split("");
    }    
    function adder(a,b){
        return parseInt(a)+parseInt(b);
    }
    var counter = 0;
    while (num.toString().length > 1){
        num = numToArray(num).reduce(adder);
        counter++;
    }
    return counter;
}

// Recursive 

function AdditivePersistence(num) {
  var arr = num.toString().split('');
  while (arr.length > 1) {
    var added = arr.reduce(function(a,b){return parseInt(a)+parseInt(b);});
    return 1 + AdditivePersistence(added);  
  }
  return 0;    
}

   
// Similar idea, but .join("+") and eval() instead of reduce()

function AdditivePersistence(num) { 
  var c = 0;
  var n = num.toString();
  while (n.length > 1) {
    c += 1;
    n = eval(n.split('').join('+')).toString();
  }
  return c;
}






