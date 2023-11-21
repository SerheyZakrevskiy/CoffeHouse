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
