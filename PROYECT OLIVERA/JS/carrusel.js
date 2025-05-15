const carrusel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');

let index = 0;
const proyectos = document.querySelectorAll('.proyecto');
const total = proyectos.length;

function updateCarrusel() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarrusel();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % total;
    updateCarrusel();
});
