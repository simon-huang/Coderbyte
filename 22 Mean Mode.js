/*
Have the function MeanMode(arr) take the array of numbers stored in arr 
and return 1 if the mode equals the mean, 0 if they don't equal each other 
(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
The array will not be empty, will only contain positive integers, and will not 
contain more than one mode. 

*/

function MeanMode(arr) { 
    var mean = arr.reduce(function(a,b){return a + b;}) / arr.length;
    var dict = {};
    for (var i = 0; i < arr.length; i++){
        arr[i] in dict ? dict[arr[i]]++ : dict[arr[i]] = 1;
    }
    var numbersInArray = Object.keys(dict);
    var tallies = numbersInArray.map(function(x){return dict[x];});
    var instancesOfMode = tallies.reduce(function(a,b){return a >= b ? a : b});
    var indexOfMode = tallies.indexOf(instancesOfMode);
    return mean == numbersInArray[indexOfMode] ? 1 : 0;
}
/*
Probably should've done what I did last time. Created an answer var and
a tally var. 
for (var n in dict){}
Looped through dict, and if dict[n] > tally, set tally to that and
set answer to n
*/   
console.log(MeanMode([1,2,3,2]));









