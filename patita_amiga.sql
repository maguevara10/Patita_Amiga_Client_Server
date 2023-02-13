-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: patita_amiga
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal` (
  `ani_Id` char(7) NOT NULL,
  `ani_Especie` varchar(30) NOT NULL,
  `ani_Nombre` varchar(20) NOT NULL,
  `ani_Raza` varchar(30) NOT NULL,
  `ani_Tamanio` int NOT NULL,
  `ani_Edad` int NOT NULL,
  `ani_Sexo` char(1) NOT NULL,
  `ani_Fecha_Ingreso` date NOT NULL,
  `ani_Fecha_Adopcion` date DEFAULT NULL,
  `ani_Descripcion` varchar(60) NOT NULL,
  `ani_Foto` longblob NOT NULL,
  `ani_Registro_Medico` longblob NOT NULL,
  PRIMARY KEY (`ani_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peticion`
--

DROP TABLE IF EXISTS `peticion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peticion` (
  `pet_Id` char(7) NOT NULL,
  `usu_Id` char(7) NOT NULL,
  `ani_Id` char(7) NOT NULL,
  `pet_Fecha` date NOT NULL,
  `pet_Estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`pet_Id`),
  KEY `usu_Id` (`usu_Id`),
  KEY `ani_Id` (`ani_Id`),
  CONSTRAINT `peticion_ibfk_1` FOREIGN KEY (`usu_Id`) REFERENCES `usuario` (`usu_Id`),
  CONSTRAINT `peticion_ibfk_2` FOREIGN KEY (`ani_Id`) REFERENCES `animal` (`ani_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peticion`
--

LOCK TABLES `peticion` WRITE;
/*!40000 ALTER TABLE `peticion` DISABLE KEYS */;
/*!40000 ALTER TABLE `peticion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usu_Id` char(7) NOT NULL,
  `usu_Nombre` varchar(20) NOT NULL,
  `usu_Apellido` varchar(20) NOT NULL,
  `usu_Contrasenia` varchar(16) NOT NULL,
  `usu_Correo` varchar(50) NOT NULL,
  `usu_Telefono` char(10) NOT NULL,
  `usu_Foto` longblob,
  `usu_Cant_Adopciones` int NOT NULL,
  `usu_Formulario` longblob,
  PRIMARY KEY (`usu_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('usu0001','Adrián','García','qwerty','agarcia@hotmail.com','0968748748',NULL,0,NULL),('usu0002','Pedro','Pascal','qwerty1','ppascal@gmail.com','0987456123',NULL,0,NULL),('usu0003','Margaret','Robinson','qwerty2','mrobinson@gmail.com','0987665475',NULL,0,NULL),('usu0004','Luis','Pazmiño','qwerty3','lpazmino@gmail.com','0978423546',NULL,0,NULL),('usu0005','Guadalupe','Rivadeneira','qwerty4','grivadeneira@gmail.com','0987654123',NULL,0,NULL),('usu0006','Irene','Leal','LealHastaMorir@8','ileal@gmail.com','0964587788',NULL,0,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-12 19:22:09
