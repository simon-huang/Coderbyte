/*
Challenge
Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters. 
Sample Test Cases
Input:"coder","byte","code"
Output:"code"

Input:"abc","defg","z","hijk"
Output:"abc"
*/


function ThirdGreatest(strArr) { 
    return strArr.sort(function(a,b){return b.length - a.length})[2];      
}

/*
At first I did

strArr.sort(function(a,b){return a.length - b.length})[strArr.length-3];

This puts the biggest at the end and keeps the ones of the same length in order.
But to do it this way I'd have to reverse the order for the same length.

So by switching to greatest at the beginning I'm all good.
*/










