


$(async function() {
    const $submit = $('#submit');
    console.log(localStorage.getItem('jwt'));
    
    for (var i = 0; i < stores.features.length; i++) {
        var currentFeature = stores.features[i];
        var name = currentFeature.properties.name;
        var select = $('#select');
        select.append('<option value='+ name + '>' + name + '</option>');
    } 

    $submit.on('click', async () => {

        let $first = $('#first');
        let $last = $('#last');
        let $username = $('#username');
        let $password = $('#password');
        var select = $('#select');

        const r = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                "name": $username.val(),
                "pass": $password.val(),
                "data": {
                    "firstname": $first.val(),
                    'lastname': $last.val(),
                    'favbar': select.val(),
                }
            }
        }).then( async response => {
            let username = $('#username').val();
            let password = $('#password').val();
            await login(username, password);
            await postBar(select.val(), localStorage.getItem('jwt'));
            console.log(response);
            window.location.replace('../../');
        }).catch(error => {
            console.log(error);
            const msg = $('#message');
            msg.html(error);
        });


    });


});


async function login(username, password) {
    const r = await axios({
        method: 'POST',
        url: 'http://localhost:3000/account/login',
        data: {
            "name": username,
            "pass": password,
        }
    }).then( async response => {
        const g = await axios({
            method: 'get',
            url: 'http://localhost:3000/account/status',
            headers: {
                authorization: 'Bearer ' + response.data.jwt,
            }
        }).then( response1 => {
            localStorage.setItem('jwt', response.data.jwt);
        }).catch(error => {
            console.log(error);
        })
    }).catch(error => {
        console.log(error);
        const msg = $('#message');
        msg.html(error);
    });
}


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