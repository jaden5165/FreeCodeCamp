/*
Smallest Common Multiple http://www.freecodecamp.com/challenges/smallest-common-multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple https://www.mathsisfun.com/least-common-multiple.html
*/

function smallestCommons(arr) {

    //find max
    var max = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }

    //find min
    var min = arr[0];
    for(var j = 1; j < arr.length; j++)
    {
        if(arr[j] < min)
            min = arr[j];
    }

    //create range
    var rangearr = [];
    for(var k = min; k <= max; k++)
    {
        rangearr.push(k);
    }

    //Find evenly divisible result
    var number = 1;
    var result = true;

    function isDivisible(number) {
        for(var a = 0; a < rangearr.length; a++)
        {
            if(number % rangearr[a])
            {
                return true; //non divisible number
            }

        }
        return false; //divisible number
    }

    while(result)
    {
        result = isDivisible(number);
        if(result)
            number++;
    }

    return number;
}


smallestCommons([5,1]);
