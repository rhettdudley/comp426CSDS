$(function() {
    const $login = $('#login');
    $login.on('click', () => {
        window.location.replace("http://localhost:3000/login");
    })
});