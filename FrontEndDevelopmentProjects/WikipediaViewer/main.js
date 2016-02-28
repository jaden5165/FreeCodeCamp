$(document).ready(function(){

    $("input").on("keydown",function searchwiki(e) {

        $(".button").removeClass("hide");
        $( ".list-group" ).remove();

        if(e.keyCode == 13) {
            $.ajax( {
                //            url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&",
                url: "http://en.wikipedia.org/w/api.php",
                data: {
                    format: "json",
                    action: "query",
                    generator:"search",
                    //                gsrnamespace: 0,
                    //                gsrlimit: 10,
                    prop: "pageimages|extracts",
                    //                pilimit: "max",
                    exintro: 1,
                    explaintext: 1,
                    exsentences: 1,
                    exlimit: "max",
                    gsrsearch: $(this).val()
                },
                jsonCallback: 'jsonp',
                dataType: 'jsonp',
                type: 'GET',
                headers: { 'Api-User-Agent': 'Example/1.0'},
                success: function(data) {
                    // do something with data
                    console.log(data.query.pages);

                    $(".button").addClass("hide");
                    $(".card2").css("margin-top", "-70px");

                    var results = data.query.pages;

                    $.each( results, function( key, value ) {
                        var results = data.query.pages;
                        $.each(results, function (key, obj) {
                            console.log(obj.title);

                            var card = '<div class="list-group"><a target="_blank" href=http://en.wikipedia.org/?curid=' + 
                                obj.pageid + '" class="list-group-item"><h4 class="list-group-item-heading">' + 
                                obj.title + '</h4><p class="list-group-item-text">' + 
                                obj.extract + '</p></a></div>';

                            $("#card").append(card);
                        });
                    });

                }
            } );    
        }
    });


    //    $.ajax( {
    //        //            url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&",
    //        url: "http://en.wikipedia.org/w/api.php",
    //        data: {
    //            format: "json",
    //            action: "query",
    //            generator:"search",
    //            //                gsrnamespace: 0,
    //            //                gsrlimit: 10,
    //            prop: "pageimages|extracts",
    //            //                pilimit: "max",
    //            exintro: 1,
    //            explaintext: 1,
    //            exsentences: 1,
    //            exlimit: "max",
    //            gsrsearch: "Robert Kuok"//$(this).val()
    //        },
    //        jsonCallback: 'jsonp',
    //        dataType: 'jsonp',
    //        type: 'GET',
    //        headers: { 'Api-User-Agent': 'Example/1.0'},
    //        success: function(data) {
    //            console.log(data.query.pages);
    //            var results = data.query.pages;
    //            $.each(results, function (key, obj) {
    //                console.log(obj.title);
    //                var card = '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">...</p></a></div>';
    //                var card = '<div class="list-group"><a target="_blank" href=http://en.wikipedia.org/?curid=' + obj.pageid + '" class="list-group-item"><h4 class="list-group-item-heading">' + obj.title + '</h4><p class="list-group-item-text">' + obj.extract + '</p></a></div>';
    //                $("#card").append(card);
    //            });
    //            // do something with data
    //        }
    //    } );    


});
