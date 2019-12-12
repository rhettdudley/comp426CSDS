//import { addBar } from "./public";

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

  buildLocationList(stores);
});

async function buildLocationList(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    //addBar(data.features[i]);
    // Shorten data.feature.properties to `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    
    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    if (prop.name) {
      link.innerHTML = prop.name;
    } else {
      link.innerHTML = prop.address;
    }
    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details1 = listing.appendChild(document.createElement('div'));
    if (prop.name == favebar) {
     details1.innerHTML += '<p>&#9733 YOUR FAVE! &#9733;</p>';
    };
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.address;
    
    if (prop.phone) {
      details.innerHTML += ' · ' + prop.phoneFormatted;
    }
    /*
    var favDiv = listing.appendChild(document.createElement('div'));
    favDiv.display = 'inline-block';
    var favoriteIcon = favDiv.appendChild(document.createElement('a'));
    favoriteIcon.href = '#buttonLink' + i;
    favoriteIcon.className = 'title';
    favoriteIcon.dataPosition = i;
    favoriteIcon.innerHTML = '<i class="fas fa-arrow-circle-up"></i>';
    favoriteIcon.className = 'icon has-text-info';
    var favCount = favDiv.appendChild(document.createElement('span'));
    favCount.dataPosition = i;
    favCount.id = 'barID' + i;
    await getLikeCount(i);

    favoriteIcon.addEventListener('click', async function(e) {
      var clickedButton = data.features[this.dataPosition];
      var i = this.dataPosition;
      await increaseLikeCount(i);
      await getLikeCount(i);

    });

    // favDiv.innerHTML = await getLikeCount(i);
    // favDiv.innerHTML = 'Like Count: 0'
    */
    // Add an event listener for the links in the sidebar listing 
    link.addEventListener('click', function(e) {
    // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];
      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }

  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 17
    });
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();
  
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
        '<h4>' + currentFeature.properties.phoneFormatted + '</h4>')
      .addTo(map);
  }

  // This will let us use the .remove() function later on
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  map.on('click', function(e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
    if (features.length) {
      var clickedPoint = features[0];
      // 1. Fly to the point
      flyToStore(clickedPoint);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedPoint);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
      var selectedFeature = clickedPoint.properties.address;
  
      for (var i = 0; i < stores.features.length; i++) {
        if (stores.features[i].properties.address === selectedFeature) {
          selectedFeatureIndex = i;
        }
      }
      // Select the correct list item using the found index and add the active class
      var listing = document.getElementById('listing-' + selectedFeatureIndex);
      listing.classList.add('active');
    }
  });

} 

$(async function() {
    // const $form = $('#schedule');
    // $form.click(function(e) {
    //     e.preventDefault();
    //     window.location.replace("http://localhost:3000/schedule");
    // })
    const jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    const g = await axios({
        method: 'get',
        url: 'http://localhost:3000/account/status',
        headers: {
            authorization: 'Bearer ' + jwt,
        }
    }).then(async response => {
        //console.log(response.data.user.data);
        await getUserBar();
        var banner = $('#banner');
        banner.append('<a id = "Update" href = "update_bar/index.html">Update Favorite Bar</a>');
        var login = $('#login');
        var user = $('#user');
        var loggedin = '<a class = "navbar-item" id = "loggedin">User: ' + response.data.user.data.firstname + ' ' + response.data.user.data.lastname + '</a>';
        login.html('<a id = "login" class="navbar-item" href = "login/index.html">Logout</a>');
        user.html(loggedin);
    }).catch(error => {
        console.log(error);
    })
})

let favebar = "";
async function getUserBar() {
  const jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    axios.get("http://localhost:3000/user/favbar",
      {headers: { Authorization: `Bearer ` + jwt }
    })
    .then(res => {
      console.log(res);
      var favbar = $('#favoritebar');
   //   favbar.html('<h2 class="subtitle is-5" id = "favoritebar">'+ 'Your favorite bar is: ' + res.data.result + '</h2>');
      favebar = res.data.result;
    })
    .catch(err => console.log(err));
}

async function getLikeCount(id) {
    axios.get("http://localhost:3000/public/bars")
    .then(async res => {
      var thisBar = document.getElementById('barID' + id);
      thisBar.innerHTML = res.data.result[id].LikeCount;
    })
    .catch(err => console.log(err));
}

async function increaseLikeCount(id) {
  var goodURL = 'http://localhost:3000/public/bars/' + id;

  var currentLikeCount = 100;
  var test = await axios.get("http://localhost:3000/public/bars")
    .then(async res => {
    var thisBar = document.getElementById('barID' + id);
    currentLikeCount = res.data.result[id].LikeCount;
    res.data.result[id].LikeCount = 101;
    })
    .catch(err => console.log(err));

  
  /*
  console.log(currentLikeCount);
  newLikeCount = currentLikeCount + 1;
  const result = await axios({
    method: 'post',
    url: goodURL,
    // withCredentials: true,
    data: {
      LikeCount: newLikeCount
    },
  });
  */
}

 // <button id = "Update">Update Favorite Bar</button>
  //<button id = "update"></button>