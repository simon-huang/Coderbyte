/*
Challenge
Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
Sample Test Cases
Input:"Hello apple pie"
Output:"Hello"

Input:"No words"
Output:-1
*/


function LetterCountI(str) {
    var words = str.split(" ");
    var currentWord = "", currentTotal = 1;
    function retrieveValues(x){
        return dict[x];
    }
    function reducer(a,b){
        return a>=b ? a : b;
    }
    for (var w = 0; w < words.length; w++){
        var dict = {}, tally = 0;
        for (var l = 0; l < words[w].length; l++)
            words[w][l] in dict ? dict[words[w][l]]++ : dict[words[w][l]] = 1;
        tally = Object.keys(dict).map(retrieveValues).reduce(reducer);
        if (tally> currentTotal){
            currentTotal = tally;
            currentWord = words[w];
        }
    }
    return currentTotal > 1 ? currentWord : -1;
}

console.log(LetterCountI("Argument goes here"));

 /*
I used Object.keys().map() but I believe it'd be faster to use a for loop 
    var tally = [];
    for(var l in dict) {
        tally.push(dict[l]);
    }
*/   





