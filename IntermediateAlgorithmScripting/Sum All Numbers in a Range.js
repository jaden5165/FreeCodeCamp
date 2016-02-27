/*
Sum All Numbers in a Range http://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Math.min() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Array.reduce() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/

function sumAll(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var result = 0;
    while(min <= max)
    {
        result = result + min;
        min++;
    }
    return result;
}

sumAll([1, 4]);
