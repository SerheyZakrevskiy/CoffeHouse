// Burger memu
const iconBurger = document.querySelector('.burger-icon')
const burgerMenu = document.querySelector('.burger-menu')
const linksBurger = document.querySelectorAll('.nav-li-a-burger')

iconBurger.addEventListener('click', (e) => {
    iconBurger.classList.toggle('_active')
    burgerMenu.classList.toggle('_active')
    document.body.classList.toggle('_lock')
})

linksBurger.forEach(link => {
    link.addEventListener('click', (e) => {
        if (iconBurger.classList.contains('_active')) {
            iconBurger.classList.remove('_active')
            burgerMenu.classList.remove('_active')
            document.body.classList.remove('_lock')
        }
    });
});

//  Slider favorites coffee

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".content-slider-favourites-coffee-swipe");
    const dots = document.querySelectorAll(".dot");
    let currentSlideIndex = 0;

    function showSlide(index) {
        if (index === currentSlideIndex) return;

        slides[currentSlideIndex].classList.add("hidden");
        slides[index].classList.remove("hidden");

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === index);
        });

        currentSlideIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    document.querySelector(".buttons-left-favourites-coffee").addEventListener("click", prevSlide);
    document.querySelector(".buttons-right-favourites-coffee").addEventListener("click", nextSlide);

    // Опционально: Автоматическое слайд-шоу
    // setInterval(nextSlide, 5000);

    showSlide(currentSlideIndex);
});

