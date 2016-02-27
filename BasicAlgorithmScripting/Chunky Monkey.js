/*
Chunky Monkey http://www.freecodecamp.com/challenges/chunky-monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

function chunk(arr, size) {
    // Break it up.
    var check = 0;
    var i = 0;
    var temp = [];

    var newarr = [];
    while(i < arr.length)
    {
        if(check > size-1)
        {
            temp.push(newarr);
            newarr =[]; 
            check = 0;
        }
        newarr.push(arr[i]);
        check++;
        i++;
    }
    temp.push(newarr);
    //    }
    return temp;
}

chunk(["a", "b", "c", "d"], 2);
