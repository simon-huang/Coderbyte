/*
Challenge
Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 
Sample Test Cases
Input:"never odd or even"
Output:"true"

Input:"eye"
Output:"true"
*/

/*
I tried to use .match and compare arrays, and in trying to figure out why
that wouldn't work, learned that in JS you can't just compare arrays.
I could fix that but turning them into strings, or write a function that
loops through and compares every element of both.

with .replace the initial str stays a string
*/

function Palin(str) { 
    var filtered = str.replace(/[^a-z]/gi, "");
    var half = Math.floor(filtered.length/2);
    return filtered.substring(0,half) == filtered.substring(filtered.length-half).split("").reverse().join("")
}

// The easier solution would be to not split it in half. Oops.
// Still filter it, but also make it all lowercase to make it easier

function Palindrome(str) { 
    var filtered = str.replace(/[^a-z]/gi, "").toLowerCase();
    return filtered === filtered.split("").reverse().join("");
}

console.log(Palindrome("Never odd or even"));





