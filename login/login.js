$(function() {
    const $form = $('#login-form');
    const $message = $('#message');

    const $account = $('#create_account');
    $account.on('click', () => {
        window.location.replace("http://localhost:3000/login/create_account");
    })
    const $home = $('#back_home');
    $home.on('click', () => {
        window.location.replace("http://localhost:3000/");
    })

    const $login = ('#login');

    $login.on('click', () => {

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