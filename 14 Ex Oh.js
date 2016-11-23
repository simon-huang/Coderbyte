/*
Challenge
Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 
Sample Test Cases
Input:"xooxxo"
Output:"true"

Input:"x"
Output:"false"
*/


function ExOh(str) {
  var one = str.match(/x/gi), two = str.match(/o/gi);
  return one !== null && two !== null ? one.length == two.length : false; 
}


// Alternatively

function WordCount(str) { 
	var x = str.split("x").join("");
	var o = str.split("o").join("");
	return x.length === o.length;
}

// Clever. Or can filter

function WordCount(str) { 
  var arr = str.split("");
  var x = arr.filter(function(elem, index, self) { 
    return elem === 'x';
  });
  var o = arr.length - x.length;
  return x.length === o;
}






