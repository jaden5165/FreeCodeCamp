/*
Seek and Destroy http://www.freecodecamp.com/challenges/seek-and-destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Array.filter()
*/

function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    var temp = args.splice(1);
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < temp.length; j++)
        {
            if(arr[i] === temp[j])
                delete arr[i];
        }
    }

    function faisy(value)
    {
        return value !== null;
    }
    return arr.filter(faisy);
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5);