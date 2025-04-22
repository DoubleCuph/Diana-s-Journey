document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = "admin-login.html";
    }

    // Carica il testo salvato
    document.getElementById('modifica-creature').innerHTML = localStorage.getItem('creatureContent') || 
    "<p>Questa è la sezione delle creature! Clicca qui per modificarla.</p>";

    // Salva le modifiche quando si clicca il pulsante
    document.getElementById('save-content').addEventListener('click', function() {
        let nuovoTesto = document.getElementById('modifica-creature').innerHTML;
        localStorage.setItem('creatureContent', nuovoTesto);
        alert("Modifiche salvate!");
    });

    // Logout
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = "../index.html";
    });
});