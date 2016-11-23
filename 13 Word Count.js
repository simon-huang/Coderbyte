/*
Challenge
Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces. 
Sample Test Cases
Input:"Hello World"
Output:2

Input:"one 22 three"
Output:3
*/


function WordCount(str) { 
  return str.split(" ").length;      
}





