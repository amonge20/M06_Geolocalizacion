//Agafa el JSON de meteorits
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    var barcelonaCoords = [41.3851, 2.1734];
    var map = L.map('map').setView(barcelonaCoords, 2);
    //Afegira la llibreria de leaflet
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    //Es afegira l'icona dela ubicació de Barcelona
    var barcelonaIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    //Coordenades de Barcelona, Glories
    L.marker(barcelonaCoords, {icon: barcelonaIcon}).addTo(map).bindPopup('Barcelona, Glories');
    //Recopilara tots els meteorits i ho convertira en icona
    data.forEach(function(meteorito) {
      var meteoritoIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      //Marca per els meteorits
      var marker = L.marker([meteorito.reclat, meteorito.reclong], {icon: meteoritoIcon}).addTo(map);
      
      var popupContent = "<b>Name:</b> " + meteorito.name + "<br>" +
                         "<b>ID:</b> " + meteorito.id + "<br>" +
                         "<b>Nametype:</b> " + meteorito.nametype + "<br>" +
                         "<b>Mass:</b> " + meteorito.mass + "<br>" +
                         "<b>Fall:</b> " + meteorito.fall + "<br>" +
                         "<b>Year:</b> " + meteorito.year + "<br>" +
                         "<b>Reclat:</b> " + meteorito.reclat + "<br>" +
                         "<b>Reclong:</b> " + meteorito.reclong + "<br>" +
                         "<b>Geolocation:</b> " + JSON.stringify(meteorito.geolocation);

      marker.bindPopup(popupContent); 
    });
  });
