/*
Where art thou http://www.freecodecamp.com/challenges/where-art-thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Object.hasOwnProperty() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Object.keys() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

function where(collection, source) {
    var sourceKeys = Object.keys(source);
    //return sourceKeys;

    var result = collection.filter(function(val){
        for(var i = 0; i < sourceKeys.length; i++)
        {
            if(!val.hasOwnProperty(sourceKeys[i]) || val[sourceKeys[i]] !== source[sourceKeys[i]])
            {
                return false;
            }
        }
        return true;
    });

    return result;
}
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });