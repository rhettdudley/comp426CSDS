$(function() {
    const $submit = $('#submit');
    $submit.on('click', async () => {

        let $first = $('#first');
        let $last = $('#last');
        let $username = $('#username');
        let $password = $('#password');

        console.log($first.val());

        const r = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                "name": $username.val(),
                "pass": $password.val(),
                "data": {
                    "firstname": $first.val(),
                    'lastname': $last.val(),
                    'favbar': 'Bobs',
                }
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });


    });
    

});