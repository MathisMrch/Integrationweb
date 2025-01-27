// Carousel


const slides = document.querySelector('.slides');
const points = document.querySelectorAll('.point');
let currentIndex = 0;

// Fonction pour afficher une image en fonction de l'index
function showSlide(index) {
    const offset = index * -100; // Décalage en pourcentage
    slides.style.transform = `translateX(${offset}%)`;
    points.forEach(point => point.classList.remove('active'));
    points[index].classList.add('active');
    currentIndex = index; // Mise à jour de l'index actuel
}

// Fonction pour passer automatiquement à l'image suivante
function changeSlide() {
    const nextIndex = (currentIndex + 1) % points.length;
    showSlide(nextIndex);
}

// Ajout d'événements pour les points
points.forEach((point, index) => {
    point.addEventListener('click', () => showSlide(index));
});

// Change d'image toutes les 10 secondes
setInterval(changeSlide, 10000);

// Affiche la première image au chargement
showSlide(currentIndex);


// Carousel 2


let compteur=1;

function moveright() {
    let doc = document.getElementById("barreblancheid");
    let liste=document.getElementById("carousselimage");

    // Récupérer la largeur actuelle de la barre (en pixels)
    let val = doc.style.width;
    let valpxliste=-(compteur*430);

    // Si la largeur est vide (au premier chargement), la mettre à "0%"
    if (val === "") {
        val = "0%";
        doc.style.width = val;
    }

    let valNumber = parseFloat(val);

    // Si la largeur est inférieure à 100%, on ajoute 20%
    if (compteur < 6) {
        let newVal = valNumber + 20;
        doc.style.width = newVal + '%'; // On applique la nouvelle largeur en pixels
        liste.style.left=(valpxliste-430)+"px";
        compteur++;
        console.log(compteur);
    }
}

function moveleft(){
    let doc = document.getElementById("barreblancheid");
    let liste=document.getElementById("carousselimage");

    // Récupérer la largeur actuelle de la barre (en pixels)
    let val = doc.style.width;
    let valpxliste=-(compteur*430);

    // Si la largeur est vide (au premier chargement), la mettre à "0%"
    if (val === "") {
        val = "0%";
        doc.style.width = val;
    }

    let valNumber = parseFloat(val);

    // Si la largeur est superieur à 0%, on soustrait 20%
    if (compteur >= 2) {
        let newVal = valNumber - 20;
        doc.style.width = newVal + '%'; // On applique la nouvelle largeur en pixels
        liste.style.left=(valpxliste+430)+"px";
        compteur--;
    } 
}

// Header 

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

