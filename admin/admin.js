document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Dati di accesso base (da migliorare con database per sicurezza)
    if (username === "admin" && password === "password123") {
        localStorage.setItem('adminLoggedIn', 'true'); // Memorizza lo stato di login
        window.location.href = "admin-panel.html"; // Reindirizza al pannello amministrativo
    } else {
        alert("Credenziali errate!");
    }
});