const icon_plataform = {
    PC: 'fa-brands fa-windows',
    PS: 'fa-brands fa-playstation',
    XBOX: 'fa-brands fa-xbox',
    /* AGREGAR MAS ICONOS SEGUN SE NECESITE */
}

/* BD       voy a crear uno solo para que se hagan de guia*/
const product = [
    {
        id: 1,
        name: 'STARFIELD PREMIUM EDITION (Early Access) + PRE-ORDER BONUS PC',
        description: 'Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.',
        image: '/images/caratulas/Starfield.jpg',
        price: 21586.59,
        plataform: [icon_plataform.PC, icon_plataform.XBOX],
    }
]
/* EXPORTS */
module.exports = product
