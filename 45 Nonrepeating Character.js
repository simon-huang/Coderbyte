/*
Challenge
Using the JavaScript language, have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character. 
Sample Test Cases
Input:"abcdef"
Output:"a"

Input:"hello world hi hey"
Output:"w"
*/

function NonrepeatingCharacter(str) { 
    letterArr= str.toLowerCase().replace(/[^a-z]/g, '').split('');
    function unique(cValue, i, arr) {
    	arrCopy = arr.slice(0,i).concat(arr.slice(i+1));
    	return arrCopy.indexOf(cValue) < 0;
    }
    return letterArr.find(unique);
}

console.log(NonrepeatingCharacter("hello world hi hey"));

// alternatively run a for loop over the filtered string

function NonrepeatingCharacter(str) {

  str = str.replace(/\W/g, '');

  for (let i = 0; i < str.length; i++) {
    
    let rest = str.slice(0, i) + str.slice(i + 1);

    if (rest.indexOf(str[i]) === -1) {
      return str[i];
    }
  }
}









