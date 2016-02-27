/*
Steamroller http://www.freecodecamp.com/challenges/steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/

function steamroller(arr) {
    // I'm a steamroller, baby
    var flattened = arr.reduce(function(a, b) {
        return a.concat(b);
    }, []);
    // return flattened;

    var len = flattened.length;
    var newarr = [];

    function flattenArray(arg) {
        if (!Array.isArray(arg)) {
            newarr.push(arg);
        } else {
            for (var a in arg) {
                console.log("a:" + a);
                console.log("arg[a]:" + arg[a]);
                flattenArray(arg[a]);
            }
        }
    }

    for(var i = 0; i < len; i++)
    {
        flattenArray(flattened[i]);
    }

    return newarr;
}

steamroller([1, [2], [3, [[4]]]]);