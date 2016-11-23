/*
Challenge
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"

function LetterChanges(str) {
  var result = "", holder = "";
  for (var i = 0; i < str.length; i++){
      if ((str.charCodeAt(i) > 64 && str.charCodeAt(i) < 90) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 122)){
         holder = str.charCodeAt(i) + 1;
         if (holder == 97 || holder == 101 || holder == 105|| holder == 111|| holder == 117 )
            holder -= 32;
        result += String.fromCharCode(holder);
      } 
      else if (str.charCodeAt(i) == 90)
        result += String.fromCharCode(65);
      else if (str.charCodeAt(i) == 122)
        result += String.fromCharCode(97);
      else
        result += str[i];
  }
  
  return result 
         
}

Nicer solution

function LetterChanges(str) { 
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  });    
}

Another

function LetterChanges(str) { 

  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });
  return capitalized;
}

I forgot it doesn't matter whether it's a z or Z originally, since either way
it becomes an A in the end.
*/


