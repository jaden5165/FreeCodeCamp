/*
Diff Two Arrays http://www.freecodecamp.com/challenges/diff-two-arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Array.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Array.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.concat() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

function diff(arr1, arr2) {
    var newArr = [];
    arr1.filter(function(val){
        if(arr2.indexOf(val) === -1)
        {
            newArr.push(val);
        }
    });

    arr2.filter(function(temp){
        if(arr1.indexOf(temp) === -1)
        {
            newArr.push(temp);
        }

    });
    // Same, same; but different.
    return newArr;
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
