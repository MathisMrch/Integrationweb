document.addEventListener('DOMContentLoaded', function() {
    let carousel = document.querySelector('.carousel-images');
    let isPaused = false;

    // Fonction pour démarrer l'animation
    function startAnimation() {
        carousel.style.animationPlayState = 'running';
    }

    // Fonction pour arrêter l'animation
    function stopAnimation() {
        carousel.style.animationPlayState = 'paused';
    }
});