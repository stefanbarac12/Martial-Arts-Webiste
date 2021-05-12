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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `com_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `com_text` text COLLATE utf8_slovak_ci NOT NULL,
  `com_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usr_id` int(10) unsigned NOT NULL,
  `sen_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`com_id`),
  KEY `fk_com_usr_idx` (`usr_id`),
  KEY `fk_com_sen_idx` (`sen_id`),
  CONSTRAINT `fk_com_sen` FOREIGN KEY (`sen_id`) REFERENCES `senseis` (`sen_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_com_usr` FOREIGN KEY (`usr_id`) REFERENCES `users` (`usr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (27,'He reportedly has no issues with his hands or joints.  He\'s in his 70s and claims to have been doing this type of conditioning for most of his karate training years.  If done right, that is gradually over time, hand and body conditioning can be done successfully with no ill effects.  Those that try to immediately hit things as hard as they can from the time they start are the ones that suffer damage.  And when talking about a combat art....this type of conditioning is anything but \"unnecessary\".','2020-10-04 15:15:22',1,2),(29,'In the era Bruce was in, he was ahead of his time mentally and physically.','2020-10-04 15:17:34',1,3),(30,'The true purpose of martial arts is not having to use it. Most grand masters, for whichever art, they would preach that the main focus was to have a strong spirit first. Technique comes after. The true martial artist knows this, and does his best to live his life in peace, but is always ready to end a fight, using their skills in what they\'ve chosen to learn if the moment arises. I can\'t judge people that don\'t understand the true meaning of learning any martial art.','2020-10-04 15:18:36',1,4),(32,'What I found fascinating about Shaolin is that it\'s a perfect combination of spiritual and physical life. A type of life I always want to live.','2020-10-04 15:25:01',64,1),(33,'Love the video, thank you for blessing us with it! Reality is what you make it through perseverance and hard practice! I wish for all to know peace in Life. Study and Pray for the endurance to sustain.','2020-10-04 15:28:35',64,2),(34,'“When you find yourself in a room surrounded by your enemies you should tell yourself ‘I am not locked in here with you, you are locked in here with me.’ This is the kind of mindset you should have if you want to succeed in life. Get rid of the victim mentality.” -Bruce Lee\nI LOVE THIS QUOTE!\n\n','2020-10-04 15:30:56',64,3),(35,'It\'s great to see a video of Morihei Ueshiba!I practice Tomiki Aikido which is a branch from the traditional Aikido.A nearly cry when seeing these flowing movements.I especially like the solo of O Sensei with the Jo doing the movements.Thank you for your video,it is very interesting!','2020-10-04 15:33:25',64,4),(37,'I had been to Shaolin for a short training visit quite a few years ago.  It was one of the most beautiful and profound experience I\'ve ever had. Would love to go back and visit Shifu Shi Yanji.  He is a great teacher and the Song mountains are beautiful!  The food in Deng Feng is also amazing.','2020-10-04 15:38:51',65,1),(38,'Wow its amazing to see Sensei Higaonna on YouTube again, I first discovered him a couple of years ago on a documentary made by the BBC back in the 80s. I would love to learn karate from him.','2020-10-04 15:42:19',65,2),(40,'Bruce’s philosophy is much deeper than most martial art practitioners out there.  This is why he remains so revered as the GOAT martial artist.  His skills and physical ability were beyond human.  Strength, speed, stamina, focus , mental discipline, & phenomenal physique Bruce was the whole package. There is not a single fighter today, in the same weight class, possesses such complete attributes as Bruce. You also have to realize that this was the 60s, ( 5 decades ago). Even by today’s standard, Bruce is so incredible. RIP Bruce.','2020-10-04 15:43:49',65,3),(41,'It\'s incredible to think we have footage of a true master. What he taught can be seen in this demonstration. He taught love and universal harmony. Aikido was his vehicle for that teaching. It was how he polished his spirit and how he hoped that other people could polish their spirit. He said any technique can be an Aikido technique because he was training the spirit not the technique. With the the spirit purified, and with no feelings except love and harmony any technique will work. Don\'t train in Aikido if you want to use it to hurt people and fight. Learn if you want to polish your spirit, and the ability to defend yourself will take care of its self.','2020-10-04 15:45:53',65,4),(62,'NICEEEEEE!!!','2020-10-07 13:29:26',64,3),(63,'strefa','2020-12-16 14:43:57',1,2),(73,'stefan','2021-01-11 14:45:53',65,2);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
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
