-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-06-2018 a las 23:26:17
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(20) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_general_mysql500_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_general_mysql500_ci NOT NULL,
  `provincia` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  `ciudad` varchar(30) COLLATE utf8_general_mysql500_ci NOT NULL,
  `dia` date NOT NULL,
  `hora` varchar(20) COLLATE utf8_general_mysql500_ci NOT NULL,
  `cp` int(10) NOT NULL,
  `motivos` varchar(5000) COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `nombre`, `apellidos`, `provincia`, `ciudad`, `dia`, `hora`, `cp`, `motivos`) VALUES
(1, '', '0', '', '', '0000-00-00', '', 46017, ''),
(2, '', '0', '', '', '0000-00-00', '', 46017, ''),
(3, '', '0', '', '', '0000-00-00', '', 46017, ''),
(4, '', '0', '', '', '0000-00-00', '', 46017, ''),
(5, '', '0', '', '', '0000-00-00', '', 46017, ''),
(6, '', '0', '', '', '0000-00-00', '', 46017, ''),
(7, '', '0', '', '', '0000-00-00', '', 46017, ''),
(8, '', '0', '', '', '0000-00-00', '', 46017, ''),
(9, 'Sergio', '0', '', '', '0000-00-00', '', 46017, ''),
(10, 'Sergio', '0', 'Valencia', 'Valencia', '2018-06-22', '10', 46017, 'asdasd'),
(11, 'Sergio', 'GuillÃ©n Coso', 'Valencia', 'Madrid', '2018-06-30', '12', 9999999, 'Pollon'),
(12, 'Sergio', 'GuillÃ©n Coso', 'Valencia', 'Madrid', '2018-06-30', '12', 9999999, 'Pollon'),
(13, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-21', '123', 46017, 'asdads'),
(14, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-29', '45', 46017, 'asdaasd'),
(15, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-29', '45', 46017, 'asdaasd'),
(16, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-29', '20', 46017, 'asdaasd'),
(17, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-20', '300', 46017, 'asddas'),
(18, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-21', '12', 46017, 'asdads'),
(19, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-21', '12', 46017, 'asd'),
(20, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-21', '12', 46017, 'asdasd'),
(21, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-14', '12', 46017, 'asdasdas'),
(22, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-27', '12', 46017, 'asdas'),
(23, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-21', '12', 46017, 'asdads'),
(24, 'Sergio', 'GuillÃ©n', 'Valencia', 'Valencia', '2018-06-22', '12', 46017, 'asd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `comentario` varchar(400) COLLATE utf8_general_mysql500_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  `fecha` date NOT NULL,
  `articulo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`comentario`, `username`, `fecha`, `articulo`) VALUES
('asdasd', 'sergio', '2018-06-03', 0),
('asdasdads', 'sergio', '2018-06-03', 2),
('ss', 'sergio', '2018-06-03', 2),
('hola', '', '2018-06-03', 1),
('asdasd', '', '2018-06-03', 1),
('aa', '', '2018-06-03', 1),
('asdasd', '', '2018-06-03', 1),
('pollon', '', '2018-06-03', 1),
('pollitafina', 'sergio', '2018-06-03', 1),
('jejej ', 'sergio', '2018-06-03', 2),
('que loco xd', 'sergio', '2018-06-03', 2),
('asdasd', 'sergio', '2018-06-03', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_general_mysql500_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`) VALUES
(1, 'sergio', '1234', ''),
(2, 'agonzalez', '5f4dcc3b5aa765d61d8327deb882cf99', ''),
(3, 'lgarcia', 'ea847988ba59727dbf4e34ee75726dc3', ''),
(12, 'Sergio GuillÃ©n', '123', 'sergio141.96@gmail.com'),
(13, 'asd', '123', 'sergio141.as96@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
