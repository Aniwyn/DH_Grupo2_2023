-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2023 a las 04:32:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gamebook`
--
CREATE DATABASE IF NOT EXISTS `gamebook` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `gamebook`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `quantity` tinyint(3) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `developer`
--

CREATE TABLE `developer` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `developer`
--

INSERT INTO `developer` (`id`, `name`) VALUES
(1, 'Shiny Entertainment'),
(2, 'Konami'),
(3, 'SNK Corporation'),
(4, 'Nintendo'),
(5, 'Blizzard Entertainment'),
(6, 'Square Enix'),
(7, 'Electronic Arts'),
(8, 'DICE'),
(9, 'Mojang'),
(10, 'Bethesda Game Studios'),
(11, 'Microsoft Studios'),
(12, 'Maxis'),
(13, 'BioWare'),
(14, 'Sega, compile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `format`
--

CREATE TABLE `format` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `format`
--

INSERT INTO `format` (`id`, `name`) VALUES
(1, 'Fisico'),
(2, 'Digital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `name`) VALUES
(1, 'Accion'),
(2, 'Aventura'),
(3, 'Un jugador'),
(4, 'Peleas'),
(5, 'Estrategia'),
(6, 'RPG'),
(7, 'Deporte'),
(8, 'Historia'),
(9, 'Simulacion'),
(10, 'Exploracion'),
(11, 'Ciencia Ficcion'),
(12, 'Mundo Abierto'),
(13, 'Multijugador'),
(14, 'Fantasia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platform`
--

CREATE TABLE `platform` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `platform`
--

INSERT INTO `platform` (`id`, `name`) VALUES
(1, 'PC'),
(2, 'SEGA'),
(3, 'XBOX'),
(4, 'PS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `second_name` varchar(30) NOT NULL,
  `description_1` text NOT NULL,
  `description_2` text NOT NULL,
  `description_3` text NOT NULL,
  `description_4` text NOT NULL,
  `cover_image` varchar(80) NOT NULL,
  `price` int(11) NOT NULL,
  `release_date` date NOT NULL,
  `trailer` varchar(50) NOT NULL,
  `gameplay_image` varchar(50) NOT NULL,
  `id_rating_esrb` int(11) NOT NULL,
  `id_rating_pegi` int(11) NOT NULL,
  `id_developer` int(11) NOT NULL,
  `id_format` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `second_name`, `description_1`, `description_2`, `description_3`, `description_4`, `cover_image`, `price`, `release_date`, `trailer`, `gameplay_image`, `id_rating_esrb`, `id_rating_pegi`, `id_developer`, `id_format`) VALUES
