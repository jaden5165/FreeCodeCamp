/*
Sum All Primes http://www.freecodecamp.com/challenges/sum-all-primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Array.push()
*/

function sumPrimes(num)
{
    var nonPrime = true;
    var sum = 0;

    function checkPrime(temp)
    {
        for(var j = 2; j < temp; j++)
        {
            if(!(temp % j))
            {
                return false;
            }
        }
        return true;
    }

    for(var i = 2; i <= num; i++)
    {
        nonPrime = checkPrime(i);
        if(nonPrime)
            sum = sum + i;
    }

    return sum;

}

sumPrimes(10);
