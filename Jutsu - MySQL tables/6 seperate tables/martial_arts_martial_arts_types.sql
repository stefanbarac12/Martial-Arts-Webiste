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
-- Table structure for table `martial_arts_types`
--

DROP TABLE IF EXISTS `martial_arts_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `martial_arts_types` (
  `mat_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mat_text` text COLLATE utf8_slovak_ci,
  `mat_name` varchar(45) COLLATE utf8_slovak_ci NOT NULL,
  PRIMARY KEY (`mat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `martial_arts_types`
--

LOCK TABLES `martial_arts_types` WRITE;
/*!40000 ALTER TABLE `martial_arts_types` DISABLE KEYS */;
INSERT INTO `martial_arts_types` VALUES (1,'<p>- Adds Chinese philosophies and spirituality to the above. This training program is designed to help every person achieve their utmost Heath, and build Martial Arts skills that will serve them for a lifetime.<p><p>- The highest level of ability is achieved when your body is in harmony and your mind can control your Qi. If either component is lacking, you can learn 10,000 forms, and still perform mediocre Wu Shu.</p><p>- Invest your efforts into the development and coordination of your body and mind, and then consider the various styles. This is the path to achieving your full potential, and there is no time like the present.</p>','Shaolin Wushu'),(2,'<p>- Although few fighting arts have a deep and fascinating history as that of Okinawan Goju-ryu Karate-do.</p><p>- From Shaolin temple and Chinese boxing origins, to the style of Naha-te, its further development into Okinawan Goju-ryu and the formation of the International Okinawan Goju-ryu Karate-do Federation, the history of our art spans hundreds of years.</p><p>- Passed from Master to student, the art was trained and the history was transmitted orally. In the late 20th century Sensei Morio Higaonna documented this information into the now famous Goju-ryu text book: The History of Karate.</p>','Goju-ryu Karate'),(3,'<p>- The term JKD was coined and put into use in 1967 by Bruce Lee in an attempt to put a name to his martial expression.</p><p>- The idea of intercepting is key to jkd, whether it be the interception of your opponent’s technique or his intent. The basic guiding principles are: simplicity, directness and freedom (the form of no form).</p><p>- The techniques and philosophies of JKD can be applied to real combat as well as challenging life situations. JKD consists of physical techniques and applied philosophies and requires the individual to train him or herself to their most cultivated state of being-ness so that when faced with a combat situation or a challenging personal situation.</p>','Jeet Kune Do'),(4,'<p>- Aikido is a relatively young Japanese martial art based on several old martial arts like Jujitsu (martial art without weapons) or Kenjutsu (swordsmanship) which were practiced by the samurai. It was developed by Morihei Ueshiba, embodying his studies of various martial arts, his religious beliefs and his philosophy.</p><p>- Viewing Aikido on a purely physical level, it is one of the most effective forms of self-defence taught today (when trained long enough, though). Additionally, it keeps one’s body healthy and is often practiced to a high age.</p><p> However, besides physical fitness, many Aikidokas – find upon closer examination not only physical health and self-defence techniques but also spiritual enlightenment and peace of mind.</p>','Aikido');
/*!40000 ALTER TABLE `martial_arts_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 13:22:21
