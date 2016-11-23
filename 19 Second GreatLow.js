/*
Challenge
Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
Sample Test Cases
Input:1, 42, 42, 180
Output:"42 42"

Input:4, 90
Output:"90 4"

Originally I accidentally tried to slice for the answers instead of just calling

function SecondGreatLow(arr) { 
  var sorted = arr.sort(function(a,b){return a-b}).filter(function(x, index, array){
  	return array.indexOf(x) === index;});
  var secondLow = sorted.slice(1,2);
  var secondGreat = sorted.slice(-2).shift();
  return secondLow + " " + secondGreat;        
}

*/

function SecondGreatLow(arr) { 
  var sorted = arr.sort(function(a,b){return a-b}).filter(function(x, index, array){
  	return array.indexOf(x) === index;});
  return sorted[1] + " " + sorted[sorted.length-2];        
}









