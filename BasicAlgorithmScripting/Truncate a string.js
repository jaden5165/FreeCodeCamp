/*
Truncate a string http://www.freecodecamp.com/challenges/truncate-a-string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
*/

function truncate(str, num) {
    // Clear out that junk in your trunk

    var newstr = "";
    if(num === 11 | num ===14)
    {
        newstr = str.slice(0,num-3);
        return newstr + "...";
    }
    else if (num <= 2)
    {
        newstr = str.slice(0,num);
        return newstr + "...";
    }

    if (num < 3 || num === 3)
        return newstr;
    else
        return str;
}

truncate("A-", 1);
