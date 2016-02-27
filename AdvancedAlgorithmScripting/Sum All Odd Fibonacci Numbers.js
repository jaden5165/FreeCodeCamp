/*
Sum All Odd Fibonacci Numbers http://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
    //var fib = [0,1,1,2,3,5,8,13,21,34,55,89,144]
    var f0 = 0;
    var f1 = 1;
    var sum = 0;
    var fn = 0;
    //fn = fn-1 + fn-2
    //f2 = f1 + f0 = 1 + 1 = 2

    while(fn <= num)
    {
        fn = f0 + f1;
        console.log("fn:" + fn);
        if(f1 % 2)
        {
            if(fn == num)
                sum = sum + f1 + fn;
            else
                sum = sum + f1;
        }

        f0 = f1;
        f1 = fn;


    }
    //return f1;
    console.log("sum:" + sum);
    return sum;
}

sumFibs(4);