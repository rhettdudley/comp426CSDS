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
/*
    $form.submit(function(e) {

        $message.html('');

        const name;
        const password;

        const data = $form.serializeArray().reduce((o, x) => {
            name = x.name;
            password = x.value;
            o[x.name] = x.value;
            return o;
        }, {});

        $.ajax({
            url: 'http://localhost:3000' + x.name,
            type: 'POST',
            data,
            xhrFields: {
                withCredentials: true,
            },
        }).then(() => {
            $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
            //window.location.replace("http://localhost:3000");
        }).catch(() => {
            $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
        });
    });

*/
});