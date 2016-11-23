/*
Challenge
Using the JavaScript language, have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation, reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244. 
Sample Test Cases
Input:"213"
Output:"171"

Input:"4567"
Output:"60296"
*/


function BinaryReversal(str) { 
    var bin = parseInt(str,10).toString(2).split("").reverse();
    while (bin.length % 8 !== 0)
        bin.push("0");
    return parseInt(bin.join(""), 2)
}

console.log(BinaryReversal("10156"));





