import products from './products.json' assert {type: 'json'};

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


const buttonModalClose = document.querySelector('#closeModalCoffee')
const buttonModalCloseTea = document.querySelector('#closeModalTea')
const buttonModalCloseDesert = document.querySelector('#CloseModalDesert')

const modalsCoffee = document.querySelector('#myModalCoffee')
const modalsTea = document.querySelector('#myModalTea')
const modalsDesert = document.querySelector('#myModalDesert')

const modalImg = document.querySelector('#modalImage')
const modalInfoTitle = document.querySelector('#modalTitle');
const modalInfoDescription = document.querySelector('#modalDescription');
const modalCountTotal = document.querySelector('.count-module-total');


const modalImgTea = document.querySelector('#modalImageTea')
const modalInfoTitleTea = document.querySelector('#modalTitleTea');
const modalInfoDescriptionTea = document.querySelector('#modalDescriptionTea');
const countTotalTea = document.querySelector('#countTotalTea')


const modalImgDesert = document.querySelector('#modalImageDesert')
const modalInfoTitleDesert = document.querySelector('#modalTitleDesert');
const modalInfoDescriptionDesert = document.querySelector('#modalDescriptionDesert');
const countTotalDesert = document.querySelector('#countTotalDesert')


const cards1 = document.querySelector('#modal1')
const cards2 = document.querySelector('#modal2')
const cards3 = document.querySelector('#modal3')
const cards4 = document.querySelector('#modal4')
const cards5 = document.querySelector('#modal5')
const cards6 = document.querySelector('#modal6')
const cards7 = document.querySelector('#modal7')
const cards8 = document.querySelector('#modal8')
const cards9 = document.querySelector('#modal9')
const cards10 = document.querySelector('#modal10')
const cards11 = document.querySelector('#modal11')
const cards12 = document.querySelector('#modal12')
const cards13 = document.querySelector('#modal13')
const cards14 = document.querySelector('#modal14')
const cards15 = document.querySelector('#modal15')
const cards16 = document.querySelector('#modal16')
const cards17 = document.querySelector('#modal17')
const cards18 = document.querySelector('#modal18')
const cards19 = document.querySelector('#modal19')
const cards20 = document.querySelector('#modal20')





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
    refreshBtn.addEventListener('click', () => {
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


// MODAL WINDOW



cards1.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[0].category}-1.png`
    modalInfoTitle.textContent = products[0].name;
    modalInfoDescription.textContent = products[0].description;
    modalCountTotal.textContent = `$${products[0].price}`;

})
cards2.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[1].category}-2.png`
    modalInfoTitle.textContent = products[1].name;
    modalInfoDescription.textContent = products[1].description;
    modalCountTotal.textContent = `$${products[1].price}`;
})
cards3.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[2].category}-3.png`
    modalInfoTitle.textContent = products[2].name;
    modalInfoDescription.textContent = products[2].description;
    modalCountTotal.textContent = `$${products[2].price}`;
})
cards4.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[3].category}-4.png`
    modalInfoTitle.textContent = products[3].name;
    modalInfoDescription.textContent = products[3].description;
    modalCountTotal.textContent = `$${products[3].price}`;
})
cards5.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[4].category}-5.png`
    modalInfoTitle.textContent = products[4].name;
    modalInfoDescription.textContent = products[4].description;
    modalCountTotal.textContent = `$${products[4].price}`;
})
cards6.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[5].category}-6.png`
    modalInfoTitle.textContent = products[5].name;
    modalInfoDescription.textContent = products[5].description;
    modalCountTotal.textContent = `$${products[5].price}`;
})
cards7.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[6].category}-7.png`
    modalInfoTitle.textContent = products[6].name;
    modalInfoDescription.textContent = products[6].description;
    modalCountTotal.textContent = `$${products[6].price}`;
})
cards8.addEventListener('click', () => {
    modalsCoffee.style.display = 'flex'
    modalImg.src = `assets/${products[7].category}-8.png`
    modalInfoTitle.textContent = products[7].name;
    modalInfoDescription.textContent = products[7].description;
    modalCountTotal.textContent = `$${products[7].price}`;
})


cards9.addEventListener('click', () => {
    modalsTea.style.display = 'flex'
    modalImgTea.src = `assets/${products[8].category}-1.png`
    modalInfoTitleTea.textContent = products[8].name;
    modalInfoDescriptionTea.textContent = products[8].description;
    countTotalTea.textContent = `$${products[8].price}`;
})
cards10.addEventListener('click', () => {
    modalsTea.style.display = 'flex'
    modalImgTea.src = `assets/${products[9].category}-2.png`
    modalInfoTitleTea.textContent = products[9].name;
    modalInfoDescriptionTea.textContent = products[9].description;
    countTotalTea.textContent = `$${products[9].price}`;
})

cards11.addEventListener('click', () => {
    modalsTea.style.display = 'flex'
    modalImgTea.src = `assets/${products[10].category}-3.png`
    modalInfoTitleTea.textContent = products[10].name;
    modalInfoDescriptionTea.textContent = products[10].description;
    countTotalTea.textContent = `$${products[10].price}`;
})
cards12.addEventListener('click', () => {
    modalsTea.style.display = 'flex'
    modalImgTea.src = `assets/${products[11].category}-4.png`
    modalInfoTitleTea.textContent = products[11].name;
    modalInfoDescriptionTea.textContent = products[11].description;
    countTotalTea.textContent = `$${products[11].price}`;
})





cards13.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[12].category}-1.png`
    modalInfoTitleDesert.textContent = products[12].name;
    modalInfoDescriptionDesert.textContent = products[12].description;
    countTotalDesert.textContent = `$${products[12].price}`;
})

