/*
Challenge
Using the JavaScript language, have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true. 
Sample Test Cases
Input:"3gy41d216"
Output:"true"

Input:"f09r27i8e67"
Output:"false"
*/

function EvenPairs(str) { 
    var nums = str.match(/[0-9]+/g);
    var nums2 = nums.filter(function(x){return (/[02468].*?[02468]/).test(x)})
    return nums2.length > 0;   
}


console.log(EvenPairs("7r5gg812"));







