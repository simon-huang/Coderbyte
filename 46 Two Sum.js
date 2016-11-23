/*
Challenge
Using the JavaScript language, have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11 

If there are no two numbers that sum to the first element in the array, return -1 
Sample Test Cases
Input:17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7
Output:6,11 10,7 15,2

Input:7, 6, 4, 1, 7, -2, 3, 12
Output:6,1 4,3

https://coderbyte.com/editor/Two%20Sum:JavaScript


function TwoSum(arr) { 
    var results = [], dict = {}
    for (var i = 1; i < arr.length ; i++){

       
    }
        
}

*/

var a = [1,1,1,2,1]

console.log(a.sort(function(a,b){return b-a;}));
//console.log(a.sort().reduce(function(a,b){return a == b ? a : b}));




