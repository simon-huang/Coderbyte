/*
Have the function PowerSetCount(arr) take the array of integers stored in arr, and return the length of the power set (the number of all possible sets) that can be generated. For example: if arr is [1, 2, 3], then the following sets form the power set: 

[] 
[1]
[2]
[3]
[1, 2]
[1, 3]
[2, 3]
[1, 2, 3] 

You can see above all possible sets, along with the empty set, are generated. Therefore, for this input, your program should return 8.
*/

function PowerSetCount(arr) { 
    return Math.pow(2,arr.length);     
}



