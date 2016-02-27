/*
Repeat a string repeat a string http://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

function repeat(str, num) {
    // repeat after me
    var newstr = "";
    for(var i = 0; i < num; i++)
    {
        newstr += str;
    }
    return newstr;
}

repeat("abc", 3);
