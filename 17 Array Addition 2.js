/*
Challenge
Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
Sample Test Cases
Input:5,7,16,1,2
Output:"false"

Input:3,5,-1,8,12
Output:"true"

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)



function ArrayAdditionI(arr) { 
  
  // sort array ascending
  arr = arr.sort( function(a,b){return a - b});
  
  var max = arr.pop();
  
  function lookForSolution(){
    function search(sum,i) {
      if ( sum == max ) {
        return true;
      }
      else if ( sum > max || i == arr.length ) {
        return null;
      }
      else {
        return search(sum + arr[i],i + 1) ||
               search(sum,i + 1);
      }
    }
    
    // start search with sum of zero in position zero:
    return search(0,0);
  }
  
  return lookForSolution() || false; 
         
}
   
function ArrayAdditionI(arr) {
  
  // get largest number and remove it from array
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);
  
  // power set
  var sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(arr[i]);
      sets.push(temp);
      var s = temp.reduce(function(p, c) { return p + c; });
      if (s === sum) { return "true"; }
    }
  }
  
  return "false";
         
}
*/
















