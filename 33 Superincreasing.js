/*
Challenge
Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false" 
Sample Test Cases
Input:1,2,3,4
Output:"false"

Input:1,2,5,10
Output:"true"
*/


function Superincreasing(arr) { 
    for (var i = 1; i < arr.length; i++){
        if (arr[i] <= arr.slice(0,i).reduce(function(a,b){return a+b;}))
            return false;
    }
    return true
}

//faster computing

function Superincreasing(arr) { 
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= sum) { return "false"; }
    sum += arr[i];
  }
  return true;  
}






