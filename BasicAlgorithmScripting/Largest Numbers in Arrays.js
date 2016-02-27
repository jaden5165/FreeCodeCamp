/*
Largest Numbers in Arrays http://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
*/

function largestOfFour(arr) {
    // You can do this!
    var largest = [];
    for(var i = 0; i < arr.length; i++)
    {
        var max = 0;
        for(var j = 0; j < arr[i].length; j++)
        {
            if(arr[i][j] > max)
                max = arr[i][j];
        }
        largest.push(max);
    }
    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
