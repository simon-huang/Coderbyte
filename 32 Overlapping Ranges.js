/*
Challenge
Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false. 
Sample Test Cases
Input:5,11,1,5,1
Output:true

Input:1,8,2,4,4
Output:false
*/

function OverlappingRanges(arr) { 
    var range1 = [], range2 = [], counter = 0;
    for (var i = arr[0]; i <= arr[1]; i++){
        range1.push(i);
    }
    for (var j = arr[2]; j <= arr[3]; j++){
        range2.push(j);
    }
    for (var k = 0; k <= range1.length; k++){
        if (range2.indexOf(range1[k]) != -1)
            counter++;
    }
    return counter >= arr[4];    
}


// Oops, no need to actually create the arrays

function OverlappingRanges(arr) {
  var counter = 0;
  for (var i = arr[0]; i < arr[1]; i++) {
    if (i >= arr[2] && i <= arr[3]) { 
      counter += 1;
    }
  }
  return (counter >= arr[4]) ? true : false;
}

// formula

function OverlappingRanges(arr) {
    var target = arr.pop();
    var MaxLowerBound = Math.max(arr[0], arr[2]);
    var MinUpperBound = Math.min(arr[1], arr[3]);
    var range = MinUpperBound - MaxLowerBound + 1;
    return range >= target;
}





