/*
Have the function SimpleSymbols(str) take the str parameter being passed 
and determine if it is an acceptable sequence by either returning the string 
true or false. The str parameter will be composed of + and = symbols with 
several letters between them (ie. ++d+===+c++==a) and for the string to be 
true each letter must be surrounded by a + symbol. So the string to the 
left would be false. The string will not be empty and will have at least one letter. 

*/

function SimpleSymbols(str) { 
  for (var i = 0; i < str.length; i++) {
      if ((/[a-zA-Z]/).test(str.charAt(i))){
          if (str.charAt(i-1) != "+" || str.charAt(i+1) != "+")
            return false;
      }
  }   
  return true;
}

/*
An alternative

function SimpleSymbols(str) { 
	var before = str.match(/\+[a-z]/g);
  	var after = str.match(/[a-z]\+/g);
  	if(!before || !after)return false
  	return before.length === after.length;
}

Or

 if (/[^\+][a-zA-Z]/.test(str) || /[a-zA-Z][^\+]/.test(str)) {
      return false;
 return true;

 Don't really understand this one

return ('='+str+'=').match(/([^\+][a-z])|([a-z][^\+])/gi)===null; 

*/