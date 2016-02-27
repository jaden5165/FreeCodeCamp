/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

function bouncer(arr) {
    // Don't show a false ID to this bounce
    function isfaisy(value)
    {
        return (value !== false && value !== null && value !== 0 && value !== "" && value !== undefined && !Number.isNaN(value));
    }
    var filtered = arr.filter(isfaisy);
    return filtered;
}

bouncer([7, "ate", "", false, 9]);
