$(document).ready(function(){
    var city = geoplugin_city(); //http://www.geoplugin.com/webservices/javascript
    console.log("city:" + city);

    var country = geoplugin_countryName();
    console.log("country:" + country);

    var temp;
    var celsius,fah = 0;
    $.ajax( {
        url: 'http://api.openweathermap.org/data/2.5/weather',
        //appid: "a7181b72fab0b2d0fb0c56480359ecd8",
        dataType: "jsonp",
        jsonCallback: 'jsonp',
        data: {
            q: city,
            lat: geoplugin_latitude(),
            lon: geoplugin_longitude(),
            appid: "a7181b72fab0b2d0fb0c56480359ecd8",
            units: "metric"
        },
        success: function(data) {
            temp = data.main.temp;
            celsius = temp;
            $('#city').text(data.name);
            $('#weather').html("<h2>" + data.weather[0].main + "</h2>");
            $('#degree').html("<h2>" + temp + "&#176C" + "</h2>");
            $('#pic').attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon +".png");
        },
        cache: false
    });

    $('#getCelsius').on('click', function(e) {
        e.preventDefault();

        if(celsius == temp)
        {
            //Do Nothing
        }
        else
        {
            celsius = temp - 273.15;
            temp = celsius;
            $('#degree').html("<h2>" + temp.toFixed(2) + "&#x2103;" + "</h2>");
        }

    });

    $('#getFah').on('click', function(e) {
        e.preventDefault();

        if(fah == temp)
        {
            //Do Nothing
        }
        else
        {
            fah = temp + 273.15;
            temp = fah;
            $('#degree').html("<h2>" + temp.toFixed(2) + "&#x2109;" + "</h2>");
        }

    });
    //alert("Welcome to our visitors from "+geoplugin_city()+", "+geoplugin_countryName()); 






    //    var geocoder;
    //
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    //    } 
    //    //Get the latitude and the longitude;
    //    function successFunction(position) {
    //        var lat = position.coords.latitude;
    //        var lng = position.coords.longitude;
    //        codeLatLng(lat, lng)
    //    }
    //
    //    function errorFunction(){
    //        alert("Geocoder failed");
    //    }
    //
    //    function initialize() {
    //        geocoder = new google.maps.Geocoder();
    //    }
    //
    //    function codeLatLng(lat, lng) {
    //
    //        var latlng = new google.maps.LatLng(lat, lng);
    //        geocoder.geocode({'latLng': latlng}, function(results, status) {
    //            if (status == google.maps.GeocoderStatus.OK) {
    //                console.log(results)
    //                if (results[1]) {
    //                    //formatted address
    //                    alert(results[0].formatted_address)
    //                    //find country name
    //                    for (var i=0; i<results[0].address_components.length; i++) {
    //                        for (var b=0;b<results[0].address_components[i].types.length;b++) {
    //
    //                            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
    //                            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
    //                                //this is the object you are looking for
    //                                city= results[0].address_components[i];
    //                                break;
    //                            }
    //                        }
    //                    }
    //                    //city data
    //                    alert(city.short_name + " " + city.long_name)
    //
    //
    //                } else {
    //                    alert("No results found");
    //                }
    //            } else {
    //                alert("Geocoder failed due to: " + status);
    //            }
    //        });
    //    }
    //    initialize();

});
