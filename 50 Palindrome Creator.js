/*
Challenge
Using the JavaScript language, have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible. If the input string is already a palindrome, your program should return the string palindrome. 

The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string. 
Sample Test Cases
Input:"mmop"
Output:"not possible"

Input:"kjjjhjjj"
Output:"k"
*/

// ugh I misread the directions and made it way more complicated. I thought it was
// saying you had to remove all instances of 1-2 characters, not 1-2 characters total

function PalindromeCreator(str) {
    function remover(str,char,index){
    	//string being checked, string of unique char, index of unique char, index of already removed char
        var newStr = [];
        for (var i = 0; i < str.length; i++){
            if (str[i] != char[index])
                newStr.push(str[i]);
        }
        return newStr.join('');
    }
    if (str == str.split('').reverse().join(''))
            return "palindrome";

    var uChar = str.split('').filter(function(cValue,i, arr){return i == arr.indexOf(cValue);}).join('');
	var allP = {};
	for (var i = 0; i < uChar.length; i++){
        var removed1 = remover(str,uChar,i);
        if (removed1 == removed1.split('').reverse().join(''))
        	allP[removed1] = uChar[i];
        uCharMinus1 = uChar.substring(0,i) + uChar.substring(i+1);
        for (var j = 0; j < uCharMinus1.length; j++){
            var removed2 = remover(removed1,uCharMinus1,j);
            if (removed2 == removed2.split('').reverse().join(''))
        		allP[removed2] = uCharMinus1[j] + uChar[i];
        }
    }
    if (Object.keys(allP).length < 1)
    	return "not possible";
    else {
    	longestP = Object.keys(allP).sort(function(a,b){return b.length - a.length})[0];
    	return longestP.length < 3 ? "not possible" : allP[longestP];
    } 
}  

// the correct way is more like this (although this doesn't check for longest palindrome)

function PalindromeCreator(str) {
  // try existing word
  if (str === str.split('').reverse().join('')) {
    return 'palindrome';
  }

  // try one letter
  for (let i = 0; i < str.length; i++) {
    const oneLetterTest = str.slice(0, i) + str.slice(i + 1);
    if (oneLetterTest === oneLetterTest.split('').reverse().join('')) {
      return str[i];
    }
  }
  
  //try two letters
  for (let i = 0; i < str.length; i++) {
    const oneLetterTest = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < oneLetterTest.length; j++) {
      const twoLetterTest = oneLetterTest.slice(0, j) + oneLetterTest.slice(j + 1);
      if (twoLetterTest === twoLetterTest.split('').reverse().join('')) {
        
        return str[i] + oneLetterTest[j];
      }
    }
  }
  return 'not possible'
}

console.log(PalindromeCreator("mmjo"));









