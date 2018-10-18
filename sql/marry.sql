/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : marry

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-18 11:29:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for marry_1
-- ----------------------------
DROP TABLE IF EXISTS `marry_1`;
CREATE TABLE `marry_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of marry_1
-- ----------------------------
INSERT INTO `marry_1` VALUES ('17', 'xixi_001', '123456', '1');
INSERT INTO `marry_1` VALUES ('18', 'xixi_002', '123456', '1');
INSERT INTO `marry_1` VALUES ('19', 'xixi_003', '123456', '1');
INSERT INTO `marry_1` VALUES ('32', 'xixi_001', '123456', '1');
INSERT INTO `marry_1` VALUES ('21', '007', '123456', '1');
INSERT INTO `marry_1` VALUES ('22', 'xixi_001', '123456', '1');
INSERT INTO `marry_1` VALUES ('23', 'xixi_002', '123456', '1');
INSERT INTO `marry_1` VALUES ('24', 'xixi_003', '123456', '1');
INSERT INTO `marry_1` VALUES ('25', 'xixi_004', '123456', '2');
INSERT INTO `marry_1` VALUES ('26', 'xixi_005', '123456', '1');
INSERT INTO `marry_1` VALUES ('27', 'xixi_001', '123456', '1');
INSERT INTO `marry_1` VALUES ('28', 'xixi_002', '123456', '1');
INSERT INTO `marry_1` VALUES ('29', 'xixi_003', '123456', '1');
INSERT INTO `marry_1` VALUES ('30', 'xixi_004', '123456', '2');
INSERT INTO `marry_1` VALUES ('31', 'xixi_005', '123456', '1');
INSERT INTO `marry_1` VALUES ('33', 'xixi_002', '123456', '1');
INSERT INTO `marry_1` VALUES ('34', 'xixi_003', '123456', '1');
INSERT INTO `marry_1` VALUES ('35', 'xixi_004', '123456', '2');
INSERT INTO `marry_1` VALUES ('36', 'xixi_005', '123456', '1');
INSERT INTO `marry_1` VALUES ('37', 'xixi_001', '123456', '1');
INSERT INTO `marry_1` VALUES ('38', 'xixi_002', '123456', '1');
INSERT INTO `marry_1` VALUES ('39', 'xixi_003', '123456', '1');
INSERT INTO `marry_1` VALUES ('40', 'xixi_004', '123456', '2');
INSERT INTO `marry_1` VALUES ('41', 'xixi_005', '123456', '1');

-- ----------------------------
-- Table structure for register_login
-- ----------------------------
DROP TABLE IF EXISTS `register_login`;
CREATE TABLE `register_login` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of register_login
-- ----------------------------
INSERT INTO `register_login` VALUES ('1', 'xixi', '123456');
INSERT INTO `register_login` VALUES ('2', 'xiaolan', '000000');
INSERT INTO `register_login` VALUES ('3', 'xiaohong', 'gw1999616');
INSERT INTO `register_login` VALUES ('4', 'xiaozi', '1999616');
INSERT INTO `register_login` VALUES ('5', 'xiaoxiao', 'wwwwww');

-- ----------------------------
-- Table structure for websites
-- ----------------------------
DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
  `id` int(10) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `url` varchar(30) NOT NULL,
  `alexa` int(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of websites
-- ----------------------------
INSERT INTO `websites` VALUES ('1', 'Google', ' https://www.google.cm/', '1', 'USA');
INSERT INTO `websites` VALUES ('2', '淘宝', 'https://www.taobao.com/', '13', 'CN');
INSERT INTO `websites` VALUES ('3', '菜鸟教程', 'http://www.runoob.com/', '4689', 'CN');
INSERT INTO `websites` VALUES ('4', '微博', 'http://weibo.com/', '20', 'CN');
INSERT INTO `websites` VALUES ('5', 'Facebook', 'https://www.facebook.com/', '3', 'USA');
