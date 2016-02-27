/*
Boo who http://www.freecodecamp.com/challenges/boo-who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects
*/

function boo(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    var x = typeof(bool);
    return x === 'boolean';
}

boo([1, 2, 3]);
