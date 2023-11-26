const iconBurger = document.querySelector('.burger-icon')
const burgerMenu = document.querySelector('.burger-menu')
const linksBurger = document.querySelectorAll('.nav-li-a-burger')



const menuCoffee = document.querySelector('#menu-coffee')
const menuTea = document.querySelector('#menu-tea');
const menuDesert = document.querySelector('#menu-desert')
const assortimentCoffee = document.querySelector('.menu-coffee-assortiment')
const assortimentTea = document.querySelector('.menu-tea-assortiment')
const assortimentDesert = document.querySelector('.menu-desert-assortiment')
const activeCoffeeBackcolor = document.querySelector('.coffee-active-menu')
const activeTeaBackcolor = document.querySelector('.tea-active-menu')
const activeDesertBackcolor = document.querySelector('.desert-active-menu')


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

function openCatalog(refreshBtn, assortimentCards) {
    refreshBtn.addEventListener('click', () => {
        assortimentCards.forEach(item => item.classList.remove('hidden'));
        refreshBtn.classList.add('hidden');
    });
}

function responce(refreshBtn, assortimentCards) {
    if (window.innerWidth > 900) {
        refreshBtn.classList.add('hidden');
    } else if (window.innerWidth < 900) {
        refreshBtn.classList.add('hidden');
        assortimentCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 3) {
                item.classList.remove('hidden');
            } else if (index > 3)  {
                refreshBtn.classList.remove('hidden');
            }
        });
    }
}

const refreshAssortimentBtnCoffee = document.querySelector('.refresh-assort-coffee');
const assortimentCardsCoffee = Array.from(document.querySelectorAll('.page-images-coffee'));

const refreshAssortimentBtnTea = document.querySelector('.refresh-assort-tea');
const assortimentCardsTea = Array.from(document.querySelectorAll('.page-images-tea'));

const refreshAssortimentBtnDesert = document.querySelector('.refresh-assort-desert');
const assortimentCardsDesert = Array.from(document.querySelectorAll('.page-images-desert'));

responce(refreshAssortimentBtnCoffee, assortimentCardsCoffee);
openCatalog(refreshAssortimentBtnCoffee, assortimentCardsCoffee);


menuCoffee.addEventListener('click', () => {
    function openCatalogCoffee(refreshBtn, assortimentCards) {
    refreshBtn.addEventLiCoffee('click', () => {
        assortimentCards.forEach(item => item.classList.remove('hidden'));
        refreshBtn.classList.add('hidden');
    });
}

function responceCoffee(refreshBtn, assortimentCards) {
    if (window.innerWidth > 900) {
        refreshBtn.classList.add('hidden');
    } else if (window.innerWidth < 900) {
        refreshBtn.classList.add('hidden');
        assortimentCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 3) {
                item.classList.remove('hidden');
            } else if (index > 3)  {
                refreshBtn.classList.remove('hidden');
            }
        });
    }
}
responceCoffee(refreshAssortimentBtnCoffee, assortimentCardsCoffee);
openCatalogCoffee(refreshAssortimentBtnCoffee, assortimentCardsCoffee);
})





menuTea.addEventListener('click', () => {
    function openCatalogTea(refreshBtn, assortimentCards) {
    refreshBtn.addEventListener('click', () => {
        assortimentCards.forEach(item => item.classList.remove('hidden'));
        refreshBtn.classList.add('hidden');
    });
}

function responceTea(refreshBtn, assortimentCards) {
    if (window.innerWidth > 900) {
        refreshBtn.classList.add('hidden');
    } else if (window.innerWidth < 900) {
        refreshBtn.classList.add('hidden');
        assortimentCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 3) {
                item.classList.remove('hidden');
            } else if (index > 3)  {
                refreshBtn.classList.remove('hidden');
            }
        });
    }
}
responceTea(refreshAssortimentBtnTea, assortimentCardsTea);
openCatalogTea(refreshAssortimentBtnTea, assortimentCardsTea);
})



menuDesert.addEventListener('click', () => {
    function openCatalogDesert(refreshBtn, assortimentCards) {
    refreshBtn.addEventListener('click', () => {
        assortimentCards.forEach(item => item.classList.remove('hidden'));
        refreshBtn.classList.add('hidden');
    });
}

function responceDesert(refreshBtn, assortimentCards) {
    if (window.innerWidth > 900) {
        refreshBtn.classList.add('hidden');
    } else if (window.innerWidth < 900) {
        refreshBtn.classList.add('hidden');
        assortimentCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 3) {
                item.classList.remove('hidden');
            } else if (index > 3)  {
                refreshBtn.classList.remove('hidden');
            }
        });
    }
}
responceDesert(refreshAssortimentBtnDesert, assortimentCardsDesert);
openCatalogDesert(refreshAssortimentBtnDesert, assortimentCardsDesert);
})






// Assortiment other

menuCoffee.addEventListener('click', () => {
    assortimentDesert.classList.add('hidden')
    assortimentCoffee.classList.remove('hidden')
    assortimentTea.classList.add('hidden')


    activeCoffeeBackcolor.classList.add('menu-active')
    activeTeaBackcolor.classList.remove('menu-active')
    activeDesertBackcolor.classList.remove('menu-active')

    if (window.innerWidth < 900) {
        refreshAssortimentBtnCoffee.classList.remove('hidden')
        refreshAssortimentBtnTea.classList.add('hidden')
        refreshAssortimentBtnDesert.classList.add('hidden')
    }
})

menuTea.addEventListener('click', () => {
    assortimentTea.classList.remove('hidden')
    assortimentDesert.classList.add('hidden')
    assortimentCoffee.classList.add('hidden')


    activeTeaBackcolor.classList.add('menu-active')
    activeCoffeeBackcolor.classList.remove('menu-active')
    activeDesertBackcolor.classList.remove('menu-active')

    if (window.innerWidth < 900) {
        refreshAssortimentBtnCoffee.classList.add('hidden')
        refreshAssortimentBtnTea.classList.add('hidden')
        refreshAssortimentBtnDesert.classList.add('hidden')
    }
})

menuDesert.addEventListener('click', () => {
    assortimentDesert.classList.remove('hidden')
    assortimentCoffee.classList.add('hidden')
    assortimentTea.classList.add('hidden')


    activeDesertBackcolor.classList.add('menu-active')
    activeCoffeeBackcolor.classList.remove('menu-active')
    activeTeaBackcolor.classList.remove('menu-active')

    if (window.innerWidth < 900) {
        refreshAssortimentBtnCoffee.classList.add('hidden')
        refreshAssortimentBtnTea.classList.add('hidden')
        refreshAssortimentBtnDesert.classList.remove('hidden')
    }
})



