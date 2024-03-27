// Loading stuff
var map;
var geoJsonLayer;
var languages_data;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 20,
            lng: 0
        }
    });

    d3.csv("../languages_by_region.csv", function(data) {

        languages_data = {};
        data.forEach(function(d) {
            languages_data[d["Country/Region"]] = d;
        });
    });

    d3.json("countries.geojson", function(err, geojson) { 

        // Load geoJSON
        geoJsonLayer = new google.maps.Data();
        geoJsonLayer.addGeoJson(geojson, {
            idPropertyName: 'ADMIN'
        });
        geoJsonLayer.setMap(map);
        geoJsonLayer.setStyle(function(feature) {
            var color = 'black';
            if (feature.getProperty('isColorful')) {
                color = feature.getProperty('color');
            }
            return {
                fillColor: color,
                strokeColor: color,
                strokeWeight: 1
            };
        });

        // Set click event for infowindow
        var infowindow = new google.maps.InfoWindow();
        geoJsonLayer.addListener('click', function(event) {
            var name = event.feature.getProperty('ADMIN');

            var countryData = languages_data[name];

            var minority = eval(countryData["Minority Language"]);
            var national = eval(countryData["National Language"]);
            var official = eval(countryData["Official Language"]);
            var regional = eval(countryData["Regional Language"]);
            var widely_spoken = eval(countryData["Widely Spoken"]);


            var myHTMLss = '<table>' +
                '<tr><td>Name:</td><td>' + name + '</td></tr>' + 
                '<tr><td>National Language:</td><td>' + national + '</td></tr>' +
                '<tr><td>Official Language:</td><td>' + official + '</td></tr>' +
                '<tr><td>Minority Language:</td><td>' + minority + '</td></tr>' +
                '<tr><td>Regional Language:</td><td>' + regional + '</td></tr>' +
                '<tr><td>Widely Spoken:</td><td>' + widely_spoken + '</td></tr>' +
                '</table>';
            infowindow.setContent(myHTMLss);
            infowindow.setPosition(event.latLng);
            infowindow.open(map);
            // console.log(languages_data);
            console.log(languages_data[name]);
        });



    });

}




window.initMap = initMap;
