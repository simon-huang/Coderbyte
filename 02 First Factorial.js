/*

Challenge
Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
Sample Test Cases
Input:4
Output:24

Input:8
Output:40320



function FirstFactorial(num) { 
  var total = 1;
  while (num > 1){
      total *= num;
      num--;
  }
  return total; 
}

Recursive solution:


function FirstFactorial(num) {
  if (num === 1) 
  	{ return 1; }
  return num * FirstFactorial(num-1);
}

*/
