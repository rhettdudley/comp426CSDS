//Remove headers line for Public route, but keep for Private


// Read

async function getUserBar() {
    const jwt = localStorage.getItem('jwt');
      //console.log(jwt);
      axios.get("http://localhost:3000/user/favbar",
        {headers: { Authorization: `Bearer ` + jwt }
      })
      .then(res => {
        console.log(res);
        var favbar = $('#favoritebar');
        favbar.html('<h2 class="subtitle is-5" id = "favoritebar">'+ 'Your favorite bar is: ' + res.data.result + '</h2>');
        
      })
      .catch(err => console.log(err));
      
  }


  //Create

  async function postBar(bar, jwt) {
    console.log(jwt);
    console.log(bar);
    axios
    .post("http://localhost:3000/user/favbar", {
      data: bar},
      {headers: { Authorization: `Bearer ` + jwt }
    },)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
  }

  //Update

  async function postBar(bar, jwt) {
    console.log(jwt);
    console.log(bar);
    axios
    .post("http://localhost:3000/user/favbar", {
      data: bar},
      {headers: { Authorization: `Bearer ` + jwt }
    },)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
}

//Destroy

async function removeBar(jwt) {
    axios
    .delete("http://localhost:3000/user/favbar",
      {headers: { Authorization: `Bearer ` + jwt }
    },)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
}