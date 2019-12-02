buildLocationList(stores);

function buildLocationList(data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      // Shorten data.feature.properties to `prop` so we're not
      // writing this long form over and over again.
      var prop = currentFeature.properties;
      var spec = currentFeature.specials;
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
      var details = listing.appendChild(document.createElement('div'));
      if (spec.monday) {
        details.innerHTML = "Monday: " + spec.monday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.tuesday) {
        details.innerHTML = "Tuesday: " + spec.tuesday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.wednesday) {
        details.innerHTML = "Wednesday: " + spec.wednesday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.thursday) {
        details.innerHTML = "Thursday: " + spec.thursday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.friday) {
        details.innerHTML = "Friday: " + spec.friday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.saturday) {
        details.innerHTML = "Saturday: " + spec.saturday;
      }
      var details = listing.appendChild(document.createElement('div'));
      if (spec.sunday) {
        details.innerHTML = "Sunday: " + spec.sunday;
      }
  
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
}

$(function() {
    const $reset = $('#All');
    $reset.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationList(stores);
    })

    const $form = $('#Monday');
    $form.click(function(e) {
        e.preventDefault();
        document.getElementById("Monday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("monday", stores);
    })
    const $form2 = $('#Tuesday');
    $form2.click(function(e) {
        e.preventDefault();
        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("tuesday", stores);
    })
    const $form3 = $('#Wednesday');
    $form3.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("wednesday", stores);
    })
    const $form4 = $('#Thursday');
    $form4.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("thursday", stores);
    })
    const $form5 = $('#Friday');
    $form5.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("friday", stores);
    })
    const $form6 = $('#Saturday');
    $form6.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#BEBEBE";
        document.getElementById("Sunday").style.backgroundColor = "#FFFFFF";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("saturday", stores);
    })
    const $form7 = $('#Sunday');
    $form7.click(function(e) {
        e.preventDefault();

        document.getElementById("Monday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Tuesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Wednesday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Thursday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Friday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Saturday").style.backgroundColor = "#FFFFFF";
        document.getElementById("Sunday").style.backgroundColor = "#BEBEBE";

        document.getElementById("listings").innerHTML = "";
        buildLocationDay("sunday", stores);
    })

})

function buildLocationDay(day, data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      // Shorten data.feature.properties to `prop` so we're not
      // writing this long form over and over again.
      var prop = currentFeature.properties;
      var spec = currentFeature.specials;
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

      if (day == "monday") {
      if (spec.monday) {
      if (prop.name) {
        link.innerHTML = prop.name;
      } else {
        link.innerHTML = prop.address;
      }
        }
    }

    if (day == "tuesday") {
        if (spec.tuesday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }

      if (day == "wednesday") {
        if (spec.wednesday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }

      if (day == "thursday") {
        if (spec.thursday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }

      if (day == "friday") {
        if (spec.friday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }

      if (day == "saturday") {
        if (spec.saturday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }

      if (day == "sunday") {
        if (spec.sunday) {
        if (prop.name) {
          link.innerHTML = prop.name;
        } else {
          link.innerHTML = prop.address;
        }
          }
      }
      // Create a new div with the class 'details' for each store
      // and fill it with the city and phone number
      var details = listing.appendChild(document.createElement('div'));
      if (day == "monday") {
          if (spec.monday) {
        details.innerHTML = spec.monday;
          }
      }
      if (day == "tuesday") {
        if (spec.tuesday) {
      details.innerHTML = spec.tuesday;
        }
    }
    if (day == "wednesday") {
        if (spec.wednesday) {
      details.innerHTML = spec.wednesday;
        }
    }
    if (day == "thursday") {
        if (spec.thursday) {
      details.innerHTML = spec.thursday;
        }
    }
    if (day == "friday") {
        if (spec.friday) {
      details.innerHTML =  spec.friday;
        }
    }
    if (day == "saturday") {
        if (spec.saturday) {
      details.innerHTML =  spec.saturday;
        }
    }
    if (day == "sunday") {
        if (spec.sunday) {
      details.innerHTML = spec.sunday;
        }
    }
  
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
}