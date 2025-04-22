document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.menu-toggle');
    let menu = document.querySelector('.menu');
    let adminMenu = document.getElementById('admin-menu');

    // Controllo che gli elementi esistano
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.style.left = (menu.style.left === '-250px') ? '0px' : '-250px';
        });
    }

    // Mostra il menu admin solo se l'utente è loggato
    if (adminMenu && localStorage.getItem('adminLoggedIn') === 'true') {
        adminMenu.style.display = 'block';
    }
});