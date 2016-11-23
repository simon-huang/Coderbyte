/*
Challenge
Using the JavaScript language, have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome. 
Sample Test Cases
Input:2
Output:3

Input:180
Output:181
*/


function NextPalindrome(num) { 
    var num2 = num +1;
    while (num2.toString() != num2.toString().split('').reverse().join(''))
        num2++;
    return num2;
}

console.log(NextPalindrome(180));








