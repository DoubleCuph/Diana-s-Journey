document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = "admin-login.html"; // Impedisce l'accesso non autorizzato
    }

    let creatureList = JSON.parse(localStorage.getItem('creatureContent')) || [];
    let personaggiList = JSON.parse(localStorage.getItem('personaggiContent')) || [];

    // Popola le liste nella schermata amministratore
    document.getElementById('creature-list').innerHTML = creatureList.map(creature =>
        `<li>${creature.nome} - ${creature.descrizione} (${creature.habitat})</li>`).join("");

    document.getElementById('personaggi-list').innerHTML = personaggiList.map(personaggi =>
        `<li>${personaggi.nome} - ${personaggi.role} - ${personaggi.descrizione}</li>`).join("");

    // Aggiungere nuove creature
    document.getElementById('add-creature').addEventListener('click', function() {
        let nome = document.getElementById('creature-name').value;
        let descrizione = document.getElementById('creature-desc').value;
        let habitat = document.getElementById('creature-habitat').value;

        if (nome && descrizione && habitat) {
            creatureList.push({ nome, descrizione, habitat });
            localStorage.setItem('creatureContent', JSON.stringify(creatureList));
            document.getElementById('creature-list').innerHTML += `<li>${nome} - ${descrizione} (${habitat})</li>`;
            alert("Creatura aggiunta!");
        } else {
            alert("Compila tutti i campi!");
        }
    });

    // Aggiungere nuovi personaggi
    document.getElementById('add-personaggi').addEventListener('click', function() {
        let nome = document.getElementById('personaggi-name').value;
        let role = document.getElementById('personaggi-role').value;
        let descrizione = document.getElementById('personaggi-desc').value;

        if (nome && role && descrizione) {
            personaggiList.push({ nome, role, descrizione });
            localStorage.setItem('personaggiContent', JSON.stringify(personaggiList));
            document.getElementById('personaggi-list').innerHTML += `<li>${nome} - ${role} - ${descrizione}</li>`;
            alert("Personaggio aggiunto!");
        } else {
            alert("Compila tutti i campi!");
        }
    });

    // Salvataggio dei dati
    document.getElementById('save-creature').addEventListener('click', function() {
        localStorage.setItem('creatureContent', JSON.stringify(creatureList));
        alert("Creature salvate!");
    });

    document.getElementById('save-personaggi').addEventListener('click', function() {
        localStorage.setItem('personaggiContent', JSON.stringify(personaggiList));
        alert("Personaggi salvati!");
    });

    // Logout
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = "../index.html";
    });
});