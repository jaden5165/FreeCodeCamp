/*
Factorialize a Number http://www.freecodecamp.com/challenges/factorialize-a-number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
*/


function factorialize(num) {
    var result =1;

    while(num !==0)
    {
        result = result * num;
        --num;
        console.log(result);
    }
    return result;
}

factorialize(5);