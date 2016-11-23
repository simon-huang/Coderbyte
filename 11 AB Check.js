/*
Challenge
Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 
Sample Test Cases
Input:"after badly"
Output:"false"

Input:"Laura sobs"
Output:"true"
*/

function ABCheck(str) { 
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++){
      if (str[i] == "a" && str[i+4] == "b")
        return true;
      else if (str[i] == "b" && str[i+4] == "a")
        return true;
  }
  return false   
}

//with RegExp (I knew it could be done but I didn't know the syntax)

function ABCheck(str) { 
  return /a...b|b...a/.test(str);
}

// or

function ABCheck(str) { 
  return /a...b/g.test(str);
}

// not sure which is better
// maybe add an i for case insensitivity to both






