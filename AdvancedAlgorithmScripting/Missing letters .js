/*
Missing letters http://www.freecodecamp.com/challenges/missing-letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

*/

function fearNotLetter(str) {
    var charCode = [];
    for(var i = 0; i < str.length; i++)
    {
        charCode.push(str.charCodeAt(i));
    }

    var j = 0;
    var first = charCode[0];
    var missarr = [];
    //return (charCode[j] );
    //return (charCode[charCode.length-1])
    while(charCode[j] <= charCode[charCode.length-1] )
    {
        if(first == charCode[j])
        {
            j++;
            first++;
        }
        else
        {
            missarr.push(first);
            first++;
        }
    }
    var result = "";
    //return missarr; //[97,98,99,101]
    for(var k = 0; k < missarr.length; k++)
    {
        result += String.fromCharCode(missarr[k]);
    }
    if(missarr.length === 0)
        return undefined;
    else
        return result;
}

fearNotLetter("abcdefghjklmno");
