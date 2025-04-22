document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Dati di esempio (in una versione avanzata, usa un database)
    if (username === "admin" && password === "password123") {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = "admin-panel.html";
    } else {
        alert("Credenziali errate!");
    }
});