/*
Caesars Cipher http://www.freecodecamp.com/challenges/caesars-cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
String.fromCharCode() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
*/

function rot13(str) { // LBH QVQ VG!
    var encodedStr = str.split("");
    var decodedStr = [];

    var ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                    "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

    for(var i = 0; i < encodedStr.length; i++)
    {
        if(ALPHABET.indexOf(encodedStr[i]) === -1)
            decodedStr.push(encodedStr[i]);
        else
        {
            for(var j = 0; j < ALPHABET.length; j++)
            {
                if(encodedStr[i] === ALPHABET[j])
                {
                    decodedStr.push(ALPHABET[j + 13]);
                }
            }
        }
    }
    return decodedStr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
