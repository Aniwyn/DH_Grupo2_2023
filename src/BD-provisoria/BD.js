const icon_plataform = {
    "PC": ["PC","fa-brands fa-windows"],
    "PS": ["PS","fa-brands fa-playstation"],
    "XBOX": ["XBOX","fa-brands fa-xbox"],
    "SEGA": ["SEGA","fa-solid fa-gamepad"]
}

const genderList = {
    accion: "Acción",
    aventura: "Aventura",
    estrategia: "Estrategia",
    pelea: "Peleas",
    rpg: "RPG",
    deporte: "Deporte",

}

const product = [
    {
        id: 1,
        name: "STARFIELD PREMIUM EDITION (Early Access) + PRE-ORDER BONUS PC",
        description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
        image: "/images/caratulas/Starfield.jpg",
        price: 21586.59,
        plataform:[icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"08-10-2023",
        developer:"Bethesda Game Studios",
        gender: [genderList.accion],
        format:"Fisico",
        gamers:"Multijugador",
        fileSize:"Bethesda Game Studios",
        /* aca agregar si faltan mas */
    },

    {
        id: 2,
        name: "Sonic 2",
        description:"Sumérgete en el mundo de Sonic Mania Plus, la edición mejorada del aclamado Sonic Mania para PS4. Disfruta de una aventura emocionante con tus personajes favoritos de Sonic en un formato físico que te permitirá conservar y coleccionar este clásico moderno. Desarrollado por Hyperkinectic Studios y publicado por SEGA, este juego de aventuras del 2018 te brinda horas de diversión y nostalgia.",
        image: "/images/home/Sonic2.jpg",
        price: 8999.99,
        plataform: [icon_plataform.PS, icon_plataform.SEGA],
        releaseDate:"05-07-2022",
        developer:"Hyperkinectic Studios",
        gender:[genderList.accion, genderList.aventura],
        format:"Fisico",
        gamers:"Multijugador",
        editorial:"SEGA",
        /* aca agregar si faltan mas */
    },

    {
        id: 3,
        name: "Worm Jim",
        description:"Worm Jim es un videojuego de plataformas cuyo protagonista es una Lombriz llamada Jim que, enfundado en un traje cibernético y armado con una pistola, se dedica a recorrer el universo en busca de la princesa 'Cuál es su nombre'.",
        image: "/images/home/Worm.jpg",
        price: 8599.99,
        plataform: [icon_plataform.SEGA, icon_plataform.XBOX],
        releaseDate:"08-03-1995",
        developer:"Earthworm Jim",
        gender:[genderList.accion, genderList.aventura],
        format:"Fisico",
        gamers:"Un jugador",
        fileSize:"SEGA",
        /* aca agregar si faltan mas */
    },
    
    {
        id: 4,
        name: "Tiny Toon Aventures",
        description:"Los personajes de ACME Acres, Babs y Buster Bunny, Plucky Duck y Hamton Pig, te invitan a compartir sus grandes aventuras.",
        image: "/images/home/TinyToon.jpg",
        price: 7999.99,
        plataform: [icon_plataform.SEGA, icon_plataform.XBOX],
        releaseDate:"18-01-1990",
        developer:"SEGA",
        gender:[genderList.aventura],
        fomat:"Fisico",
        gamers:"Un jugador",
        fileSize:"SEGA",
        /* aca agregar si faltan mas */
    },

    {
        id: 5,
        name: "GHOSTBUSTER",
        description:"Con este juego de Cazafantasmas vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.",
        image: "/images/home/Ghostbuster.jpg",
        price: 2799.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"08-10-2023",
        developer:"Remastered",
        gender:[genderList.accion, genderList.aventura],
        fomat:"Fisico",
        gamers:"Multijugador",
        fileSize:"Remastered",
        /* aca agregar si faltan mas */
    },

    {
        id: 6,
        name:"Warcraft 3: The frozen throne",
        description:"Warcraft: The Frozen Throne es un videojuego de estrategia en tiempo real y expansión de Warcraft III: Reign of Chaos desarrollado por Blizzard Entertainment. La instalación de Warcraft III: Reign of Chaos es necesaria para poder jugar a esta expansión.",
        image:"/images/home/Warcraft.jpg",
        price: 1899.99,
        plataform: [icon_plataform.PC],
        releaseDate:"01-11-2020",
        developer:"Blizzard Entertainment",
        gender:[genderList.estrategia],
        fomat:"Fisico",
        gamers:"Multijugador",
        fileSize:"Original",
        /* aca agregar si faltan mas */
    },

    {
        id: 7,
        name: "SuperMario Bro. U Deluxe",
        description:"Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores.Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.",
        image: "/images/home/SuperMario.jpg",
        price: 5099.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"08-10-2018",
        developer:"Nintendo, Sora, Bandai Namco",
        gender:[genderList.accion,genderList.pelea],
        fomat:"Fisico",
        gamers:"Multijugador",
        fileSize:"Nintendo",
        /* aca agregar si faltan mas */
    },

    {
        id: 8,
        name: "Legend of Zelda: Breat of the wild",
        description:"Los juegos de la franquicia The Legend of Zelda marcaron un antes y después en el género de aventura. Convertite en Link para vencer a los villanos que hicieron de un pacífico reino un lugar inmerso en las tinieblas.Diversión sin fronteras.Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
        image: "/images/home/Zelda.jpg",
        price: 4899.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"07-07-2017",
        developer:"Nintendo",
        gender:[genderList.accion,genderList.aventura],
        fomat:"Fisico",
        gamers:"Multijugador",
        fileSize:"Nintendo",
        /* aca agregar si faltan mas */
    },

    {
        id: 9,
        name: "Metal Slug 3",
        description:"Metal Slug 3 es un videojuego que forma parte de la saga Metal Slug.",
        image: "/images/home/MetalSlug.jpg",
        price: 7599.99,
        plataform: [icon_plataform.PS, icon_plataform.SEGA],
        releaseDate:"02-10-2017",
        developer:"Sony",
        gender:[genderList.aventura],
        fomat:"Fisico",
        gamers:"Multijugador",
        fileSize:"Standar",
        /* aca agregar si faltan mas */
    },

    {
        id: 10,
        name: "Final Fantasy XII:CRISIS CORE",
        description: "Con este juego de Final Fantasy vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.",
        image: "/images/home/FF.jpg",
        price: 799.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"09-12-2022",
        developer:"Square Enix",
        gender:[genderList.accion,genderList.rpg],
        fomat:"Fisico",
        gamers:"Un jugador",
        fileSize:"Square Enix",
        /* aca agregar si faltan mas */
    },

    {
        id: 11,
        name: "Madden NFL 4",
        description: "Con este juego de Madden NFL vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores. Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.Diversión sin fronteras.Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
        image: "/images/home/madden.jpg",
        price: 10499.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"08-10-2023",
        developer:"Electronic Arts",
        gender:[genderList.deporte],
        fomat:"Digital",
        gamers:"Multijugador",
        fileSize:"Electronic Arts",
        /* aca agregar si faltan mas */
    },

    {
        id: 12,
        name: "Star Wars Battlefront ultimate",
        description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
        image: "/images/home/StarWars.jpg",
        price: 7799.99,
        plataform: [icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"04-11-2020",
        developer:"DICE",
        gender:[genderList.accion],
        fomat:"Digital",
        gamers:"Multijugador",
        fileSize:"Electronic Arts",
        /* aca agregar si faltan mas */
    },

    {
        id: 13,
        name: "Minecraft dungeons: Ultimate edition",
        description: "Minecraft es un videojuego líder dentro del género de la aventura y la acción, donde quien juega puede elegir entre supervivencia, creatividad y dificultad extrema. Gracias al casi infinito mundo de terrenos que presenta, es posible jugar durante horas y encontrar múltiples desafíos.Interactuá con otros jugadores.Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.",
        image: "/images/home/Minecraft.jpg",
        price: 9999.99,
        plataform: [icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"08-10-2023",
        developer:"Mojang",
        gender:[genderList.accion,genderList.rpg,genderList.aventura,genderList.estrategia],
        fomat:"Digital",
        gamers:"Multijugador",
        fileSize:"Xbox Game Studios",
        /* aca agregar si faltan mas */
    },

]
/* EXPORTS */
module.exports = product