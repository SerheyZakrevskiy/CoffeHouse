
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


const sizeS = document.querySelector('#sizeS')
    const sizeM = document.querySelector('#sizeM')
    const sizeL = document.querySelector('#sizeL')
    const span200 = document.querySelector('#span200')
    const span300 = document.querySelector('#span300')
    const span400 = document.querySelector('#span400')
    const sugarButton = document.getElementById('btnSugar');
    const cinnamonButton = document.getElementById('btnCinnamon');
    const syrupButton = document.getElementById('btnSyrup');
    const spanSugar = document.getElementById('spanSugar');
    const spanCinnamon = document.getElementById('spanCinnamon');
    const spanSyrup = document.getElementById('spanSyrup');


    const teaSizeS = document.querySelector('#teaSizeS')
    const teaSizeM = document.querySelector('#teaSizeM')
    const teaSizeL = document.querySelector('#teaSizeL')
    const teaSpan200 = document.querySelector('#teaSpan200')
    const teaSpan300 = document.querySelector('#teaSpan300')
    const teaSpan400 = document.querySelector('#teaSpan400')
    const teaSugarButton = document.getElementById('teaBtnSugar');
    const teaLemonButton = document.getElementById('teaBtnLemon');
    const teaSyrupButton = document.getElementById('teaBtnSyrup');
    const teaSpanSugar = document.getElementById('teaSugarSpan');
    const teaSpanLemon = document.getElementById('teaLemonSpan');
    const teaSpanSyrup = document.getElementById('teaSyrupSpan');



    const desertSizeS = document.querySelector('#desertSizeS')
    const desertSizeM = document.querySelector('#desertSizeM')
    const desertSizeL = document.querySelector('#desertSizeL')
    const desertSpan50 = document.querySelector('#desertSpan50')
    const desertSpan100 = document.querySelector('#desertSpan100')
    const desertSpan200 = document.querySelector('#desertSpan200')
    const desertBerriesButton = document.getElementById('desertBtnBerries');
    const desertNutButton = document.getElementById('desertBtnNuts');
    const desertJamButton = document.getElementById('desertBtnJam');
    const desertSpanBerries = document.getElementById('desertBerriesSpan');
    const desertSpanNuts = document.getElementById('desertNutsSpan');
    const desertSpanJam = document.getElementById('desertJamSpan');



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


fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/coffee-house/products.json')
.then((response) => response.json())
.then((products) => {



    cards1.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[0].category}-1.png`
            modalInfoTitle.textContent = products[0].name;
            modalInfoDescription.textContent = products[0].description;
            modalCountTotal.textContent = `$${products[0].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')

                sugarButton.classList.remove('active-buttons-modal');
                spanSugar.classList.remove('active-span-modal')
                cinnamonButton.classList.remove('active-buttons-modal');
                spanCinnamon.classList.remove('active-span-modal')
                syrupButton.classList.remove('active-buttons-modal');
                spanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')

                sugarButton.classList.remove('active-buttons-modal');
                spanSugar.classList.remove('active-span-modal')
                cinnamonButton.classList.remove('active-buttons-modal');
                spanCinnamon.classList.remove('active-span-modal')
                syrupButton.classList.remove('active-buttons-modal');
                spanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')

                sugarButton.classList.remove('active-buttons-modal');
                spanSugar.classList.remove('active-span-modal')
                cinnamonButton.classList.remove('active-buttons-modal');
                spanCinnamon.classList.remove('active-span-modal')
                syrupButton.classList.remove('active-buttons-modal');
                spanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })

        
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })

    })
        cards2.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[1].category}-2.png`
            modalInfoTitle.textContent = products[1].name;
            modalInfoDescription.textContent = products[1].description;
            modalCountTotal.textContent = `$${products[1].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards3.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[2].category}-3.png`
            modalInfoTitle.textContent = products[2].name;
            modalInfoDescription.textContent = products[2].description;
            modalCountTotal.textContent = `$${products[2].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards4.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[3].category}-4.png`
            modalInfoTitle.textContent = products[3].name;
            modalInfoDescription.textContent = products[3].description;
            modalCountTotal.textContent = `$${products[3].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards5.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[4].category}-5.png`
            modalInfoTitle.textContent = products[4].name;
            modalInfoDescription.textContent = products[4].description;
            modalCountTotal.textContent = `$${products[4].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards6.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[5].category}-6.png`
            modalInfoTitle.textContent = products[5].name;
            modalInfoDescription.textContent = products[5].description;
            modalCountTotal.textContent = `$${products[5].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards7.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[6].category}-7.png`
            modalInfoTitle.textContent = products[6].name;
            modalInfoDescription.textContent = products[6].description;
            modalCountTotal.textContent = `$${products[6].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards8.addEventListener('click', () => {
            modalsCoffee.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImg.src = `assets/${products[7].category}-8.png`
            modalInfoTitle.textContent = products[7].name;
            modalInfoDescription.textContent = products[7].description;
            modalCountTotal.textContent = `$${products[7].price}`;
            const CountTotal = parseFloat(modalCountTotal.innerHTML.replace('$', ''));
            sizeM.addEventListener('click', () => {
                sizeM.classList.add('active-buttons-modal')
                span300.classList.add('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 0.5).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            
            })
            
            sizeS.addEventListener('click', () => {
                sizeS.classList.add('active-buttons-modal')
                span200.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeL.classList.remove('active-buttons-modal')
                span400.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            
            sizeL.addEventListener('click', () => {
                sizeL.classList.add('active-buttons-modal')
                span400.classList.add('active-span-modal')
            
                sizeM.classList.remove('active-buttons-modal')
                span300.classList.remove('active-span-modal')
            
                sizeS.classList.remove('active-buttons-modal')
                span200.classList.remove('active-span-modal')
            
            
                const val = (CountTotal + 1).toFixed(2)
                modalCountTotal.textContent = `$${val}`
            })
            cinnamonButton.addEventListener('click', () => {
                if (cinnamonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.remove('active-buttons-modal');
                        spanCinnamon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        cinnamonButton.classList.add('active-buttons-modal');
                        spanCinnamon.classList.add('active-span-modal')
                }
            })
       
        
            syrupButton.addEventListener('click', () => {
                if (syrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.remove('active-buttons-modal');
                        spanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                        modalCountTotal.textContent = `$${val}`;
                        syrupButton.classList.add('active-buttons-modal');
                        spanSyrup.classList.add('active-span-modal')
                }
            })
            sugarButton.addEventListener('click', () => {
                if (sugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) - 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.remove('active-buttons-modal');
                    spanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(modalCountTotal.textContent.replace('$', '')) + 0.5).toFixed(2);
                    modalCountTotal.textContent = `$${val}`;
                    sugarButton.classList.add('active-buttons-modal');
                    spanSugar.classList.add('active-span-modal')
            }
        })
        })
        
        
        cards9.addEventListener('click', () => {
            modalsTea.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgTea.src = `assets/${products[8].category}-1.png`
            modalInfoTitleTea.textContent = products[8].name;
            modalInfoDescriptionTea.textContent = products[8].description;
            countTotalTea.textContent = `$${products[8].price}`;
            const CountTotal = parseFloat(countTotalTea.innerHTML.replace('$', ''));
            teaSizeM.addEventListener('click', () => {
                teaSizeM.classList.add('active-buttons-modal')
                teaSpan300.classList.add('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalTea.textContent = `$${val}`
            
            })
            
            teaSizeS.addEventListener('click', () => {
                teaSizeS.classList.add('active-buttons-modal')
                teaSpan200.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })
            
            teaSizeL.addEventListener('click', () => {
                teaSizeL.classList.add('active-buttons-modal')
                teaSpan400.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })

        
            teaLemonButton.addEventListener('click', () => {
                if (teaLemonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.remove('active-buttons-modal');
                        teaSpanLemon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.add('active-buttons-modal');
                        teaSpanLemon.classList.add('active-span-modal')
                }
            })
       
        
            teaSyrupButton.addEventListener('click', () => {
                if (teaSyrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.remove('active-buttons-modal');
                        teaSpanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.add('active-buttons-modal');
                        teaSpanSyrup.classList.add('active-span-modal')
                }
            })
            teaSugarButton.addEventListener('click', () => {
                if (teaSugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.remove('active-buttons-modal');
                    teaSpanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.add('active-buttons-modal');
                    teaSpanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards10.addEventListener('click', () => {
            modalsTea.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgTea.src = `assets/${products[9].category}-2.png`
            modalInfoTitleTea.textContent = products[9].name;
            modalInfoDescriptionTea.textContent = products[9].description;
            countTotalTea.textContent = `$${products[9].price}`;
            const CountTotal = parseFloat(countTotalTea.innerHTML.replace('$', ''));
            teaSizeM.addEventListener('click', () => {
                teaSizeM.classList.add('active-buttons-modal')
                teaSpan300.classList.add('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalTea.textContent = `$${val}`
            
            })
            
            teaSizeS.addEventListener('click', () => {
                teaSizeS.classList.add('active-buttons-modal')
                teaSpan200.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })
            
            teaSizeL.addEventListener('click', () => {
                teaSizeL.classList.add('active-buttons-modal')
                teaSpan400.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })

        
            teaLemonButton.addEventListener('click', () => {
                if (teaLemonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.remove('active-buttons-modal');
                        teaSpanLemon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.add('active-buttons-modal');
                        teaSpanLemon.classList.add('active-span-modal')
                }
            })
       
        
            teaSyrupButton.addEventListener('click', () => {
                if (teaSyrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.remove('active-buttons-modal');
                        teaSpanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.add('active-buttons-modal');
                        teaSpanSyrup.classList.add('active-span-modal')
                }
            })
            teaSugarButton.addEventListener('click', () => {
                if (teaSugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.remove('active-buttons-modal');
                    teaSpanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.add('active-buttons-modal');
                    teaSpanSugar.classList.add('active-span-modal')
            }
        })
        })
        
        cards11.addEventListener('click', () => {
            modalsTea.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgTea.src = `assets/${products[10].category}-3.png`
            modalInfoTitleTea.textContent = products[10].name;
            modalInfoDescriptionTea.textContent = products[10].description;
            countTotalTea.textContent = `$${products[10].price}`;
            const CountTotal = parseFloat(countTotalTea.innerHTML.replace('$', ''));
            teaSizeM.addEventListener('click', () => {
                teaSizeM.classList.add('active-buttons-modal')
                teaSpan300.classList.add('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalTea.textContent = `$${val}`
            
            })
            
            teaSizeS.addEventListener('click', () => {
                teaSizeS.classList.add('active-buttons-modal')
                teaSpan200.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })
            
            teaSizeL.addEventListener('click', () => {
                teaSizeL.classList.add('active-buttons-modal')
                teaSpan400.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })

        
            teaLemonButton.addEventListener('click', () => {
                if (teaLemonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.remove('active-buttons-modal');
                        teaSpanLemon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.add('active-buttons-modal');
                        teaSpanLemon.classList.add('active-span-modal')
                }
            })
       
        
            teaSyrupButton.addEventListener('click', () => {
                if (teaSyrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.remove('active-buttons-modal');
                        teaSpanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.add('active-buttons-modal');
                        teaSpanSyrup.classList.add('active-span-modal')
                }
            })
            teaSugarButton.addEventListener('click', () => {
                if (teaSugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.remove('active-buttons-modal');
                    teaSpanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.add('active-buttons-modal');
                    teaSpanSugar.classList.add('active-span-modal')
            }
        })
        })
        cards12.addEventListener('click', () => {
            modalsTea.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgTea.src = `assets/${products[11].category}-4.png`
            modalInfoTitleTea.textContent = products[11].name;
            modalInfoDescriptionTea.textContent = products[11].description;
            countTotalTea.textContent = `$${products[11].price}`;
            const CountTotal = parseFloat(countTotalTea.innerHTML.replace('$', ''));
            teaSizeM.addEventListener('click', () => {
                teaSizeM.classList.add('active-buttons-modal')
                teaSpan300.classList.add('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalTea.textContent = `$${val}`
            
            })
            
            teaSizeS.addEventListener('click', () => {
                teaSizeS.classList.add('active-buttons-modal')
                teaSpan200.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeL.classList.remove('active-buttons-modal')
                teaSpan400.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })
            
            teaSizeL.addEventListener('click', () => {
                teaSizeL.classList.add('active-buttons-modal')
                teaSpan400.classList.add('active-span-modal')
            
                teaSizeM.classList.remove('active-buttons-modal')
                teaSpan300.classList.remove('active-span-modal')
            
                teaSizeS.classList.remove('active-buttons-modal')
                teaSpan200.classList.remove('active-span-modal')

                teaSugarButton.classList.remove('active-buttons-modal');
                teaSpanSugar.classList.remove('active-span-modal')
                teaLemonButton.classList.remove('active-buttons-modal');
                teaSpanLemon.classList.remove('active-span-modal')
                teaSyrupButton.classList.remove('active-buttons-modal');
                teaSpanSyrup.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalTea.textContent = `$${val}`
            })

        
            teaLemonButton.addEventListener('click', () => {
                if (teaLemonButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.remove('active-buttons-modal');
                        teaSpanLemon.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaLemonButton.classList.add('active-buttons-modal');
                        teaSpanLemon.classList.add('active-span-modal')
                }
            })
       
        
            teaSyrupButton.addEventListener('click', () => {
                if (teaSyrupButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.remove('active-buttons-modal');
                        teaSpanSyrup.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalTea.textContent = `$${val}`;
                        teaSyrupButton.classList.add('active-buttons-modal');
                        teaSpanSyrup.classList.add('active-span-modal')
                }
            })
            teaSugarButton.addEventListener('click', () => {
                if (teaSugarButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.remove('active-buttons-modal');
                    teaSpanSugar.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalTea.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalTea.textContent = `$${val}`;
                    teaSugarButton.classList.add('active-buttons-modal');
                    teaSpanSugar.classList.add('active-span-modal')
            }
        })
        })
        
        
        
        
        
        cards13.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[12].category}-1.png`
            modalInfoTitleDesert.textContent = products[12].name;
            modalInfoDescriptionDesert.textContent = products[12].description;
            countTotalDesert.textContent = `$${products[12].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        cards14.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[13].category}-2.png`
            modalInfoTitleDesert.textContent = products[13].name;
            modalInfoDescriptionDesert.textContent = products[13].description;
            countTotalDesert.textContent = `$${products[13].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        cards15.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[14].category}-3.png`
            modalInfoTitleDesert.textContent = products[14].name;
            modalInfoDescriptionDesert.textContent = products[14].description;
            countTotalDesert.textContent = `$${products[14].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        
        cards16.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[15].category}-4.png`
            modalInfoTitleDesert.textContent = products[15].name;
            modalInfoDescriptionDesert.textContent = products[15].description;
            countTotalDesert.textContent = `$${products[15].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        
        
        cards17.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[16].category}-5.png`
            modalInfoTitleDesert.textContent = products[16].name;
            modalInfoDescriptionDesert.textContent = products[16].description;
            countTotalDesert.textContent = `$${products[16].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        
        cards18.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[17].category}-6.png`
            modalInfoTitleDesert.textContent = products[17].name;
            modalInfoDescriptionDesert.textContent = products[17].description;
            countTotalDesert.textContent = `$${products[17].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        
        
        cards19.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[18].category}-7.png`
            modalInfoTitleDesert.textContent = products[18].name;
            modalInfoDescriptionDesert.textContent = products[18].description;
            countTotalDesert.textContent = `$${products[18].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })
        
        
        cards20.addEventListener('click', () => {
            modalsDesert.style.display = 'flex'
            document.body.classList.add('body-not-scroll')
            modalImgDesert.src = `assets/${products[19].category}-8.png`
            modalInfoTitleDesert.textContent = products[19].name;
            modalInfoDescriptionDesert.textContent = products[19].description;
            countTotalDesert.textContent = `$${products[19].price}`;
            const CountTotal = parseFloat(countTotalDesert.innerHTML.replace('$', ''));
            desertSizeM.addEventListener('click', () => {
                desertSizeM.classList.add('active-buttons-modal')
                desertSpan100.classList.add('active-span-modal')

                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 0.5).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            
            })
            
            desertSizeS.addEventListener('click', () => {
                desertSizeS.classList.add('active-buttons-modal')
                desertSpan50.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
            
                const val = (CountTotal).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })
            
            desertSizeL.addEventListener('click', () => {
                desertSizeL.classList.add('active-buttons-modal')
                desertSpan200.classList.add('active-span-modal')
            
                desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeS.classList.remove('active-buttons-modal')
                desertSpan50.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
            
                const val = (CountTotal + 1).toFixed(2)
                countTotalDesert.textContent = `$${val}`
            })

        
            desertNutButton.addEventListener('click', () => {
                if (desertNutButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.remove('active-buttons-modal');
                        desertSpanNuts.classList.remove('active-span-modal')
                } else {
                    
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertNutButton.classList.add('active-buttons-modal');
                        desertSpanNuts.classList.add('active-span-modal')
                }
            })
       
        
            desertJamButton.addEventListener('click', () => {
                if (desertJamButton.classList.contains('active-buttons-modal')) {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.remove('active-buttons-modal');
                        desertSpanJam.classList.remove('active-span-modal')
                } else {
                        const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                        countTotalDesert.textContent = `$${val}`;
                        desertJamButton.classList.add('active-buttons-modal');
                        desertSpanJam.classList.add('active-span-modal')
                }
            })
            desertBerriesButton.addEventListener('click', () => {
                if (desertBerriesButton.classList.contains('active-buttons-modal')) {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) - 0.5).toFixed(2);
                countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.remove('active-buttons-modal');
                    desertSpanBerries.classList.remove('active-span-modal')
            } else {
                    const val = (parseFloat(countTotalDesert.textContent.replace('$', '')) + 0.5).toFixed(2);
                    countTotalDesert.textContent = `$${val}`;
                    desertBerriesButton.classList.add('active-buttons-modal');
                    desertSpanBerries.classList.add('active-span-modal')
            }
        })
        })








    });



buttonModalClose.addEventListener('click', () => {
        sizeM.classList.remove('active-buttons-modal')
        span300.classList.remove('active-span-modal')
        sizeL.classList.remove('active-buttons-modal')
        span400.classList.remove('active-span-modal')
        sugarButton.classList.remove('active-buttons-modal');
        spanSugar.classList.remove('active-span-modal')
        cinnamonButton.classList.remove('active-buttons-modal');
        spanCinnamon.classList.remove('active-span-modal')
        syrupButton.classList.remove('active-buttons-modal');
        spanSyrup.classList.remove('active-span-modal')
        modalsCoffee.style.display = 'none'
        document.body.classList.remove('body-not-scroll')
    })


buttonModalCloseTea.addEventListener('click', () => {
    teaSizeM.classList.remove('active-buttons-modal')
    teaSpan300.classList.remove('active-span-modal')

    teaSizeL.classList.remove('active-buttons-modal')
    teaSpan400.classList.remove('active-span-modal')

    teaSugarButton.classList.remove('active-buttons-modal');
    teaSpanSugar.classList.remove('active-span-modal')
    teaLemonButton.classList.remove('active-buttons-modal');
    teaSpanLemon.classList.remove('active-span-modal')
    teaSyrupButton.classList.remove('active-buttons-modal');
    teaSpanSyrup.classList.remove('active-span-modal')
    modalsTea.style.display = 'none'
    document.body.classList.remove('body-not-scroll')
})

buttonModalCloseDesert.addEventListener('click', () => {
    desertSizeM.classList.remove('active-buttons-modal')
                desertSpan100.classList.remove('active-span-modal')
            
                desertSizeL.classList.remove('active-buttons-modal')
                desertSpan200.classList.remove('active-span-modal')

                desertBerriesButton.classList.remove('active-buttons-modal');
                desertSpanBerries.classList.remove('active-span-modal')
                desertNutButton.classList.remove('active-buttons-modal');
                desertSpanNuts.classList.remove('active-span-modal')
                desertJamButton.classList.remove('active-buttons-modal');
                desertSpanJam.classList.remove('active-span-modal')
    modalsDesert.style.display = 'none'
    document.body.classList.remove('body-not-scroll')
})







