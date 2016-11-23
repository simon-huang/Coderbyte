/*
Have the function SwapCase(str) take the str parameter and swap the case 
of each character. For example: if str is "Hello World" the output should 
be hELLO wORLD. Let numbers and symbols stay the way they are. 

*/


function SwapCase(str) { 
  var altered = str.replace(/[a-z]/gi, function(x){return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()} );  
  return altered;          
}








