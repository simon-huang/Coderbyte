/*
Challenge
Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers. 
Sample Test Cases
Input:1,4,3
Output:"12-3-4"

Input:3,1,2,6
Output:"12-36-18-6"
*/

function OtherProducts(arr) {
    var products = [];
    for (var i = 0; i < arr.length; i++){
        products.push([]);
    }
    for (var j = 0; j < arr.length; j++){
        for (var k = 0; k < arr.length; k++){
            if (j != k)
                products[k].push(arr[j]);
        }  
    }
    return products.map(function(x){return eval(x.join("*"))}).join("-");  
}

function OtherProducts(arr) {
  return  arr.map((_,i) => extract(arr,i).reduce((a,b) => a * b)).join('-');
}

// or find total product, and then map the array. value at each index  = total/value

function OtherProducts(arr) {
    let holdArray = [];
    arr.forEach((val, ind, theArray) => {
      newArray = Array.from(theArray)
      newArray.splice(ind,1)
      holdArray[ind] = newArray.reduce((val1, val2) => val1 * val2);
    })
    return holdArray.join('-');
}

console.log(OtherProducts([1, 2, 3, 4, 5]))









