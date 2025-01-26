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