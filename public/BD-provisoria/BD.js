const icon_plataform = {
    PC: '<i class="fa-brands fa-windows"></i>',
    PS: '<i class="fa-brands fa-playstation"></i>',
    XBOX: '<i class="fa-brands fa-xbox"></i>',
    /* AGREGAR MAS ICONOS SEGUN SE NECESITE */
}

/* BD       voy a crear uno solo para que se hagan de guia*/
const product = [
    {
        name: 'STARFIELD PREMIUM EDITION (Early Access) + PRE-ORDER BONUS PC',
        description: 'Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.',
        image: '/image/caratulas/Starfield.jpg',
        price: '$29,236.59',
        plataform: [icon_plataform.PC],
        /* aca agregar si faltan mas */
    },
]
/* EXPORTS */
module.exports = product