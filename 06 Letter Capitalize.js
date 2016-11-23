/*
Have the function LetterCapitalize(str) take the str parameter 
being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 
*/

function LetterCapitalize(str) { 
  return str.replace(/\w*/g, function(word){return word.charAt(0).toUpperCase() + word.substr(1);});         
}
// This regexp is better

function LetterCapitalize(str) { 
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) { 
    return char.toUpperCase();
  });        
}
//Alternatively, mapping works too

function LetterCapitalize(str) { 
  return str.split(" ").map(function(word){return word.charAt(0).toUpperCase()+ word.substr(1);} ).join(" ");    
}

//console.log(LetterCap("someBody Once told me the world"));
