$(function() {
    const $form = $('#login-form');
    const $message = $('#message');

    const $account = $('#create_account');
    $account.on('click', () => {
        window.location.replace("http://localhost:3001/login/create_account");
    })
    const $home = $('#back_home');
    $home.on('click', () => {
        window.location.replace("http://localhost:3001/");
    })

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
        });

        r.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    });



});