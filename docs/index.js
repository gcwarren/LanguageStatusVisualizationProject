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

    d3.csv("../merged.csv", function(data) { 


        // Safe, Vulnerable, Definitely Endangered, Severely Endangered, Critically endangered, Extinct

        var infowindow = new google.maps.InfoWindow();

        data.forEach(function(d) {

            //color of marker based on degree of endangerment
            var color = 'black';

            if (d['Degree of endangerment'] == 'Vulnerable') {

                color = 'yellow';
            } else if (d['Degree of endangerment'] == 'Definitely endangered') {
                    
                    color = 'orange';
            }

            var colors = {
                "Safe": "green",
                "Vulnerable": "yellow",
                "Definitely endangered": "orange",
                "Severely endangered": "red",
                "Critically endangered": "purple",
                "Extinct": "black"
            }

            var sizes = {
                "Safe": 5,
                "Vulnerable": 10,
                "Definitely endangered": 15,
                "Severely endangered": 20,
                "Critically endangered": 25,
                "Extinct": 30
            }


            //circular marker


            var marker = new google.maps.Marker({

                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: sizes[d['Degree of endangerment']],
                    fillColor: colors[d['Degree of endangerment']],
                    fillOpacity: 0.5,
                    strokeColor: 'black',
                    strokeWeight: 0
                },

            
                position: { lat: parseFloat(d['latitude']), lng: parseFloat(d['longitude']) },
                map: map,
                title: 'Hello World!'
            });

            //Add click event to open infowindow on marker
            
            var myHTMLss = '<table>' +
                '<tr><td>Name:</td><td>' + d['Name in English'] + '</td></tr>' +
                '<tr><td>Number of speakers:</td><td>' + d['Number of speakers'] + '</td></tr>' +
                '<tr><td>Degree of endangerment:</td><td>' + d['Degree of endangerment'] + '</td></tr>' +
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
