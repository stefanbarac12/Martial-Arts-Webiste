-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: martial_arts
-- ------------------------------------------------------
-- Server version	5.7.31-log

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
-- Table structure for table `yt_videos`
--

DROP TABLE IF EXISTS `yt_videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yt_videos` (
  `ytv_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ytv_title` varchar(50) COLLATE utf8_slovak_ci NOT NULL,
  `sen_id` int(10) unsigned NOT NULL,
  `ytv_links` varchar(255) COLLATE utf8_slovak_ci NOT NULL,
  PRIMARY KEY (`ytv_id`),
  KEY `fk_ytv_sen_idx` (`sen_id`),
  CONSTRAINT `fk_ytv_sen` FOREIGN KEY (`sen_id`) REFERENCES `senseis` (`sen_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=632 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yt_videos`
--

LOCK TABLES `yt_videos` WRITE;
/*!40000 ALTER TABLE `yt_videos` DISABLE KEYS */;
INSERT INTO `yt_videos` VALUES (69,'Shaolin klip 1',1,'https://www.youtube.com/embed/Zbow21FKJS4'),(71,'Shaolin klip 2',1,'https://www.youtube.com/embed/_HD-XYp3SGo'),(72,'Shaolin klip 3',1,'https://www.youtube.com/embed/gmdWPNC-YVg'),(73,'Shaolin klip 4',1,'https://www.youtube.com/embed/KNEdTeNilcs'),(74,'Karate klip 1',2,'https://www.youtube.com/embed/S9wODMKiHAA'),(76,'Karate klip 2',2,'https://www.youtube.com/embed/nXo8vhzrv-8'),(77,'Karate klip 3',2,'https://www.youtube.com/embed/zcjmPA2g26I'),(189,'Aikido klip 1',4,'https://www.youtube.com/embed/Ws2Iczref5U'),(190,'Aikido klip 2',4,'https://www.youtube.com/embed/z7mxPWyb9q0'),(195,'Aikido klip 3',4,'https://www.youtube.com/embed/_9iODQGnHcA'),(390,'Aikido klip 4',4,'https://www.youtube.com/embed/XoDK3XuvZWw'),(625,'Karate klip 4',2,'https://www.youtube.com/embed/-Ure59Ub73g'),(628,'Bruce lee klip 1',3,'https://www.youtube.com/embed/lAlQPNTHQe4'),(629,'Bruce lee klip 2',3,'https://www.youtube.com/embed/7uvmWG4U7QE'),(630,'Bruce lee klip 3',3,'https://www.youtube.com/embed/nFujZ8zrr3E'),(631,'Bruce lee klip 4',3,'https://www.youtube.com/embed/1eDN4nOhCY0');
/*!40000 ALTER TABLE `yt_videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 13:22:22
