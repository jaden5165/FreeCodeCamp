/*
Find the Longest Word in a String  http://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

function findLongestWord(str) {
    var tstr = [];
    tstr = str.split(" ");
    var max = 0;
    for(var i = 0; i < tstr.length; i++)
    {
        if(tstr[i].length > max)
        {
            max = tstr[i].length;
        }
    }
    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
