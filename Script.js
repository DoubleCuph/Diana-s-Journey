document.querySelector('.menu-toggle').addEventListener('click', function() {
    let menu = document.querySelector('.menu');
    menu.style.left = (menu.style.left === '-250px') ? '0px' : '-250px';
});
document.addEventListener('DOMContentLoaded', function() {
    let adminMenu = document.getElementById('admin-menu');
    
    // Controllo se l'utente è admin
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        adminMenu.style.display = 'block';
    }
});
