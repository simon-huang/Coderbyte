/*
Challenge
Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 
Sample Test Cases
Input:"(1 1)","(1 3)","(3 1)","(3 3)"
Output:4

Input:"(0 0)","(1 0)","(1 1)","(0 1)"
Output:1
*/

function RectangleArea(strArr) { 
    var height = 0, width = 0;
    var xAxis = strArr.map(function(x){return parseInt(x.match(/-?[0-9]/))});
    var yAxis = strArr.map(function(y, index, arr){return parseInt(y.substring(3).match(/-?[0-9]/))});
    for (var i = 1; i < strArr.length; i++){
        if (xAxis[i] == xAxis[0])
            height = Math.abs(yAxis[i] - yAxis[0]);
        else if (yAxis[i] == yAxis[0])
            width = Math.abs(xAxis[i] - xAxis[0]);
    }
    return height * width;
}

console.log(RectangleArea(["(-2 -2)","(0 0)","(-2 0)","(0 -2)"]));

// very clean solution

function RectangleArea(strArr) { 
  var xs = [];
  var ys = [];
  for(var i = 0; i < strArr.length; i++) {
      var xy = strArr[i].slice(1,-1);
      var x = xy.split(' ')[0];
      var y = xy.split(' ')[1];
      xs.push(x);
      ys.push(y);
  }
  xs.sort(function(a,b) {return a-b;});
  ys.sort(function(a,b) {return a-b;});
  var h = ys[3] - ys[1];
  var w = xs[3] - xs[1];
  return h*w;    
}

// better way to get coordinates

var x = strArr.map(function(e){
    return parseInt(e.replace('(','').replace(')','').split(' ')[0])
  });
  var y = strArr.map(function(e){
    return parseInt(e.replace('(','').replace(')','').split(' ')[1])
  });

//new array of just coordinates
newArr.push(strArr[i].match(/-*\d+/g));

//originally this was my code, but it didn't work for negative coordinates

var xAxis = strArr.map(function(currentValue, index, arr){return parseInt(arr[index][1])});
var yAxis = strArr.map(function(currentValue, index, arr){return parseInt(arr[index][3])});











