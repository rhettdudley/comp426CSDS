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

$(async function() {
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


    //const $autocomplete = $('#autoBox');
    var barsAC = [];
    for (i = 0; i < stores.features.length; i++) {
      var currentFeature = stores.features[i].properties.name;
      barsAC.push(currentFeature);
    }

    autocomplete(document.getElementById("autoBox"), barsAC);

    
    const jwt = localStorage.getItem('jwt');
    const g = await axios({
      method:'get',
      url:'http://localhost:3000/private',
      headers: {
        authorization: 'Bearer ' + jwt
      }
    }).then(async res => {
      console.log(res.data);
      var secret = $('#secretspecials');
      for (i = 0; i < res.data; i++) {

      }
      console.log(res.data.length)
      var html2 = '<h2 class="subtitle is-5 is-bold is-centered" id = "secretspecials">'+ 'User Secret Specials: ' + '<div>' + res.data.result + '</h2>';
      secret.html(html2);
      // var favbar = $('#favoritebar');
      // favbar.html('<h2 class="subtitle is-5" id = "favoritebar">'+ 'Your favorite bar is: ' + res.data.result + '</h2>');
      
    })
    .catch(err => console.log(err));
    //await getPrivateSpecials();
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

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  // debounce event listenes

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
     
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var textbox = $('#autobox')
const myHandler = (e) => {

}

function renderSendForm() {
  const postDiv = document.getElementById('post');
  const postButton = document.getElementById('post-button');
  $(postButton).replaceWith(renderSendSubmission());

  $("#cancelButton").on('click', handleCancel);
  $("#submitPost").on('click', handlePost);
}

function renderSendSubmission() {
  var forms = `<form id = "postForm">
        <textarea class="textarea is-info" name="textarea"
            rows="5" cols="20"
            minlength="1" maxlength="280">Let the people know</textarea>
        <button id="submitPost" type="button" class="button is-info">Post to feed</button>
        <button id="cancelButton" type="button" class="button is-info is-light">Cancel</button>
        </form>`;
    return forms;
};
/*
function handleCancel() {
  const postDiv = document.getElementById('post');
  $("#post").empty();
  postDiv.innerHTML = "<button class=\"button has-text-info\" onclick=\"renderSendForm()\" id=\"post-button\">Send to feed!</button>";
}
*/

document.getElementById("autoBox").addEventListener("keydown", debounced(500, autocomplete));
//const eHandler = $('#autobox')

function debounced(delay, fn) { 
  let timerID
  return function (...args) {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout (() => {
      fn(...args);
      timerID = null;
    }, delay);
  }
}

async function getPrivateSpecials() {
  const jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    axios.get("http://localhost:3000/private",
      {headers: { Authorization: `Bearer ` + jwt }
    })
    .then(res => {
      console.log(res);
      // var favbar = $('#favoritebar');
      // favbar.html('<h2 class="subtitle is-5" id = "favoritebar">'+ 'Your favorite bar is: ' + res.data.result + '</h2>');
      
    })
    .catch(err => console.log(err));
}


let Obj = {};
async function handlePost() {
  const postDiv = document.getElementById('post');
  let myForm;
  let myPost;
  myForm = $("#posttForm").serializeArray();

  $(myForm).each(function(i, field){
      Obj[field.name] = field.value;
  });

  myPost = Obj['textarea'];
  await sendPost(myPost);
  $(postDiv).empty();
  postDiv.innerHTML = "<button class=\"button has-text-info\" onclick=\"renderSendForm()\" id=\"post-button\">Send to feed!</button>";
}

const pubRoot = new axios.create({
  baseURL: "http://localhost:3000/public"
});


const handleCancel = function() {
  const postDiv = document.getElementById('post');
  $("#post").empty();
  postDiv.innerHTML = "<button class=\"button has-text-info\" onclick=\"renderSendForm()\" id=\"post-button\">Send to feed!</button>";
}

async function sendPost(post) {
  return await pubRoot.post(`/feed/`, {
    data: {post}}
  );
}


  /*
  console.log(post);
  const result = await axios({
      method: 'post',
      url: 'http://localhost:3000/public',
      withCredentials: true,
      data: {
        body: post
      },
  });
  console.log(result);
  return result;*/








