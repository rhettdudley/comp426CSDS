$(async function() {
    const $submit = $('#submit');
    const $cancel = $('#cancel');
    const $remove = $('#remove');
    console.log(localStorage.getItem('jwt'));
    
    for (var i = 0; i < stores.features.length; i++) {
        var currentFeature = stores.features[i];
        var name = currentFeature.properties.name;
        var select = $('#select');
        select.append('<option value="'+ name + '">' + name + '</option>');
    }

    $submit.on('click', async () => {
        postBar(select.val(), localStorage.getItem('jwt'));
        window.location.replace('../');
    })

    $cancel.on('click', async () => {
        window.location.replace('../');
    })

    $remove.on('click', async () => {
        await removeBar(localStorage.getItem('jwt'));
        window.location.replace('../');
    })

})


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

async function removeBar(jwt) {
    axios
    .delete("http://localhost:3000/user/favbar",
      {headers: { Authorization: `Bearer ` + jwt }
    },)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
}