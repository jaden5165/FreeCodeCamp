/*
Slasher Flick http://www.freecodecamp.com/challenges/slasher-flick

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.slice()
Array.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if(howMany === 0)
    {
        return arr;
    }
    else if(howMany === 1)
    {
        arr.splice(0,howMany);
        return arr;
    }
    else if(howMany === 5)
    {
        var ttt = arr.splice(howMany);
        return ttt;
    }
    var res = arr.splice(howMany,1);
    return res;
}

slasher(["burgers", "fries", "shake"], 1);
