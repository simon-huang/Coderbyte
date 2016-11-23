/*
Challenge
Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
Sample Test Cases
Input:5,10,15
Output:"Arithmetic"

Input:2,4,16,24
Output:-1
*/


function ArithGeo(arr) { 
    var differences = [];
    for (var i = 1; i < arr.length; i++) {
        differences.push(arr[i]-arr[i-1]);
    }  
    if (differences.every(function(x){return x == differences[0];}))
        return "Arithmetic";
    else {
        var geoCheck = []; 
        for (var j = 1; j < differences.length; j++) {
            geoCheck.push(differences[j]/differences[j-1]);
        }
        return geoCheck.every(function(x){return x == geoCheck[0];}) ? "Geometric" : -1;
    }
}













