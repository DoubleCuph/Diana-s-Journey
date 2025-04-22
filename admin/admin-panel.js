// Controllo accesso
if (localStorage.getItem('adminLoggedIn') !== 'true') {
    window.location.href = "admin-login.html";
}

// Gestione dati
document.getElementById('save-data').addEventListener('click', function() {
    let data = document.getElementById('creature-data').value;
    localStorage.setItem('creatureContent', data);
    alert("Dati salvati!");
});

// Caricamento dati salvati
document.getElementById('creature-data').value = localStorage.getItem('creatureContent') || "";