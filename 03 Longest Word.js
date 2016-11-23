/*
Challenge
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Sample Test Cases
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"


function LongestWord(sen) { 
  sen = sen.replace(/[^a-zA-Z\s]/g, "").split(" ");
  var result = "";
  for (var i = 0; i < sen.length; i++) {
  	if (sen[i].trim().length > result.length)
  		result = sen[i].trim();
  }
  return result; 
           
}

Another way to get an array of words:

sen = sen.match(/[a-zA-Z]+/g);;

Another:

sen.split("").filter(function(c) {
    return /\w|\s/.test(c);
  }).join("").split(" ").

Best way to get first word of longest length:

Array.reduce(function(a,b){
	return (a.length >= b.length ? a : b);
}) 

Faster way to remove non-letters:

var arr = sen.match(/[a-z0-9]+/gi);

  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return sorted[0]; 
}
*/





