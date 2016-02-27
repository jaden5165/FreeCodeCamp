/*
http://www.freecodecamp.com/challenges/roman-numeral-converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals http://www.mathsisfun.com/roman-numerals.html
Array.splice()
Array.indexOf()
Array.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

function convert(num) {
    var romanNumeral = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var roman2 = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var roman3 = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var roman4 = ["M"];
    var strnum = "";
    if(num >= 0 && num < 10)
    {
        return romanNumeral[num-1];
    }
    else if(num >=10 && num < 100) //2 digit
    {
        var temp = "";
        for(var i = 0; i < 2; i++)
        {

            strnum = num.toString();
            var first = parseInt(strnum[i]);
            if(i === 0)
                temp += roman2[first - 1];
            else
                temp += romanNumeral[first-1];
        }
        return temp;
    }
    else if(num >= 100 && num < 1000)
    {
        var temp = "";
        for(var i = 0; i < 3; i++)
        {

            strnum = num.toString();
            var first = parseInt(strnum[i]);
            if(i === 0)
            {
                if(first - 1 >= 0)
                    temp += roman3[first - 1];              
            }
            else if(i == 1)
            {
                if(first - 1 >= 0)
                    temp += roman2[first-1];
            }
            else
            {
                if(first - 1 >= 0)               
                    temp += romanNumeral[first-1];              
            }
        }
        return temp;
    }
    else if(num >= 1000 && num < 4000)
    {
        var temp = "";
        for(var k = 0; k < 4; k++)
        {

            strnum = num.toString();
            var first = parseInt(strnum[k]);

            if(k == 0)
            {
                if(first - 1 >= 0)
                {
                    var test = roman4[0];   
                    for(var i = 0; i < first; i++)
                    {
                        temp += test;
                    }

                }
            }
            else if(k == 1)
            {
                if(first - 1 >= 0)
                    temp += roman3[first-1];
            }
            else if(k == 2)
            {
                if(first - 1 >= 0)               
                    temp += roman2[first-1];   
            }
            else
            {
                if(first - 1 >= 0)               
                    temp += romanNumeral[first-1];  
            }
        }
        return temp;
    }

}

convert(36);