(1, 'Warcraft 3', 'The Frozen Throne', 'Sumérgete en el mundo épico de Azeroth una vez más con \"Warcraft III: The Frozen Throne\". Esta expansión del famoso juego de estrategia en tiempo real te transportará a un reino lleno de magia, batallas y traiciones. Prepárate para una experiencia que expande los límites de la fantasía mientras luchas por el dominio y la supervivencia en un mundo al borde del colapso.', 'En \"Warcraft III: The Frozen Throne\", la historia continúa con nuevas y emocionantes aventuras que amplían aún más el rico universo de Warcraft. Viajarás a tierras desconocidas y enemigas, enfrentando desafíos mortales y descubriendo secretos oscuros que amenazan con desgarrar Azeroth. Con nuevas facciones, héroes y unidades, deberás dominar la estrategia y la magia para sobrevivir y prevalecer en este mundo cambiante.', 'El destino de héroes legendarios y villanos astutos descansa en tus manos mientras te sumerges en una campaña épica llena de giros inesperados y emocionantes batallas. Ya sea que elijas liderar a los nobles defensores de la Alianza o a los formidables miembros de la Horda, tus decisiones moldearán el destino de Azeroth y determinarán si la luz o las sombras prevalecen.', '¿Estás listo para enfrentarte a nuevos desafíos, forjar alianzas inquebrantables y descubrir los secretos del Trono Helado? \"Warcraft III: The Frozen Throne\" te invita a embarcarte en una aventura única que cautivará tu imaginación y pondrá a prueba tus habilidades estratégicas como nunca antes.', '/images/home/Warcraft.jpg', 7200, '2002-07-03', 'https://www.youtube.com/embed/iqB3KeiBLuw', '/images/products/W3TFT-gameplay.jpg', 3, 3, 5, 1),
(2, 'Tiny Toon Adventures', 'Buster\'s Hidden Treasure', 'Prepárate para una emocionante búsqueda llena de diversión y aventuras en \"Tiny Toon Adventures: Buster\'s Hidden Treasure\". Únete al valiente Buster Bunny y a sus amigos de la Universidad Acme mientras se embarcan en una misión para encontrar tesoros ocultos y detener los malvados planes del malvado Dr. Gene Splicer.', 'En \"Tiny Toon Adventures: Buster\'s Hidden Treasure\", el mundo colorido y animado de los personajes de Tiny Toons cobra vida en forma de un emocionante juego de plataformas. Acompaña a Buster Bunny mientras recorre niveles llenos de desafíos, saltos y enemigos traviesos. Usa la agilidad de Buster para superar obstáculos, recolecta zanahorias y reúne pistas para descubrir la ubicación de los tesoros escondidos.', 'Cada nivel presenta su propio conjunto de desafíos únicos, desde enfrentamientos contra jefes hasta travesías a través de mundos temáticos, cada uno inspirado en los episodios del exitoso programa de televisión. Los controles fluidos y la jugabilidad adictiva te mantendrán entretenido mientras exploras cada rincón en busca de secretos y recompensas.', 'Con gráficos vibrantes y una banda sonora alegre, el juego captura la esencia de la serie de dibujos animados mientras te sumerge en una experiencia llena de nostalgia y alegría. A medida que avanzas a través de la historia, te enfrentarás al malvado Dr. Gene Splicer y sus secuaces, desafiando tus habilidades de plataformas y resolución de acertijos. ¿Estás listo para unirte a Buster Bunny en esta emocionante aventura? \"Tiny Toon Adventures: Buster\'s Hidden Treasure\" te invita a explorar un mundo animado, enfrentar desafíos y disfrutar de una experiencia de juego clásica que seguramente te hará sonreír.', '/images/home/TinyToon.jpg', 3800, '1990-01-18', 'https://www.youtube.com/embed/EFtL3Ojp8Uk', '/images/products/TinyToonAventures-gameplay.jpg', 1, 2, 2, 1),
(3, 'GHOSTBUSTERS', '16-Bit Cartridge', 'Prepárate para enfrentar lo paranormal en \"Ghostbusters\" para Sega Genesis. Únete a un equipo de valientes cazafantasmas y adéntrate en una ciudad asediada por espíritus y entidades sobrenaturales en este clásico juego de acción y aventuras.', '\"Ghostbusters\" te coloca en el papel de un miembro novato del equipo de cazafantasmas, armado con tu mochila de protones y un objetivo claro: ¡capturar a los fantasmas que infestan la ciudad! Explora los icónicos lugares de Nueva York mientras te enfrentas a una variedad de espectros, poltergeists y apariciones maliciosas. Tendrás que desplegar tus habilidades de estrategia y apuntar con precisión para atrapar a estas criaturas traviesas y contener la amenaza paranormal.', 'Conviértete en un héroe al enfrentar jefes espectrales en batallas emocionantes y resuelve acertijos espeluznantes en tu búsqueda por limpiar la ciudad de la actividad fantasmal. Con cada captura exitosa, ganarás fondos que puedes invertir en mejoras y equipo para tu equipo, permitiéndote enfrentar desafíos aún mayores.', 'El juego combina elementos de acción, aventura y estrategia en un paquete entretenido que captura la esencia de la franquicia \"Ghostbusters\". Los gráficos de estilo retro y la banda sonora memorable añaden al ambiente nostálgico mientras luchas para salvar la ciudad de la invasión espectral. ¿Estás listo para tomar tu mochila de protones y enfrentarte a lo desconocido? \"Ghostbusters\" en Sega Genesis te desafía a convertirte en el cazafantasmas definitivo.', '/images/home/Ghostbuster.jpg', 2800, '2023-10-08', 'https://www.youtube.com/embed/CLLXiXh1onc', '/images/products/GHOSTBUSTERS-gameplay.jpg', 1, 2, 14, 1),
(4, 'Sonic 2', 'The Hedgehog', 'Acelera a través de emocionantes aventuras en \"Sonic the Hedgehog 2\". Únete al veloz erizo azul y a su inseparable compañero Tails en una misión para detener al malvado Dr. Robotnik y salvar la Isla Ángel de su maquinaria destructiva en este icónico juego de plataformas de Sega Genesis.', 'En \"Sonic the Hedgehog 2\", la velocidad y la diversión van de la mano mientras recorres entornos vibrantes y llenos de vida. Reúne anillos dorados para ganar vidas y velocidad mientras te deslizas a través de bucles, saltas sobre abismos y enfrentas enemigos en tu camino hacia la victoria. La incorporación de Tails como personaje jugable agrega un nuevo nivel de estrategia y posibilidades, ya que puedes elegir entre controlar a Sonic o aprovechar las habilidades de vuelo de Tails para explorar áreas ocultas.', 'Enfréntate al malvado Dr. Robotnik en su última hazaña diabólica y detén sus planes para conquistar la Isla Ángel. Con gráficos mejorados y nuevos obstáculos emocionantes, \"Sonic the Hedgehog 2\" te desafía a dominar cada nivel y a recolectar las preciadas Esmeraldas del Caos para desbloquear el verdadero poder de Sonic.', 'La música icónica y la jugabilidad rápida hacen de este juego una experiencia inolvidable para los fanáticos de Sonic y los amantes de los juegos de plataformas clásicos. Corre contra el tiempo, explora zonas secretas y demuestra que eres el erizo más rápido del planeta en \"Sonic the Hedgehog 2\". Listo para girar, saltar y correr a velocidades supersónicas, este juego te llevará en un viaje lleno de adrenalina mientras luchas por salvar la isla y derrotar al malvado Dr. Robotnik una vez más.', '/images/home/Sonic2.jpg', 3500, '2022-07-05', 'https://www.youtube.com/embed/ytistojxzn4', '/images/products/Sonic2-gameplay.jpg', 1, 2, 14, 1),
(5, 'Earthworm Jim', 'Sega Genesis', 'Sumérgete en una loca y extravagante aventura con \"Earthworm Jim\". Conviértete en Jim, un gusano común que ha sido equipado con un traje espacial de alta tecnología, y embárcate en una misión intergaláctica para salvar a la hermosa princesa What\'s-Her-Name de las garras del malvado Queen Pulsating, Bloated, Festering, Sweaty, Pus-filled, Malformed, Slug-for-a-Butt.', '\"Earthworm Jim\" es una mezcla única de acción, plataformas y humor surrealista que te llevará a través de niveles extravagantes y desafiantes. Con el traje espacial especial, Jim puede realizar acrobacias increíbles, usar su cabeza como látigo y enfrentar enemigos extravagantes mientras navega por mundos coloridos y excéntricos.', 'La trama se desarrolla en una serie de episodios, cada uno con su propio estilo visual y desafíos únicos. Desde luchar contra vacas alienígenas en un rodeo espacial hasta navegar por laberintos cerebrales en el interior de una ballena, cada momento es una experiencia inolvidable y llena de humor absurdo.', 'La música memorable y los efectos de sonido complementan la extravagancia del juego, sumergiéndote aún más en el universo cómico de \"Earthworm Jim\". Prepárate para enfrentar jefes inusuales, resolver puzles extravagantes y reírte mientras te enfrentas a la locura intergaláctica en una de las aventuras más únicas en la historia de los videojuegos. ¿Estás listo para unirte a Jim en su búsqueda para rescatar a la princesa y salvar el universo? \"Earthworm Jim\" te desafía a abrazar la locura y la diversión en una experiencia que te mantendrá entretenido y sorprendido en cada paso del camino.', '/images/home/Worm.jpg', 3000, '1995-03-08', 'https://www.youtube.com/embed/jYKHummrJDw', '/images/products/EarthwormJim-gameplay.jpg', 1, 2, 1, 1),
(6, 'Metal Slug 3', 'Metal Slug', 'Entra en el caos de la guerra y la acción intensa con \"Metal Slug 3\". Únete a la élite de la fuerza militar en una lucha desesperada contra una amenaza extraterrestre. Con una mezcla de adrenalina, armas poderosas y una jugabilidad clásica, prepárate para una experiencia explosiva como ninguna otra.', '\"Metal Slug 3\" te sumerge en una batalla épica contra alienígenas hostiles y fuerzas enemigas en una serie de niveles llenos de acción. Como miembro de los Metal Slug, deberás pilotar tanques y vehículos armados mientras avanzas a través de entornos destructibles y llenos de peligros. El juego ofrece una amplia variedad de armas para aniquilar a tus enemigos, desde ametralladoras hasta lanzallamas y lanzacohetes.', 'Cada nivel presenta una mezcla única de desafíos, enemigos y trampas mortales. Desde junglas infestadas de enemigos hasta bases subterráneas y acuáticas, \"Metal Slug 3\" mantiene la acción fresca y emocionante en cada paso del camino. La capacidad de jugar con un amigo en modo cooperativo añade otra dimensión a la diversión, permitiendo una experiencia compartida llena de explosiones y caos.', 'Los gráficos detallados y llenos de estilo pixel art, combinados con una emocionante banda sonora, crean una atmósfera intensa que sumerge a los jugadores en la experiencia de combate. La historia te lleva desde enfrentamientos en la Tierra hasta confrontaciones en el espacio exterior, manteniéndote enganchado mientras descubres los secretos detrás de la invasión alienígena. Prepárate para enfrentar jefes desafiantes y situaciones impredecibles en una experiencia de juego que combina la nostalgia de los arcades con la intensidad moderna. \"Metal Slug 3\" es una montaña rusa de acción y emoción que te mantendrá al borde de tu asiento mientras luchas por la supervivencia de la humanidad.', '/images/home/MetalSlug.jpg', 3600, '2017-10-02', 'https://www.youtube.com/embed/618yA_WYK4c', '/images/products/MetalSlug3-gameplay.jpg', 3, 3, 3, 1),
(7, 'SuperMario Bro. U Deluxe', 'Mario Saga', '¡Prepárate para un viaje lleno de diversión y aventuras con \"Super Mario Bros. U Deluxe\"! Únete a Mario y sus amigos en una emocionante odisea a través del Reino Champiñón mientras luchan contra Bowser y su ejército de secuaces. Con saltos espectaculares, desafíos creativos y una jugabilidad clásica que ha cautivado a generaciones, este juego te llevará a un mundo lleno de color y sorpresas.', 'En \"Super Mario Bros. U Deluxe\", la diversión y la nostalgia se fusionan en un juego de plataformas clásico. Viaja a través de niveles ingeniosamente diseñados, recolecta monedas brillantes y power-ups icónicos, y descubre secretos ocultos en cada rincón. Con personajes como Mario, Luigi, Toad y Toadette, cada uno con habilidades únicas, tendrás la libertad de elegir un estilo de juego que se adapte a ti.', 'Explora una variedad de mundos temáticos, desde exuberantes praderas hasta desafiantes castillos, mientras te enfrentas a jefes épicos en tu búsqueda por salvar a la princesa. Además de la emocionante campaña principal, el desafiante modo \"New Super Luigi U\" pondrá a prueba tus habilidades de plataformas en niveles renovados para una experiencia fresca y emocionante.', 'Reúne a tus amigos en el modo multijugador cooperativo o competitivo y disfruten juntos de la diversión caótica. Con gráficos vibrantes, controles precisos y una jugabilidad atemporal, \"Super Mario Bros. U Deluxe\" te invita a sumergirte en un mundo lleno de aventuras y sonrisas.', '/images/home/SuperMario.jpg', 5100, '2018-07-03', 'https://www.youtube.com/embed/z3s8vB_hw6c', '/images/products/SuperMarioBroUDeluxe-gameplay.jpg', 3, 3, 4, 1),
(8, 'Legend of Zelda', 'Breat of the wild', 'Sumérgete en el mágico mundo de \"The Legend of Zelda: Breath of the Wild\". Explora un Hyrule expansivo y maravilloso mientras asumes el papel de Link en una épica odisea llena de misterios y aventuras.', '\"The Legend of Zelda: Breath of the Wild\" te transporta a un Hyrule expansivo y misterioso, donde la libertad es tu mayor aliada. Explora un mundo lleno de vida y secretos, desde exuberantes praderas hasta antiguas ruinas. Conviértete en Link, enfrenta desafíos ingeniosos y enemigos formidables, y descubre la historia detrás de la lucha contra el temible Calamity Ganon.', 'Este juego redefine la experiencia de \"Zelda\" al permitirte abordar mazmorras y desafíos de manera no lineal. Utiliza armas, habilidades y física realista para resolver puzles y superar obstáculos. Entra en contacto con personajes memorables y desentraña los misterios de un pasado legendario mientras te sumerges en una dirección artística impresionante y una banda sonora evocadora.', '\"Breath of the Wild\" es más que un juego: es una odisea emocional y una exploración íntima de un mundo diverso y cautivador. Embárcate en una aventura épica que combina la magia de \"Zelda\" con una nueva visión de la jugabilidad, la narrativa y la conexión con la naturaleza.', '/images/home/Zelda.jpg', 5700, '2017-07-07', 'https://www.youtube.com/embed/KzQRiYqt6LY', '/images/products/LOZ-BOTW-gameplay.jpg', 3, 3, 4, 1),
(9, 'Final Fantasy XII', 'CRISIS CORE', '\"Final Fantasy XII: Crisis Core\" te lleva a un mundo de fantasía donde los conflictos políticos y la magia chocan en un escenario repleto de misterios y conspiraciones. Juegas como Zack, un miembro del prestigioso grupo SOLDADO, mientras sigues sus pasos desde humildes inicios hasta enfrentamientos épicos.', 'La jugabilidad combina elementos de rol y acción en tiempo real, permitiéndote explorar entornos detallados y enfrentar enemigos en combates fluidos. La mecánica de cartas y las materias añaden profundidad a las batallas, y los límites emocionales te permiten desatar poderosos ataques cuando la emoción y la necesidad lo requieren.', 'La historia se centra en la relación entre Zack y el icónico Cloud Strife, así como en la historia detrás de personajes familiares de \"Final Fantasy VII\". A medida que avanzas, experimentarás momentos emotivos, amistades profundas y sacrificios conmovedores que te conectarán con los personajes y la trama en un nivel emocional.', 'Los gráficos impresionantes y las secuencias de video inolvidables crean una atmósfera que te transporta a un mundo de magia y maravilla. La música melódica y conmovedora de la serie \"Final Fantasy\" acompaña cada momento, añadiendo una capa adicional de inmersión. ¿Estás listo para explorar el pasado de \"Final Fantasy VII\" y descubrir los secretos que dieron forma a la historia? \"Final Fantasy XII: Crisis Core\" te invita a unirte a Zack en su viaje inolvidable de valor, amistad y heroísmo.', '/images/home/FF.jpg', 18000, '2022-12-09', 'https://www.youtube.com/embed/lMGrC58PHqs', '/images/products/FFXII-gameplay.jpg', 2, 3, 6, 1),
(10, 'Madden 24', 'National Football League', 'Sumérgete en la emoción del fútbol americano virtual con \"Madden NFL 24\". En este título icónico de la franquicia Madden, podrás experimentar la intensidad de la liga de fútbol americano de una manera única. Desde tácticas estratégicas en el campo hasta emocionantes enfrentamientos entre equipos, \"Madden NFL 24\" te sumergirá en el mundo del deporte más popular de América.', '\"Madden NFL 24\" es la última entrega de la aclamada serie de videojuegos que simula la experiencia del fútbol americano. El juego te permite controlar y personalizar tu equipo favorito de la NFL, desde la selección de jugadores y estrategias hasta la coordinación en el campo durante cada partido. Puedes elegir jugar en el papel de entrenador o asumir el control directo de tus jugadores estrella para vivir la emoción del campo de juego.', 'El juego presenta una amplia gama de modos de juego, incluyendo la Liga Madden, donde puedes competir contra otros jugadores en línea y construir tu propio legado en la liga virtual. Además, el modo Franquicia te permite tomar el control total de un equipo y llevarlo a la gloria a lo largo de varias temporadas. También puedes participar en el Modo Carrera, donde creas y personalizas a tu propio jugador y lo guías desde la universidad hasta la NFL.', 'La jugabilidad combina acción en tiempo real con elementos estratégicos, permitiéndote llamar jugadas, hacer cambios en la línea de scrimmage y coordinar tácticas defensivas. Los controles intuitivos y realistas te sumergen en la experiencia del deporte, mientras que los gráficos detallados y los efectos de sonido auténticos te hacen sentir como si estuvieras en el estadio. Desde emocionantes partidos de temporada hasta enfrentamientos en los playoffs, \"Madden NFL 24\" te llevará a través de una emocionante temporada de fútbol americano, donde cada pase, carrera y tackle cuenta. Con cada touchdown y cada victoria, estarás un paso más cerca de convertirte en un campeón de la NFL.', '/images/home/madden.jpg', 10500, '2023-10-08', 'https://www.youtube.com/embed/UVZ0IIeW2mw', '/images/products/MaddenNFL24-gameplay.jpg', 3, 3, 7, 1),
(11, 'Star Wars Battlefront', 'Ultimate Edition', 'Sumérgete en el emocionante universo de Star Wars con \"Star Wars Battlefront\". En este juego de acción multijugador, podrás unirte a las filas de la Alianza Rebelde o el Imperio Galáctico y librar intensas batallas en icónicos mundos de la saga. Prepárate para vivir la experiencia de combate y la emoción de las películas como nunca antes.', '\"Star Wars Battlefront\" te permite participar en batallas épicas y dinámicas que recrean algunos de los momentos más memorables de la saga. Ya sea luchando en los campos de Hoth, defendiendo las selvas de Endor o enfrentándote en duelos de sables de luz, el juego te sumergirá en la acción de Star Wars con detalles impresionantes. El juego ofrece una variedad de modos multijugador que te permiten unirte a tus amigos en combates emocionantes. Desde enfrentamientos a gran escala con vehículos y tropas hasta duelos en equipo y modos de asalto, cada partida es una experiencia única y llena de emoción.', 'Los gráficos realistas y los efectos visuales te harán sentir como si estuvieras en el corazón de la galaxia. Los mapas detallados y las recreaciones precisas de los personajes y vehículos icónicos agregan un nivel de autenticidad que atraerá a los fanáticos de Star Wars y los entusiastas de los juegos de acción.', 'La música icónica de John Williams y los efectos de sonido auténticos te sumergen aún más en el mundo de Star Wars. Desde los rugidos de los TIE Fighters hasta el siseo de los sables de luz, cada detalle contribuye a la inmersión en la galaxia muy, muy lejana. \"Star Wars Battlefront\" te invita a tomar las armas, unirte a tus camaradas y vivir la experiencia de ser un soldado en medio de la lucha entre el bien y el mal en el universo de Star Wars. ¿Estás listo para unirte a la batalla?', '/images/home/StarWars.jpg', 15000, '2020-11-04', 'https://www.youtube.com/embed/d0De2LdZvsI', '/images/products/StarWarsBattlefront-gameplay.jpg', 3, 4, 8, 1),
(12, 'Minecraft dungeons', 'Ultimate edition', 'Sumérgete en una emocionante aventura en el mundo de Minecraft de una manera completamente nueva con \"Minecraft Dungeons\". Explora mazmorras, lucha contra monstruos y busca tesoros en un juego de acción y rol lleno de emoción y desafíos. Reúne a tus amigos y prepárate para una experiencia única en el universo de los bloques.', '\"Minecraft Dungeons\", te conviertes en un valiente aventurero que se embarca en una búsqueda para enfrentar la malvada presencia conocida como el Archi-Illager. Explora entornos llenos de enemigos, puzles y secretos, mientras te abres camino a través de mazmorras generadas aleatoriamente y luchas contra jefes aterradores.', 'El juego presenta una jugabilidad accesible y emocionante que combina la estética de Minecraft con elementos de rol y acción. Puedes personalizar a tu héroe, elegir entre una variedad de armas y artefactos únicos, y usar habilidades especiales para enfrentar los desafíos. La cooperación en el modo multijugador te permite unirte a tus amigos para enfrentar juntos las mazmorras y compartir la emoción. A medida que avanzas, descubrirás nuevas armas, armaduras y artefactos poderosos que te permitirán enfrentar enemigos cada vez más formidables. La mecánica de nivelación te permite personalizar tu estilo de juego y crear un personaje que se adapte a tus preferencias y estrategias.', 'Con gráficos coloridos y encantadores que capturan la esencia del mundo de Minecraft, \"Minecraft Dungeons\" te sumerge en una experiencia llena de acción y exploración. La música y los efectos de sonido te acompañan en tu búsqueda, creando una atmósfera inmersiva mientras enfrentas desafíos y buscas tesoros. Prepárate para enfrentar las mazmorras, recolectar tesoros y unirte a una comunidad de aventureros en \"Minecraft Dungeons\". ¿Estás listo para explorar un nuevo aspecto del universo de Minecraft?', '/images/home/Minecraft.jpg', 10000, '2023-10-08', 'https://www.youtube.com/embed/CoZ2V7XsSYk', '/images/products/MinecraftDungeons-gameplay.jpg', 2, 2, 9, 1),
(13, 'Starfield', 'PREMIUM EDITION', 'Prepárate para una aventura épica en las estrellas con \"Starfield\". En este próximo juego de rol de ciencia ficción de Bethesda Game Studios, te embarcarás en un viaje intergaláctico a mundos desconocidos, secretos ocultos y misterios inexplorados. Con la promesa de exploración, descubrimientos y una narrativa envolvente, \"Starfield\" te llevará a las profundidades del espacio como nunca antes.', '\"Starfield\" te sitúa en un futuro lejano donde la humanidad ha colonizado el espacio exterior. Como un intrépido explorador, tendrás la oportunidad de pilotar tu propia nave estelar y viajar a través de sistemas solares llenos de planetas únicos, estaciones espaciales y civilizaciones alienígenas. La libertad de elegir tu destino, desde ser un comerciante espacial hasta un cazador de tesoros, agrega una dimensión emocionante a la experiencia.', 'La narrativa será un elemento clave en \"Starfield\", con una historia intrigante y decisiones que afectarán el curso de tus aventuras. Los detalles sobre la trama aún son escasos, pero la promesa de un mundo lleno de personajes memorables y misterios por descubrir ha capturado la atención de los jugadores. Con la experiencia de mundo abierto característica de Bethesda, puedes esperar una exploración profunda, personalización de personajes y posibilidades de interactuar con el entorno y los NPC. Los gráficos y el diseño de los mundos estarán a la altura de las expectativas, creando un ambiente visualmente impresionante que te sumerge en un futuro espacial creíble.', 'La banda sonora y los efectos de sonido juegan un papel importante en la creación de la atmósfera del juego, llevándote desde la calma del espacio profundo hasta la tensión de los encuentros peligrosos. En resumen, \"Starfield\" promete ser una experiencia emocionante para los fanáticos de la ciencia ficción y los juegos de rol. Prepárate para explorar lo desconocido, enfrentar desafíos cósmicos y marcar tu propio camino en las estrellas.', '/images/caratulas/Starfield.jpg', 21587, '2023-10-08', 'https://www.youtube.com/embed/kfYEiTdsyas', '/images/products/STARFIELD-gameplay.jpg', 3, 3, 10, 1),
(14, 'Age of Empires', 'The Conqueror', '¡Sumérgete en la época de los grandes imperios y conquistas en Age of Empires: The Conqueror! En este emocionante juego de estrategia en tiempo real, liderarás civilizaciones antiguas hacia la gloria y la dominación del mundo. Construye imperios, reúne ejércitos poderosos, investiga tecnologías avanzadas y forja alianzas en un mundo lleno de desafíos y oportunidades.', 'Age of Empires: The Conqueror te permite elegir entre varias civilizaciones, cada una con sus propias ventajas y desafíos únicos. Explora mapas expansivos, comercia con otras civilizaciones y lucha en batallas épicas que abarcan diferentes eras históricas. La estrategia y la toma de decisiones inteligentes son clave para el éxito en este juego que te llevará a través de la historia.', 'Con gráficos impresionantes y una jugabilidad adictiva, Age of Empires: The Conqueror te sumergirá en una experiencia de juego emocionante y educativa. Aprende sobre la historia mientras forjas tu propio camino hacia la conquista en este título aclamado por la crítica.', '¿Estás listo para liderar tu civilización hacia la grandeza y la conquista en Age of Empires: The Conqueror?', '/images/home/aoe2.png', 3000, '2000-08-24', 'https://www.youtube.com/watch?v=QGAh6IwahqE', '/images/products/aoe2-gameplay.jpg', 3, 3, 11, 1),
(15, 'Spore', 'Galactic Adventures', 'Spore es un juego revolucionario que te permite crear y evolucionar tu propia criatura desde un organismo unicelular hasta una civilización espacial. En este emocionante viaje a través de la evolución, tomarás decisiones que afectarán el destino de tu especie y explorarás un universo lleno de planetas, criaturas y desafíos.', 'El juego se divide en cinco etapas principales: célula, criatura, tribu, civilización y espacio. En cada etapa, tendrás la oportunidad de personalizar tu criatura y tomar decisiones que determinarán su desarrollo. ¿Serás pacífico o agresivo? ¿Te adaptarás a tu entorno o lo cambiarás a tu favor? Las elecciones son tuyas.', 'A medida que avanzas a través de las etapas, tu criatura evolucionará y ganará nuevas habilidades y características. También podrás establecer relaciones con otras especies, comerciar, formar alianzas o entrar en conflictos en tu búsqueda por la dominación o la cooperación.', 'Spore es una experiencia única que combina la creatividad con la evolución y la exploración. Diseña tus propias criaturas, vehículos y edificios, y compártelos con otros jugadores en línea. Explora un universo lleno de planetas generados aleatoriamente y descubre nuevas formas de vida mientras avanzas hacia la conquista del espacio.', '/images/home/spore.png', 3500, '2008-09-04', 'https://www.youtube.com/watch?v=zi2GvqboQfY', '/images/products/spore-gameplay.jpg', 2, 3, 12, 1),
(16, 'Mass Effect', 'Andromeda', 'Embárcate en una emocionante odisea espacial en Mass Effect: Andromeda. En esta entrega de la icónica serie Mass Effect, explorarás la galaxia de Andrómeda en busca de un nuevo hogar para la humanidad. Eres un explorador de Pathfinder, líder de un equipo de élite que enfrentará peligros desconocidos y desafíos emocionantes mientras colonizas mundos y te enfrentas a nuevas amenazas.', 'El juego ofrece una historia épica llena de personajes memorables y decisiones que afectarán el destino de la galaxia. Personaliza a tu personaje, elige tu camino en el juego y forma relaciones con otros personajes mientras descubres los secretos de Andrómeda.', 'Mass Effect: Andromeda combina una jugabilidad de disparos intensa con elementos de rol, permitiéndote mejorar tus habilidades, desbloquear poderes y tomar decisiones estratégicas en el combate. Explora mundos abiertos, descubre tecnologías alienígenas y desvela los misterios de una nueva galaxia en constante evolución.', 'Con impresionantes gráficos y efectos visuales, Mass Effect: Andromeda te sumerge en un universo futurista lleno de maravillas y peligros. Viaja a través de vastos paisajes alienígenas, interactúa con diversas especies y lucha contra enemigos en emocionantes batallas espaciales.', '/images/home/meandromeda.png', 18000, '2017-03-21', 'https://www.youtube.com/watch?v=X6PJEmEHIaY', '/images/products/meandromeda-gameplay.jpg', 4, 4, 13, 1),
(17, 'The Elder Scrolls V', 'Skyrim', 'Sumérgete en un vasto mundo de fantasía en The Elder Scrolls V: Skyrim. Este juego de rol épico te lleva a la región de Skyrim, un lugar lleno de dragones, magia y peligros. Eres el Sangre de Dragón, un héroe destinado a enfrentar una antigua profecía y salvar Skyrim de la destrucción.', 'Explora un mundo abierto impresionante lleno de ciudades, aldeas, mazmorras y paisajes inexplorados. Toma decisiones que influirán en el destino de Skyrim y forja tu propio camino en este vasto reino lleno de secretos y aventuras.', 'The Elder Scrolls V: Skyrim ofrece una jugabilidad rica y variada, que te permite personalizar a tu personaje, aprender magia, mejorar tus habilidades y embarcarte en misiones épicas. Enfréntate a dragones poderosos, descubre artefactos legendarios y conviértete en un maestro en tu oficio.', 'Con gráficos impresionantes, música envolvente y una narrativa cautivadora, Skyrim te sumerge en una experiencia de juego inmersiva como ninguna otra. Explora antiguas tumbas, conoce a personajes memorables y elige tu propio camino en este mundo de fantasía.', '/images/home/skyrim.png', 7400, '2011-11-11', 'https://www.youtube.com/watch?v=JSRtYpNRoN0', '/images/products/skyrim-gameplay.png', 4, 5, 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_cart`
--

CREATE TABLE `product_cart` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_genre`
--

CREATE TABLE `product_genre` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product_genre`
--

INSERT INTO `product_genre` (`id`, `id_product`, `id_genre`) VALUES
(1, 1, 5),
(2, 1, 13),
(3, 2, 2),
(4, 2, 3),
(5, 3, 1),
(6, 3, 2),
(7, 3, 13),
(11, 4, 1),
(12, 4, 2),
(13, 4, 13),
(14, 5, 1),
(15, 5, 2),
(16, 5, 3),
(17, 6, 2),
(18, 6, 13),
(19, 7, 1),
(20, 7, 4),
(21, 7, 13),
(22, 8, 1),
(23, 8, 2),
(24, 8, 13),
(25, 9, 1),
(26, 9, 3),
(27, 9, 6),
(28, 10, 7),
(29, 10, 13),
(30, 11, 13),
(31, 12, 1),
(32, 12, 2),
(33, 12, 5),
(34, 12, 6),
(35, 12, 13),
(36, 13, 1),
(37, 13, 13),
(38, 14, 5),
(39, 14, 8),
(40, 14, 9),
(41, 14, 13),
(42, 15, 5),
(43, 15, 9),
(44, 15, 10),
(45, 16, 1),
(46, 16, 6),
(47, 16, 10),
(48, 16, 11),
(49, 17, 6),
(50, 17, 12),
(51, 17, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_platform`
--

CREATE TABLE `product_platform` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_platform` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product_platform`
--

INSERT INTO `product_platform` (`id`, `id_product`, `id_platform`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 2, 3),
(4, 3, 2),
(5, 3, 4),
(6, 4, 2),
(7, 4, 4),
(8, 5, 2),
(9, 5, 3),
(10, 6, 2),
(11, 6, 4),
(12, 7, 3),
(13, 7, 4),
(14, 8, 3),
(15, 8, 4),
(16, 9, 3),
(17, 9, 4),
(18, 10, 3),
(19, 10, 4),
(20, 11, 1),
(21, 11, 3),
(22, 12, 1),
(23, 12, 3),
(24, 13, 1),
(25, 13, 3),
(26, 14, 1),
(27, 15, 1),
(28, 16, 1),
(29, 16, 3),
(30, 16, 4),
(31, 17, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rating_esrb`
--

CREATE TABLE `rating_esrb` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rating_esrb`
--

INSERT INTO `rating_esrb` (`id`, `name`, `image`) VALUES
(1, 'ESRB_E', '/images/rankings/ESRB_E.svg'),
(2, 'ESRB_E10', '/images/rankings/ESRB_E10plus.svg'),
(3, 'ESRB_T', '/images/rankings/ESRB_T.svg'),
(4, 'ESRB_M', '/images/rankings/ESRB_M.svg'),
(5, 'ESRB_AO', '/images/rankings/ESRB_AO.svg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rating_pegi`
--

CREATE TABLE `rating_pegi` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rating_pegi`
--

INSERT INTO `rating_pegi` (`id`, `name`, `image`) VALUES
(1, 'PEGI_3', '/images/rankings/PEGI_3.png'),
(2, 'PEGI_7', '/images/rankings/PEGI_7.png'),
(3, 'PEGI_12', '/images/rankings/PEGI_12.png'),
(4, 'PEGI_16', '/images/rankings/PEGI_16.png'),
(5, 'PEGI_18', '/images/rankings/PEGI_18.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password_hash` varchar(100) NOT NULL,
  `avatar` varchar(50) NOT NULL DEFAULT 'monster0.png',
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `user_name`, `email`, `password_hash`, `avatar`, `id_category`) VALUES
(1, 'root', 'root', 'root@root.com', '$2a$10$/BMYfncxDWKujIpU9uL97.JHW3lDhuiDzZWabyX1xAFwMojtpw8f6', 'monster1.png', 1),
(2, 'admin', 'admin', 'admin@admin.com', '$2a$10$nBCCOq0cUV9evDOLRuRM3umSp93ZBFgfOHGCb70CQc4o4TFvTq3te', 'monster2.png', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_user` (`id_user`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `developer`
--
ALTER TABLE `developer`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `format`
--
ALTER TABLE `format`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `platform`
--
ALTER TABLE `platform`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_rating_ESRB` (`id_rating_esrb`),
  ADD KEY `FK_rating_PEGI` (`id_rating_pegi`),
  ADD KEY `FK_developer` (`id_developer`),
  ADD KEY `FK_format` (`id_format`);

--
-- Indices de la tabla `product_cart`
--
ALTER TABLE `product_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_product_cart` (`id_product`),
  ADD KEY `FK_cart_product` (`id_cart`);

--
-- Indices de la tabla `product_genre`
--
ALTER TABLE `product_genre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_product` (`id_product`),
  ADD KEY `FK_genre` (`id_genre`);

--
-- Indices de la tabla `product_platform`
--
ALTER TABLE `product_platform`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_product_plataform` (`id_product`),
  ADD KEY `FK_platform_product` (`id_platform`);

--
-- Indices de la tabla `rating_esrb`
--
ALTER TABLE `rating_esrb`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rating_pegi`
--
ALTER TABLE `rating_pegi`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_category` (`id_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `developer`
--
ALTER TABLE `developer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `format`
--
ALTER TABLE `format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `platform`
--
ALTER TABLE `platform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_genre`
--
ALTER TABLE `product_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `product_platform`
--
ALTER TABLE `product_platform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `rating_esrb`
--
ALTER TABLE `rating_esrb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `rating_pegi`
--
ALTER TABLE `rating_pegi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_developer` FOREIGN KEY (`id_developer`) REFERENCES `developer` (`id`),
  ADD CONSTRAINT `FK_format` FOREIGN KEY (`id_format`) REFERENCES `format` (`id`),
  ADD CONSTRAINT `FK_rating_ESRB` FOREIGN KEY (`id_rating_esrb`) REFERENCES `rating_esrb` (`id`),
  ADD CONSTRAINT `FK_rating_PEGI` FOREIGN KEY (`id_rating_pegi`) REFERENCES `rating_pegi` (`id`);

--
-- Filtros para la tabla `product_cart`
--
ALTER TABLE `product_cart`
  ADD CONSTRAINT `FK_cart_product` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id`),
  ADD CONSTRAINT `FK_product_cart` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_genre`
--
ALTER TABLE `product_genre`
  ADD CONSTRAINT `FK_genre` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `FK_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_platform`
--
ALTER TABLE `product_platform`
  ADD CONSTRAINT `FK_platform_product` FOREIGN KEY (`id_platform`) REFERENCES `platform` (`id`),
  ADD CONSTRAINT `FK_product_plataform` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
