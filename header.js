// Récupérer les éléments
const rechercheBtn = document.getElementById('rechercheBtn');
const boiteLoupe = document.getElementById('boiteLoupe');
const cliqueLoupe = document.getElementById('boiteRecherche');

// Fonction pour ouvrir/fermer la barre de recherche
rechercheBtn.addEventListener('click', function (event) {
    boiteLoupe.classList.toggle('open'); // Ajoute ou enlève la classe "open"
    cliqueLoupe.focus(); // Met le focus sur le champ de recherche
    event.stopPropagation(); // Empêche le clic de se propager
});

// Fonction pour fermer la barre de recherche en cliquant ailleurs
document.addEventListener('click', function (event) {
    if (!boiteLoupe.contains(event.target)) {
        // Vérifie si le clic est à l'extérieur de la barre de recherche
        boiteLoupe.classList.remove('open'); // Ferme la barre
    }
});