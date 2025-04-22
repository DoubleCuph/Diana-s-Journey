document.querySelector('.menu-toggle').addEventListener('click', function() {
    let menu = document.querySelector('.menu');
    menu.style.left = (menu.style.left === '-250px') ? '0px' : '-250px';
});
