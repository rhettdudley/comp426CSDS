$(function() {

    const $cancel = $('#cancel');
    $cancel.on('click', () => {
        window.location.replace("http://localhost:3000/login");
    })
});