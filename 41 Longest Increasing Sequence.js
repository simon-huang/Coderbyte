/*
Challenge
Using the JavaScript language, have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS 
is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence. 
Sample Test Cases
Input:9, 9, 4, 2
Output:1

Input:10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90
Output:7
*/

function LongestIncreasingSequence(arr) { 
    var result = 1;
    for (var i = 0; i < arr.length; i++){
        var counter = 1, currentGreatest = arr[i];
        for (var j = i + 1; j < arr.length; j++){
            if (arr[j] > currentGreatest){
                counter++;
                currentGreatest = 
            }
        }
        if (counter > result)
            result = counter;
    }
    return result
}


console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79]));






