/*
Challenge
Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 
Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"

function FirstReverse(str) { 
  var ns = str.split("").reverse().join(""); 
  return ns;      
}

I tried doing this at first:

function FirstReverse(str) { 
  var placeholder = "";    
  for (i = 0; i <= Math.floor(str.length/2); i++){
      placeholder = str[i];
      str[i] = str[str.length - 1 - i];
      str[str.length - 1 - i] = placeholder;
  }  
  return str; 
}

I forgot that in JS strings are immutable. If I'd converted the string 
into an array I could've done it that way.


Here's are 2 ways of doing it with recursion I found

function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

function reverse(s) {
  function rev(s, len, o) {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
  };
  return rev(s, s.length, '');
}
*/



