/*
Everything Be True http://www.freecodecamp.com/challenges/everything-be-true

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function every(collection, pre) {
    // Is everyone being true
    for(var i = 0; i < collection.length; i++)
    {
        if(!collection[i].hasOwnProperty(pre) || collection[i][pre] === 0 || collection[i][pre] === null || 
           collection[i][pre] === "" || collection[i][pre] === undefined)
            return false;
        else if(Number.isNaN( collection[i][pre] ))
            return false;
    }
    return true;
}

every([{"single": "double"}, {"single": NaN}], "single");