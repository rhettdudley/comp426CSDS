$(function() {
    const $form = $('#login-form');
    const $message = $('#message');

    const $login_button = $('#login_button');
    
    $login_button.on('click', async () => {

        let $username = $('#username');
        let $password = $('#password');

        const r = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/login',
            data: {
                "name": $username.val(),
                "pass": $password.val(),
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    });



});