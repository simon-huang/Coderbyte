/*
Challenge
Using the JavaScript language, have the function NumberSearch(str) take 
the str parameter, search for all the numbers in the string, add them together, 
then return that final number. For example: if str is "88Hello 3World!" the 
output should be 91. You will have to differentiate between single digit numbers 
and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" 
should return two different answers. Each string will contain at least one letter 
or symbol. 

Sample Test Cases
Input:"75Number9"
Output:84

Input:"10 2One Number*1*"
Output:13
*/
var str = "66 78b 7a4   6";
var arr = str.split(/[^0-9]/g).filter(function(x){return parseInt(x)}).map(function(x){return parseInt(x)}).reduce(function(a,b){return a+b;});
console.log(arr);

/*
Not sure how to return an array of just numbers in one go.


function NumberAddition(str) { 

  // use the JavaScript match function which
  // tries to find all matching patterns in the string
  // and it returns an array of all matches found
  // e.g. "75Number9" returns [75, 9] 
  // or set to 0 if no numbers are found
  var nums = str.match(/[0-9]+/gi) || [0];
  
  // use the JavaScript reduce functions which calls a
  // function on each value in the array and returns
  // a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
         
}
*/








