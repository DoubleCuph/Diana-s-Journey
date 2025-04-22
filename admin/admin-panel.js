// Controllo accesso admin
if (localStorage.getItem('adminLoggedIn') !== 'true') {
    window.location.href = "admin-login.html";
}

// Gestione Creature
document.getElementById('save-creature').addEventListener('click', function() {
    let creatureContent = document.getElementById('creature-data').value;
    localStorage.setItem('creatureContent', creatureContent);
    alert("Creature salvate!");
});

// Gestione Personaggi
document.getElementById('save-personaggi').addEventListener('click', function() {
    let personaggiContent = document.getElementById('personaggi-data').value;
    localStorage.setItem('personaggiContent', personaggiContent);
    alert("Personaggi salvati!");
});

// Caricare i dati salvati
document.getElementById('creature-data').value = localStorage.getItem('creatureContent') || "";
document.getElementById('personaggi-data').value = localStorage.getItem('personaggiContent') || "";

// Logout
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = "../index.html"; // Torna alla home
});