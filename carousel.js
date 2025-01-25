const slides = document.querySelector('.slides');
let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % 3; // Il y a 3 images (0, 1, 2)
    const offset = currentIndex * -100; // Décalage en pourcentage
    slides.style.transform = `translateX(${offset}%)`;
}

// Change d'image toutes les 10 secondes
setInterval(changeSlide, 10000);
