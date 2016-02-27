/*
Pig Latin http://www.freecodecamp.com/challenges/pig-latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

function translate(str) {
    var strarr = str.split("");
    var noncon; 
    var firstcon;
    var push = 0;
    for(var i = 0; i < strarr.length; i++)
    {

        if(strarr[i] == "a" || strarr[i] == "e" || strarr[i] == "i" || strarr[i] == "o" || strarr[i] == "u")
        {
            if(i=== 0 && !push)
                firstcon = true;
            break;
        }
        else
        {
            noncon = strarr.shift();
            strarr.push(noncon);
            i--;
            push = 1;
        }
    }
    if(firstcon)
        return strarr.join("") + "way";
    else 
        return strarr.join("") + "ay";
}

translate("algorithm");
