/*
Convert HTML Entities http://www.freecodecamp.com/challenges/convert-html-entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
HTML Entities http://dev.w3.org/html5/html-author/charref
*/

function convert(str) {
    // &colon;&rpar;
    var ent = {
        "&":"&amp;", 
        "<":"&lt;", 
        ">":"&gt;",
        '"':"&quot;",
        "'": "&apos;"
    };

    var replace = "";
    var amp = str.match(/&/);
    var ltgt = str.match(/<>/);
    var lt = str.match(/</);
    var gt = str.match(/>/);
    var quote = str.match(/"/);
    var apos = str.match(/'/);

    if(str.match(/&/))
    {
        replace = str.replace(/&/g, ent[amp]);
    }
    else if(str.match(/<>/))
    {
        replace = str.replace(/<>/g, ent[lt]+ent[gt]);
    }
    else if(str.match(/</))
    {
        replace = str.replace(/</g, ent[lt]);
    }
    else if(str.match(/>/))
    {
        replace = str.replace(/>/g, ent[gt]);
    }
    else if(str.match(/"/))
    {
        replace = str.replace(/"/g, ent[quote]);  
    }
    else if(str.match(/'/))
    {
        replace = str.replace(/'/g, ent[apos]);
    }
    else
    {
        return str;
    }
    //return quote;

    //return ent[check];
    //var replace = str.replace(/&/, ent[check]);
    return replace;
}

convert('Stuff in "quotation marks"');