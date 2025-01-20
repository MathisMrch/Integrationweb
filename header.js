// Récupérer le bouton de recherche et la barre de recherche
const searchBtn = document.getElementById('rechercheBtn');
const searchContainer = document.querySelector('.boiteLoupe');

// Fonction pour ouvrir la barre de recherche
searchBtn.addEventListener('click', function () {
    searchContainer.classList.toggle('open');
});