/*
Search and Replace http://www.freecodecamp.com/challenges/search-and-replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice()
String.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Array.join()
*/

function myReplace(str, before, after) {
    var newstr = str.split(' ');
    var index = newstr.indexOf(before);
    var newr;
    if(index !== -1)
    {
        if(before[0] === before[0].toUpperCase())
        {
            var temp = after[0].toUpperCase();
            newr = after.split("");
            newr[0] = temp;
            newstr.splice(index,1, newr.join(""));
            //return newr.join("");
            return newstr.join(" ");
        }
        newstr.splice(index,1, after);
        newstr = newstr.join(" ");
        return newstr;
    }
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");