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


// Assortiment refresh

const refreshAssortimentBtn = document.querySelector('.refresh-assortiment-button')
const assortimentCards = Array.from(document.querySelectorAll('.menu-page-images'))


function openCatalog() {
    refreshAssortimentBtn.addEventListener('click', () => {
        assortimentCards.forEach((item => item.classList.remove('hidden')))
        refreshAssortimentBtn.classList.add('hidden')
    })
}

function responce1() {
    if (window.innerWidth > 900) {
        refreshAssortimentBtn.classList.add('hidden')
    }
    else if (window.innerWidth < 900) {
        refreshAssortimentBtn.classList.add('hidden')
        assortimentCards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 3) {
                item.classList.remove('hidden')
            }
            else if (index > 3) {
                refreshAssortimentBtn.classList.remove('hidden')
            }
            openCatalog()
        })
    }
}


responce1()
