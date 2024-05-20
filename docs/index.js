// Loading stuff
var map;
var geoJsonLayer;
var languages_data;
// var infowindow;

function initMap() {

    var mapStyle = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 20,
            lng: 0
        }, 
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        }, 
        styles: mapStyle,
    });


    // map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 3,
    //     center: {
    //         lat: 20,
    //         lng: 0
    //     }
    // });

    d3.csv("master_merge.csv", function(data) { 


        // Safe, Vulnerable, Definitely Endangered, Severely Endangered, Critically endangered, Extinct

        var infowindow = new google.maps.InfoWindow();

        data.forEach(function(d) {

            //color of marker based on degree of endangerment
            var color = 'black';

            if (d['aes_status'] == 'Vulnerable') {

                color = 'yellow';
            } else if (d['Degree of endangerment'] == 'Definitely endangered') {
                    
                    color = 'orange';
            }

            var colors = {
                "not endangered": "green",
                "threatened": "yellow",
                "shifting": "orange",
                "moribund": "red",
                "nearly extinct": "purple",
                "extinct": "black"
            }

            var sizes = {
                "not endangered": 5,
                "threatened": 10,
                "shifting": 15,
                "moribund": 20,
                "nearly extinct": 25,
                "extinct": 30
            }


            //circular marker


            var marker = new google.maps.Marker({

                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: sizes[d['aes_status']],
                    fillColor: colors[d['aes_status']],
                    fillOpacity: 0.5,
                    strokeColor: colors[d['aes_status']],
                    strokeWeight: 2
                },

            
                position: { lat: parseFloat(d['latitude']), lng: parseFloat(d['longitude']) },
                map: map,
                title: d['name']
            });

            //Add click event to open infowindow on marker
            
            var myHTMLss = '<table>' +
                '<tr><td>Name:</td><td><a target="_blank" href="'+d['Wikipedia_Url']+'">'+ d['name'] + '</a></td></tr>' +
                '<tr><td>Number of speakers:</td><td>' + d['speakers'] + '</td></tr>' +
                '<tr><td>Degree of endangerment:</td><td>' + d['Degree of endangerment'] + '</td></tr>' +
                '<tr><td>Family:</td><td>' + d['family'] + '</td></tr>' +
                '<tr><td>Dialects:</td><td>' + d['dialects'] + '</td></tr>' +
                '<tr><td>Macro Area:</td><td>' + d['macroarea'] + '</td></tr>'+
                '<tr><td>Regions:</td><td>' + d['regions'] + '</td></tr>' +
                '<tr><td>Glottocode:</td><td> <a target="_blank" href="https://glottolog.org/resource/languoid/id/' + d['glottocode'] + '">'+ d['glottocode']+'</a></td></tr>' +
                '<tr><td>ISO Code:</td><td> <a target="_blank" href="https://iso639-3.sil.org/about/' + d['iso6393'] + '">'+ d['iso6393']+'</a></td></tr>' +
                '</table>';
            
            marker.addListener('click', function(event) {

                console.log(event);
                infowindow.setContent(myHTMLss);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);

            });

        });


    });

}




window.initMap = initMap;
