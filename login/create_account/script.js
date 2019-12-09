$(function() {
    const $submit = $('#submit');

    for (var i = 0; i < stores.features.length; i++) {
        var currentFeature = stores.features[i];
        var name = currentFeature.properties.name;
        var select = $('#select');
        console.log(name);
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
        }).then(response => {
            console.log(response.data);
            window.location.replace('../');
        }).catch(error => {
            console.log(error);
            const msg = $('#message');
            msg.html(error);
        });


    });
    

});