/*
Challenge
Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101" 
Sample Test Cases
Input:"100", "000"
Output:"100"

Input:"00011", "01010"
Output:"01011"
*/

function BitwiseOne(strArr) {
    var output = "";
    for (var i = 0; i < strArr[0].length; i++){
	    strArr[0][i] == "0" && strArr[1][i] == "0" ? output += "0" : output += "1";
    }
    return output;
}


function BitwiseOne(strArr) { 
  // convert the two binary strings to integers
  var n1 = parseInt(strArr[0], 2);
  var n2 = parseInt(strArr[1], 2);
  // bitwise OR the numbers and convert the answer
  // back into a binary string
  return (n1 | n2).toString(2);
}







