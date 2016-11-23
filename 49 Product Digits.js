/*
Challenge
Using the JavaScript language, have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication. 
Sample Test Cases
Input:6
Output:2

Input:23
Output:3
*/


function ProductDigits(num) {
    var squareRoot = Math.ceil(Math.sqrt(num));
    var quotientPairs = [];
    for (var i = 1; i < squareRoot; i++){
        if (num % i === 0)
            var pair = i.toString() + (num / i).toString();
            quotientPairs.push(pair.length);
    }
    return quotientPairs.reduce(function(a,b){return a <= b ? a : b;});
}

console.log(ProductDigits(90));

/* 
could set default = num.length + 1 (the quotientpair being num * 1)
then check every other pair, and if shorter make that the default
then return the default
*/







