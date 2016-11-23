/*
Challenge
Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 
Sample Test Cases
Input:4
Output:"true"

Input:124
Output:"false"

function PowersofTwo(num) { 
    var counter = 1;
    while (num > counter){
        counter *= 2;
    } 
    return num == counter ? true : false;
}
*/


function PowersofTwo(num) { 
    if (num < 0 || num % 2 !== 0)
        return false;
    else if (num == 1 || num == 2)
        return true;
    else
        return PowersofTwo(num / 2);
}


return Math.log2(num) === parseInt(Math.log2(num));






