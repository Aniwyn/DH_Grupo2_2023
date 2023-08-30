const icon_plataform = {
    "PC": ["PC","fa-brands fa-windows"],
    "PS": ["PS","fa-brands fa-playstation"],
    "XBOX": ["XBOX","fa-brands fa-xbox"],
    "SEGA": ["SEGA","fa-solid fa-gamepad"],
    "SWITCH": ["SWITCH", "fa-solid fa-gamepad-modern"]
}

const genderList = {
    accion: "Acción",
    aventura: "Aventura",
    estrategia: "Estrategia en tiempo real",
    pelea: "Peleas",
    rpg: "RPG",
    deporte: "Deporte",
    multiplayer: "Multijugador",
    onePlayer: "Un jugador",
}

const product = [
    {
        id: 1,
        name: "GHOSTBUSTERS",
        sub_name:"Sega Genesis",
        description:"Con este juego de Cazafantasmas vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.",
        image: "/images/home/Ghostbuster.jpg",
        price: 2799.99,
        plataform: [icon_plataform.PS, icon_plataform.SEGA],
        releaseDate:"08 - 10 - 2023",
        developer:"Remastered",
        gender:[genderList.accion, genderList.aventura, genderList.multiplayer],
        fomat:"Fisico",
        trailer: "https://www.youtube.com/embed/CLLXiXh1onc",
        gameplay: "/images/products/GHOSTBUSTERS-gameplay.jpg"
        /* aca agregar si faltan mas */
    },   
    {
        id: 2,
        name: "Sonic 2",
        sub_name:"The Hedgehog",
        description:"Sumérgete en el mundo de Sonic Mania Plus, la edición mejorada del aclamado Sonic Mania para PS4. Disfruta de una aventura emocionante con tus personajes favoritos de Sonic en un formato físico que te permitirá conservar y coleccionar este clásico moderno. Desarrollado por Hyperkinectic Studios y publicado por SEGA, este juego de aventuras del 2018 te brinda horas de diversión y nostalgia.",
        image: "/images/home/Sonic2.jpg",
        price: 8999.99,
        plataform: [icon_plataform.PS, icon_plataform.SEGA],
        releaseDate:"05 - 07 - 2022",
        developer:"Hyperkinectic Studios",
        gender:[genderList.accion, genderList.aventura, genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/ytistojxzn4",
        gameplay: "/images/products/Sonic2-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 3,
        name: "Earthworm Jim",
        sub_name:"Sega Genesis",
        description:"Worm Jim es un videojuego de plataformas cuyo protagonista es una Lombriz llamada Jim que, enfundado en un traje cibernético y armado con una pistola, se dedica a recorrer el universo en busca de la princesa 'Cuál es su nombre'.",
        image: "/images/home/Worm.jpg",
        price: 8599.99,
        plataform: [icon_plataform.SEGA, icon_plataform.XBOX],
        releaseDate:"08 - 03 - 1995",
        developer:"Shiny Entertainment",
        gender:[genderList.accion, genderList.aventura, genderList.onePlayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/jYKHummrJDw",
        gameplay: "/images/products/EarthwormJim-gameplay.jpg"
        /* aca agregar si faltan mas */
    },
    
    {
        id: 4,
        name: "Tiny Toon Adventures",
        sub_name:"Buster's Hidden Treasure",
        description:"Los personajes de ACME Acres, Babs y Buster Bunny, Plucky Duck y Hamton Pig, te invitan a compartir sus grandes aventuras.",
        image: "/images/home/TinyToon.jpg",
        price: 7999.99,
        plataform: [icon_plataform.SEGA, icon_plataform.XBOX],
        releaseDate:"18 - 01 - 1990",
        developer:"Konami",
        gender:[genderList.aventura, genderList.onePlayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/EFtL3Ojp8Uk",
        gameplay: "/images/products/TinyToonAventures-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 5,
        name: "Metal Slug 3",
        sub_name:"Metal Slug",
        description:"Metal Slug 3 es un videojuego que forma parte de la saga Metal Slug.",
        image: "/images/home/MetalSlug.jpg",
        price: 7599.99,
        plataform: [icon_plataform.PS, icon_plataform.SEGA],
        releaseDate:"02 - 10 - 2017",
        developer:"SNK Corporation",
        gender:[genderList.aventura, genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/618yA_WYK4c",
        gameplay: "/images/products/MetalSlug3-gameplay.jpg"
        /* aca agregar si faltan mas */
    },
    {
        id: 6,
        name: "SuperMario Bro. U Deluxe",
        sub_name:"Mario Saga",
        description:"Con este juego de Mario vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores.Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.",
        image: "/images/home/SuperMario.jpg",
        price: 5099.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"08 - 10 - 2018",
        developer:"Nintendo",
        gender:[genderList.accion,genderList.pelea, genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/z3s8vB_hw6c",
        gameplay: "/images/products/SuperMarioBroUDeluxe-gameplay.jpg"
        /* aca agregar si faltan mas */
    },
    {
        id: 7,
        name:"Warcraft 3",
        sub_name:"The Frozen Throne",
        description:"Warcraft: The Frozen Throne es un videojuego de estrategia en tiempo real y expansión de Warcraft III: Reign of Chaos desarrollado por Blizzard Entertainment. La instalación de Warcraft III: Reign of Chaos es necesaria para poder jugar a esta expansión.",
        image:"/images/home/Warcraft.jpg",
        price: 1899.99,
        plataform: [icon_plataform.PC],
        releaseDate:"01 - 11 - 2020",
        developer:"Blizzard Entertainment",
        gender:[genderList.estrategia, genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/iqB3KeiBLuw",
        gameplay: "/images/products/W3TFT-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 8,
        name: "Legend of Zelda",
        sub_name:"Breat of the wild",
        description:"Los juegos de la franquicia The Legend of Zelda marcaron un antes y después en el género de aventura. Convertite en Link para vencer a los villanos que hicieron de un pacífico reino un lugar inmerso en las tinieblas.Diversión sin fronteras.Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
        image: "/images/home/Zelda.jpg",
        price: 4899.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"07 - 07 - 2017",
        developer:"Nintendo",
        gender:[genderList.accion,genderList.aventura, genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/KzQRiYqt6LY",
        gameplay: "/images/products/LOZ-BOTW-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 9,
        sub_name:"CRISIS CORE",
        name: "Final Fantasy XII",
        description: "Con este juego de Final Fantasy vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.",
        image: "/images/home/FF.jpg",
        price: 799.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"09 - 12 - 2022",
        developer:"Square Enix",
        gender:[genderList.accion,genderList.rpg, genderList.onePlayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/lMGrC58PHqs",
        gameplay: "/images/products/FFXII-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 10,
        name: "Madden 24",
        sub_name:"National Football League",
        description: "Con este juego de Madden NFL vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.Interactuá con otros jugadores. Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.Diversión sin fronteras.Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online.",
        image: "/images/home/madden.jpg",
        price: 10499.99,
        plataform: [icon_plataform.PS, icon_plataform.XBOX],
        releaseDate:"08 - 10 - 2023",
        developer:"Electronic Arts",
        gender:[genderList.deporte, genderList.multiplayer],
        format:"Digital",
        trailer: "https://www.youtube.com/embed/UVZ0IIeW2mw",
        gameplay: "/images/products/MaddenNFL24-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 11,
        name: "Star Wars Battlefront",
        sub_name:"Ultimate Edition",
        description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
        image: "/images/home/StarWars.jpg",
        price: 7799.99,
        plataform: [icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"04 - 11 - 2020",
        developer:"DICE",
        gender:[genderList.acciond, genderList.multiplayer],
        format:"Digital",
        trailer: "https://www.youtube.com/embed/d0De2LdZvsI",
        gameplay: "/images/products/StarWarsBattlefront-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

    {
        id: 12,
        name: "Minecraft dungeons",
        sub_name:"Ultimate edition",
        description: "Minecraft es un videojuego líder dentro del género de la aventura y la acción, donde quien juega puede elegir entre supervivencia, creatividad y dificultad extrema. Gracias al casi infinito mundo de terrenos que presenta, es posible jugar durante horas y encontrar múltiples desafíos.Interactuá con otros jugadores.Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.",
        image: "/images/home/Minecraft.jpg",
        price: 9999.99,
        plataform: [icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"08 - 10 - 2023",
        developer:"Mojang",
        gender:[genderList.accion,genderList.rpg,genderList.aventura,genderList.estrategia, genderList.multiplayer],
        format:"Digital",
        trailer: "https://www.youtube.com/embed/CoZ2V7XsSYk",
        gameplay: "/images/products/MinecraftDungeons-gameplay.jpg"
        /* aca agregar si faltan mas */
    },

 
    {
        id: 13,
        name: "STARFIELD (Early Access) + PRE-ORDER BONUS PC",
        sub_name:"PREMIUM EDITION",
        description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
        image: "/images/caratulas/Starfield.jpg",
        price: 21586.59,
        plataform:[icon_plataform.PC, icon_plataform.XBOX],
        releaseDate:"08 - 10 - 2023",
        developer:"Bethesda Game Studios",
        gender: [genderList.accion,genderList.multiplayer],
        format:"Fisico",
        trailer: "https://www.youtube.com/embed/kfYEiTdsyas",
        gameplay: "/images/products/STARFIELD-gameplay.jpg"
        /* aca agregar si faltan mas */
    }, 

]
/* EXPORTS */
module.exports = product