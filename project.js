// add code here

mapboxgl.accessToken = 'pk.eyJ1Ijoic21hcnRtYXBzIiwiYSI6ImNqejMzOGZmZzAzNzczbnA3bTFkNzBkcDUifQ.UYY7_7PH78TwUJyiieGiDg';

// This adds the map to page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL2
  style: 'mapbox://styles/mapbox/light-v10',
  // initial position in [lon, lat] format
  center: [-79.055780, 35.913142],
  // initial zoom
  zoom: 15
});

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'beer-15',
      'icon-allow-overlap': true,
    }
  });
});