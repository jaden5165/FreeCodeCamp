/*
Mutations http://www.freecodecamp.com/challenges/mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/

function mutation(arr) {
    var temp = arr[0];
    if(arr[0].length > arr[1].length)
    {
        arr[0] = arr[1];
        arr[1] = temp;
    }
    arr[0] = arr[0].toLowerCase();
    console.log(arr[0]);
    arr[1] = arr[1].toLowerCase();
    //return arr[1];
    for(var i = 0; i < arr[0].length; i++)
    {
        if(arr[1].indexOf(arr[0][i]) == -1)
        {
            //return arr[0][i];
            return false;
        }
    }
    return true;
}

mutation(["hello", "Hello"]);
