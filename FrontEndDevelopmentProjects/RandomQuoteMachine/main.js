$( document ).ready(function() {

    var author = "";
    var content = "";
    $('#getQuote').on('click', function(e) {
        e.preventDefault();
        $.ajax( {
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            //            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=filter[posts_per_page]=1',
            success: function(data) {
                var post = data.shift(); // The data is an array of posts. Grab the first one.
                
                author = post.title;
                content = post.content;
                
                var element = $(content);
                element.find("a").remove();
                content = element.html();
                
                console.log(author);
                console.log(content);
                
                $('#quote-title').text(post.title);
                $('#quote-content').html(post.content);

                // If the Source is available, use it. Otherwise hide it.
                if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                    console.log("come in");
                    console.log(post.custom_meta.Source);
                    $('#quote-source').html(post.custom_meta.Source);
                    $("#quote-source > a").attr('target','_blank');
                } else {
                    $('#quote-source').text('');
                }
            },
            cache: false
        });
    });


    $(function() {
        $("#getQuote").trigger("click");
        var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $(".randomColor").css("background-color", randomColorChange);
    });

    setInterval(function() {
        $("#getQuote").trigger('click');
    
        var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $(".randomColor").css("background-color", randomColorChange);
    }, 20000);            

    $('#tweet-quote').on('click', function() {
         window.open('https://twitter.com/intent/tweet?text=" ' + content + '" ' + author + '&via=freeCodeCamp-jaden5165 ' + '&hashtags=randomQuote');
    });
});

