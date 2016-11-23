/*
Challenge
Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 
Sample Test Cases
Input:453857
Output:85

Input:363223311
Output:63
*/
function LargestPair(num) {
    var numStr = num.toString(), result = 0;
    for (var i = 0; i < numStr.length - 1; i++){
        if (parseInt(numStr[i]+ numStr[i+1]) > result)
            result = parseInt(numStr[i]+ numStr[i+1]);
    }
    return result;
}
console.log(LargestPair(8928));

//use slice
parseInt(numStr.slice(i, i+2))

// maybe faster to get all pairs and then find biggest

function LargestPair(num) {
  let strNum = String(num);
  let pairs = [];

  for (let i = 0; i < strNum.length - 1; i++) {
    pairs.push(Number(strNum[i] + strNum[i + 1]));
  }

  return pairs.reduce((p, c) => Math.max(p, c));
}






