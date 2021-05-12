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
-- Table structure for table `senseis`
--

DROP TABLE IF EXISTS `senseis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `senseis` (
  `sen_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sen_name` varchar(50) COLLATE utf8_slovak_ci NOT NULL,
  `sen_lastname` varchar(50) COLLATE utf8_slovak_ci DEFAULT NULL,
  `sen_description` text COLLATE utf8_slovak_ci NOT NULL,
  `sen_title` varchar(45) COLLATE utf8_slovak_ci NOT NULL,
  `mat_id` int(10) unsigned DEFAULT NULL,
  `tp_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`sen_id`),
  KEY `fk_sen_mat_idx` (`mat_id`),
  KEY `fk_sensei_tp_idx` (`tp_id`),
  CONSTRAINT `fk_sensei_mat` FOREIGN KEY (`mat_id`) REFERENCES `martial_arts_types` (`mat_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_sensei_tp` FOREIGN KEY (`tp_id`) REFERENCES `training_plan` (`tp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `senseis`
--

LOCK TABLES `senseis` WRITE;
/*!40000 ALTER TABLE `senseis` DISABLE KEYS */;
INSERT INTO `senseis` VALUES (1,'Shi ','Yanjun ','<p>According to The New York Times, as a young monk, Shi Yan Ming learned to break rocks with his skull, deflect blades with his skin, and sleep while hanging upside down from a tree branch.</p><p> By the age of 17, according to Time magazine and The New Yorker, he could deflect the tip of a spear with his neck, sleep standing on one leg, and dangle a 50-pound (23 kg) weight from his scrotum, a practice that helped train him to withstand a full-force blow to the groin.</p><p>He can also lick red-hot iron shovels.According to Shi, since being taken by his parents to the Shaolin Temple, he has never experienced any health problems as he did as an infant, and has never been sick</p><p>Shi\'s punching strength has been measured at 772 lbf (3,430 N) of force.Among his martial arts specialties are Luohan Quan, Magic Staff and other Shaolin weapons, and hard chi kung.</p><p>In 1985, Shi won the 65 kg (147 lb.) championship in the Xian National Sparring Competition. He also won the championship in the annual Shaolin Disciples Competition three years in a row (1988–1990), and was vice-coach of the Shaolin Temple Fighting Monks at Henan.</p><p>In 1992, Shi, who had won many national martial arts competitions, was chosen to be among a group of select Shaolin monks invited by the American Kung Fu Association to tour the United States.</p>','Shifu',1,1),(2,'Morio ','Higaonna','<p>During the late sixties and early seventies Higaonna Sensei began travelling to several of the countries that were practicing Okinawa Goju-Ryu. He was invited to perform a demonstration at the World Karate Championships in Paris in 1972 and his reputation as one of the strongest Goju-Ryu practitioners in the world was growing further.</p><p>Higaonna Sensei spent time living in the United States of America where he established his headquarters in San Marcos for some time, before eventually returning to Okinawa, Japan where he currently resides. From that time to this, Higaonna Sensei has maintained his own strict training regime and continues to research the original kata and training methods of Goju-Ryu.</p><p>In 2013 Higaonna Sensei received an award from the Okinawan Government naming him as a living cultural treasure for the Island for his lifetimes work to spread Okinawan Goju-ryu to the world as well as preserving it forever in its homeland.</p><p>Higaonna Sensei received his 10th Dan certificate, awarded by An´ichi Miyagi Sensei on September 5th, 2007.</p><p>Anyone who has ever met Higaonna Sensei will not only be impressed by his karate ability, but also by his humility and good natured personality. It leaves you with the feeling of having met a true master of karate.','10 dan',2,2),(3,'Li','Jun-Fan','<p>Lee’s custom heavy bag literally taunted others with its immense size. Normal heavy bags clock in at around 70 pounds, with some clocking in at a much meatier 150. Lee’s weighed THREE-HUNDRED POUNDS. And it was filled with friggin’ metal. Not because he was showing off, but because he literally couldn’t use a lighter, non-metallic one without breaking it.</p><p>Bruce’s immense strength wasn’t just limited to his fingers either; he was also able to do one-armed pull-ups, with some sources claiming he was able to bust out 50 like it wasn’t even a big deal.</p><p>Lee was able to summon so much power in his arms, that he could knock a fully grown adult male over from less than an inch away. That’s a feat so impressive that scientists poked around in martial artists’ brains, just to see how such a thing was even possible.</p><p>One of Lee’s most impressive feats of speed, was his ability to snatch a coin from your hand. The usual protocol would be Lee placing a coin in your hand, after which he’d stand a few feet away. He’d then instruct you to close your palm as soon as you saw him move.</p><p>For all his strength and training, Bruce Lee rarely ever showed his true power. Mainly because, as shown, he was capable of injuring people just by standing too close to them.</p>','Sijo',3,3),(4,'Ueshiba','Morihei','<p>Ueshiba was able to manipulate chi as subtly, powerfully or even to articulate the theories of ki (chi) basic to aikido and bagua. Actually, Ueshiba was far beyond aikijitsu’s level of sophistication.</p><p>His ability to enter, turn, attract and then play with and lead an opponent’s chi and mind was phenomenal. In Japanese history, there was no martial art to compare to it, and no one else in Japan could do anything like it.</p><p>Ueshiba had great internal power. Internal power is almost incomprehensible to the Western mind, which is conditioned by the overt displays of external power in films and on television.</p><p>With Ueshiba, you began to expect the paranormal. I still vividly remember that he could get behind you so quickly it was as if he had disappeared. The same is true of top bagua people. You could have Ueshiba clearly in your sight, and suddenly he was gone.</p><p>Then, with equal suddenness, he was back. Ueshiba would then fake a hit and then joint-lock and/or throw you to the ground. In contrast, bagua peopletypically would actually hit you first and then throw you on the ground.</p><p>This “now you see me, now you don’t” is one of the great martial strengths of bagua adepts. Unlike a boxer or karate person whose hand you can see coming at you, bagua people have an incredible power and a strange kind of speed that is so subtle you cannot perceive its origin or destination.</p>','Ōsensei',4,4);
/*!40000 ALTER TABLE `senseis` ENABLE KEYS */;
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
