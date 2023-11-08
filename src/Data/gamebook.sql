-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2023 a las 00:00:05
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
(13, 'BioWare');

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
(13, 'Multijugador');

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
  `password_hash` varchar(100) NOT NULL,
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

INSERT INTO `product` (`id`, `name`, `second_name`, `description_1`, `description_2`, `description_3`, `description_4`, `cover_image`, `price`, `password_hash`, `release_date`, `trailer`, `gameplay_image`, `id_rating_esrb`, `id_rating_pegi`, `id_developer`, `id_format`) VALUES
(1, 'Warcraft 3', 'The Frozen Throne', 'Sumérgete en el mundo épico de Azeroth una vez más con \"Warcraft III: The Frozen Throne\". Esta expansión del famoso juego de estrategia en tiempo real te transportará a un reino lleno de magia, batallas y traiciones. Prepárate para una experiencia que expande los límites de la fantasía mientras luchas por el dominio y la supervivencia en un mundo al borde del colapso.', 'En \"Warcraft III: The Frozen Throne\", la historia continúa con nuevas y emocionantes aventuras que amplían aún más el rico universo de Warcraft. Viajarás a tierras desconocidas y enemigas, enfrentando desafíos mortales y descubriendo secretos oscuros que amenazan con desgarrar Azeroth. Con nuevas facciones, héroes y unidades, deberás dominar la estrategia y la magia para sobrevivir y prevalecer en este mundo cambiante.', 'El destino de héroes legendarios y villanos astutos descansa en tus manos mientras te sumerges en una campaña épica llena de giros inesperados y emocionantes batallas. Ya sea que elijas liderar a los nobles defensores de la Alianza o a los formidables miembros de la Horda, tus decisiones moldearán el destino de Azeroth y determinarán si la luz o las sombras prevalecen.', '¿Estás listo para enfrentarte a nuevos desafíos, forjar alianzas inquebrantables y descubrir los secretos del Trono Helado? \"Warcraft III: The Frozen Throne\" te invita a embarcarte en una aventura única que cautivará tu imaginación y pondrá a prueba tus habilidades estratégicas como nunca antes.', '/images/home/Warcraft.jpg', 7200, '', '2002-07-03', 'https://www.youtube.com/embed/iqB3KeiBLuw', '/images/products/W3TFT-gameplay.jpg', 3, 3, 5, 1),
(2, 'Tiny Toon Adventures', 'Buster\'s Hidden Treasure', 'Prepárate para una emocionante búsqueda llena de diversión y aventuras en \"Tiny Toon Adventures: Buster\'s Hidden Treasure\". Únete al valiente Buster Bunny y a sus amigos de la Universidad Acme mientras se embarcan en una misión para encontrar tesoros ocultos y detener los malvados planes del malvado Dr. Gene Splicer.', 'En \"Tiny Toon Adventures: Buster\'s Hidden Treasure\", el mundo colorido y animado de los personajes de Tiny Toons cobra vida en forma de un emocionante juego de plataformas. Acompaña a Buster Bunny mientras recorre niveles llenos de desafíos, saltos y enemigos traviesos. Usa la agilidad de Buster para superar obstáculos, recolecta zanahorias y reúne pistas para descubrir la ubicación de los tesoros escondidos.', 'Cada nivel presenta su propio conjunto de desafíos únicos, desde enfrentamientos contra jefes hasta travesías a través de mundos temáticos, cada uno inspirado en los episodios del exitoso programa de televisión. Los controles fluidos y la jugabilidad adictiva te mantendrán entretenido mientras exploras cada rincón en busca de secretos y recompensas.', 'Con gráficos vibrantes y una banda sonora alegre, el juego captura la esencia de la serie de dibujos animados mientras te sumerge en una experiencia llena de nostalgia y alegría. A medida que avanzas a través de la historia, te enfrentarás al malvado Dr. Gene Splicer y sus secuaces, desafiando tus habilidades de plataformas y resolución de acertijos. ¿Estás listo para unirte a Buster Bunny en esta emocionante aventura? \"Tiny Toon Adventures: Buster\'s Hidden Treasure\" te invita a explorar un mundo animado, enfrentar desafíos y disfrutar de una experiencia de juego clásica que seguramente te hará sonreír.', '/images/home/TinyToon.jpg', 3800, '', '1990-01-18', 'https://www.youtube.com/embed/EFtL3Ojp8Uk', '/images/products/TinyToonAventures-gameplay.jpg', 1, 2, 2, 1);

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
(4, 2, 3);

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
(3, 2, 3);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `format`
--
ALTER TABLE `format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `platform`
--
ALTER TABLE `platform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `product_cart`
--
ALTER TABLE `product_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_genre`
--
ALTER TABLE `product_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product_platform`
--
ALTER TABLE `product_platform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
