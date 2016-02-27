/*
Confirm the Ending http://www.freecodecamp.com/challenges/confirm-the-ending
Check if a string (first argument) ends with the given target string (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
*/

function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var len = target.length;
    var j = str.substr(-len, len);
    if(j === target)
        return true;
    else
        return false;
}

end("Bastian", "n");
