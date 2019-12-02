$(function() {
    const $login = $('#login');
    $login.on('click', () => {
        window.location.replace("http://localhost:3001/login");
    })
});