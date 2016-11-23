/*
Challenge
Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. 
Sample Test Cases
Input:"hello"
Output:2

Input:"coderbyte"
Output:3
*/

function VowelCount(str) { 
  return str.match(/[aeiou]/gi).length; 
}





