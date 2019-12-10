$(function() {
    const $form = $('#login-form');
    const $message = $('#message');
    localStorage.removeItem('jwt');

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
        }).then( async response1 => {
            console.log(response1.data.jwt);
            const g = await axios({
                method: 'get',
                url: 'http://localhost:3000/account/status',
                headers: {
                    authorization: 'Bearer ' + response1.data.jwt,
                }
            }).then( response => {
                localStorage.setItem('jwt', response1.data.jwt);
                console.log(response.data.user.data);
            }).catch(error => {
                console.log(error);
            })
            window.location.replace('../');
        }).catch(error => {
            console.log(error);
            const msg = $('#message');
            msg.html(error);
        });

    });



});