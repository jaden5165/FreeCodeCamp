$(document).ready(function () {

    //    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    //        console.log(data);
    //    });

    var users = ["OgamingSC2", "ESL_SC2", "freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404"];

    $.each(users, function (index, value) {

        var streamStatus = "";
        var logo = "";
        var game = "";
        var description = "";
        var url = "";

        var streamHttp = "https://api.twitch.tv/kraken/streams/" + value + "?callback=?";
        //console.log(streamHttp);
        $.getJSON(streamHttp, function (data) {
            var stream = data.stream; 
            if(stream === null)
            {
                streamStatus = "Offline";
            }
            else if(stream === undefined)
            {
                streamStatus = "Account closed"
            }
            else
            {
                streamStatus = "Online";
            }
        });

        var channelsHttp = "https://api.twitch.tv/kraken/channels/" + value + "?callback=?";
        $.getJSON(channelsHttp, function (data) {
            var channel = data;
            logo = channel.logo || "http://www.iconarchive.com/download/i65076/double-j-design/ravenna-3d/Error.ico";
            game = channel.game;
            description = channel.status;
            url = channel.url;
            //console.log(channel);

            if(streamStatus === "Online")
            {
                var html = '<div class="list-group text-center on"><a href="' + url + '" target="_blank" class="list-group-item online"><img src="' + 
                    logo + '" alt="logo" class="img-circle pull-left"><h4 class="list-group-item-heading">' + 
                    value + '</h4><h4>Status:' +  streamStatus + '</h4><p class="list-group-item-text">' + game + '</p><p class="list-group-item-text">' +
                    description + '</p></a></div>';
                $('#allcard').prepend(html);
            }
            else if(streamStatus === "Offline")
            {
                var html = '<div class="list-group text-center off"><a href="' + url + '" target="_blank" class="list-group-item offline"><img src="' + 
                    logo + '" alt="logo" class="img-circle pull-left"><h4 class="list-group-item-heading">' + 
                    value + '</h4><h4>Status:' +  streamStatus + '</h4><p class="list-group-item-text">' + game + '</p><p class="list-group-item-text">' +
                    description + '</p></a></div>';
                $('#allcard').append(html);
            }
            else if(streamStatus === "Account closed")
            {
                var html = '<div class="list-group text-center gg"><a href="' + url + '" target="_blank" class="list-group-item deactivate"><img src="' + 
                    logo + '" alt="logo" class="img-circle pull-left"><h4 class="list-group-item-heading">' + 
                    value + '</h4><h4>Status:' +  streamStatus + '</h4><p class="list-group-item-text">' + game + '</p><p class="list-group-item-text">' +
                    description + '</p></a></div>';
                $('#allcard').append(html);
            }
        });
    });

    $('button').click(function () {
        var val  = $(this).attr('id');
        //        console.log(val);

        if(val === "all")
        {
            $(".on,.off,.gg").removeClass("hidden");
        }
        else if(val === "online")
        {
            //            console.log("ON");

            $(".on").removeClass("hidden");
            $(".off,.gg").addClass("hidden");

        }
        else if(val === "offline")
        {
            $(".off,.gg").removeClass("hidden");
            $(".on").addClass("hidden");
        }
    });
});