cards14.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[13].category}-2.png`
    modalInfoTitleDesert.textContent = products[13].name;
    modalInfoDescriptionDesert.textContent = products[13].description;
    countTotalDesert.textContent = `$${products[13].price}`;
})

cards15.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[14].category}-3.png`
    modalInfoTitleDesert.textContent = products[14].name;
    modalInfoDescriptionDesert.textContent = products[14].description;
    countTotalDesert.textContent = `$${products[14].price}`;
})


cards16.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[15].category}-4.png`
    modalInfoTitleDesert.textContent = products[15].name;
    modalInfoDescriptionDesert.textContent = products[15].description;
    countTotalDesert.textContent = `$${products[15].price}`;
})



cards17.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[16].category}-5.png`
    modalInfoTitleDesert.textContent = products[16].name;
    modalInfoDescriptionDesert.textContent = products[16].description;
    countTotalDesert.textContent = `$${products[16].price}`;
})


cards18.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[17].category}-6.png`
    modalInfoTitleDesert.textContent = products[17].name;
    modalInfoDescriptionDesert.textContent = products[17].description;
    countTotalDesert.textContent = `$${products[17].price}`;
})



cards19.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[18].category}-7.png`
    modalInfoTitleDesert.textContent = products[18].name;
    modalInfoDescriptionDesert.textContent = products[18].description;
    countTotalDesert.textContent = `$${products[18].price}`;
})


cards20.addEventListener('click', () => {
    modalsDesert.style.display = 'flex'
    modalImgDesert.src = `assets/${products[19].category}-8.png`
    modalInfoTitleDesert.textContent = products[19].name;
    modalInfoDescriptionDesert.textContent = products[19].description;
    countTotalDesert.textContent = `$${products[19].price}`;
})





buttonModalClose.addEventListener('click', () => {
    modalsCoffee.style.display = 'none'
})

buttonModalCloseTea.addEventListener('click', () => {
    modalsTea.style.display = 'none'
})

buttonModalCloseDesert.addEventListener('click', () => {
    modalsDesert.style.display = 'none'
})
