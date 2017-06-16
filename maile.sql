/*
Navicat MySQL Data Transfer

Source Server         : mailegou
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : maile

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-15 18:06:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for maile
-- ----------------------------
DROP TABLE IF EXISTS `maile`;
CREATE TABLE `maile` (
  `img` varchar(30) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of maile
-- ----------------------------
INSERT INTO `maile` VALUES ('img/b1.jpg', '蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b1.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', '蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b2.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', '蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');
INSERT INTO `maile` VALUES ('img/b3.jpg', 'spc蛇毒面膜祛痘补水提拉紧致去皱纹50片', '￥99');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
