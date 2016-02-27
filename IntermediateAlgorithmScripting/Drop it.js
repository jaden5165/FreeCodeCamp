/*
Drop it http://www.freecodecamp.com/challenges/drop-it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.shift()
Array.slice()
*/

function drop(arr, func) {
    // Drop them elements.
    var firstlen = arr.length;
    for (var i = 0; i < firstlen; i++) 
    {
        if (func(arr[0])) 
        {
            break;
        } 
        else 
        {
            arr.shift();
        }
    }

    return arr;
}

drop([0, 1, 0, 1], function(n) {return n === 1;});
