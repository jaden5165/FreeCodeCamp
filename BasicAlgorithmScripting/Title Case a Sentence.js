/*
Title Case a Sentence http://www.freecodecamp.com/challenges/title-case-a-sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
*/
function titleCase(str) {
    var test = str.split(" ");
    var newStr = [];
    for(var i = 0; i < test.length; i++)
    {
        var result = test[i].toLowerCase();
        console.log(typeof(result));
        var r = result.replace(/(^\w)/g, function(v) { return v.toUpperCase();});
        newStr.push(r);
    }
    return newStr.join(" ");
}

titleCase("I'm a little tea pot");