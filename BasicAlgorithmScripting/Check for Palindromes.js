/*
Check for Palindromes http://www.freecodecamp.com/challenges/check-for-palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
String.toLowerCase() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
*/

function palindrome(str) {
    // Good luck!
    str = str.replace(/[\W+\_]/g, "");
    str = str.toLowerCase();
    //return str;
    if(str == str.split("").reverse().join(""))
    {
        return true;
    }
    else
    {
        return false;
    }

    //return true;
}



palindrome("0_0 (: /-\ :) 0-0");