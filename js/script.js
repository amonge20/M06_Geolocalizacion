var map = L.map('map').setView([41.377818, 2.185593], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);

    function printList(meteorites) {    
        fetch("js/data/earthMeteorites.json")
        .then((response) => response.json())
        .then((data) => {
            earthMeteoritesData = data;
        });
        var meteoritesList = document.getElementById('meteorits-list');
        meteorites.forEach((meteorite, index) => {
            var button = document.createElement('button');
            button.textContent = 'Meteorit ' + (index + 1);
            button.addEventListener('click', function() {
                map.setView([parseFloat(meteorite.reclat), parseFloat(meteorite.reclong)], 5); // Centra el mapa en la nueva ubicación del marcador con un zoom de 5.
            });
            meteoritesList.appendChild(button);
        });
    }
