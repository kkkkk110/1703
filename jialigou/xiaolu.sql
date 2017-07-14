/*
Navicat MySQL Data Transfer

Source Server         : aa
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : xiaolu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 15:53:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `img6` varchar(255) DEFAULT NULL,
  `img7` varchar(255) DEFAULT NULL,
  `img8` varchar(255) DEFAULT NULL,
  `p1` varchar(255) DEFAULT NULL,
  `p2` varchar(255) DEFAULT NULL,
  `p3` varchar(255) DEFAULT NULL,
  `p4` varchar(255) DEFAULT NULL,
  `p5` varchar(255) DEFAULT NULL,
  `p6` varchar(255) DEFAULT NULL,
  `p7` varchar(255) DEFAULT NULL,
  `b1` varchar(255) DEFAULT NULL,
  `b2` varchar(255) DEFAULT NULL,
  `b3` varchar(255) DEFAULT NULL,
  `b4` varchar(255) DEFAULT NULL,
  `b5` varchar(255) DEFAULT NULL,
  `b6` varchar(255) DEFAULT NULL,
  `b7` varchar(255) DEFAULT NULL,
  `q1` varchar(255) DEFAULT NULL,
  `q2` varchar(255) DEFAULT NULL,
  `q3` varchar(255) DEFAULT NULL,
  `q4` varchar(255) DEFAULT NULL,
  `q5` varchar(255) DEFAULT NULL,
  `q6` varchar(255) DEFAULT NULL,
  `q7` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('3', '../img/detail/_2017-07-10T11-17-54.619Z_r6_c2.png', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '../img/detail/62oitEEJJ4IXPiguo6XaDq.jpg', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('5', '../img/detail/_2017-07-10T11-17-54.619Z_r4_c2.png', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('6', '../img/detail/_2017-07-10T11-17-54.619Z_r8_c2.png', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('7', '../img/detail/_2017-07-10T11-17-54.619Z_r6_c2.png', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '../img/detail/6KWjQoazY46unMtNkbo_cN.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('8', '../img/detail/_2017-07-10T11-17-54.619Z_r6_c2.png', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '../img/detail/gItIgo6VH4MxlKjyL9y2br.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('9', '../img/detail/_2017-07-10T11-17-54.619Z_r8_c2.png', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '../img/detail/GVscwGoBlkmCDG11Lyq4dA.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');
INSERT INTO `list` VALUES ('10', '../img/detail/_2017-07-10T11-17-54.619Z_r8_c2.png', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '../img/detail/9ftXnEyzEk2GGWS656fbjQ.jpg', '新生儿奶粉', '清淡不上火', '口味清淡', '新生儿奶粉', '清淡不上火', '口味清淡', '口味清淡', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil pre段（0-6个月）800g', '德国爱他美奶粉Aptamil 2段（6-10个月）800g', '德国爱他美奶粉Aptamil 3段（10-12个月）800g', '德国爱他美奶粉Aptamil 1+（12个月以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '德国爱他美奶粉Aptamil 2+（2岁以上）600g', '923', '832', '827', '712', '845', '696', '745');

-- ----------------------------
-- Table structure for live
-- ----------------------------
DROP TABLE IF EXISTS `live`;
CREATE TABLE `live` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `p` varchar(255) DEFAULT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `img6` varchar(255) DEFAULT NULL,
  `img7` varchar(255) DEFAULT NULL,
  `img8` varchar(255) DEFAULT NULL,
  `img9` varchar(255) DEFAULT NULL,
  `price1` varchar(255) DEFAULT NULL,
  `price2` varchar(255) DEFAULT NULL,
  `price3` varchar(255) DEFAULT NULL,
  `price4` varchar(255) DEFAULT NULL,
  `price5` varchar(255) DEFAULT NULL,
  `price6` varchar(255) DEFAULT NULL,
  `price7` varchar(255) DEFAULT NULL,
  `price8` varchar(255) DEFAULT NULL,
  `title1` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL,
  `title3` varchar(255) DEFAULT NULL,
  `title4` varchar(255) DEFAULT NULL,
  `title5` varchar(255) DEFAULT NULL,
  `title6` varchar(255) DEFAULT NULL,
  `title7` varchar(255) DEFAULT NULL,
  `title8` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of live
-- ----------------------------
INSERT INTO `live` VALUES ('1', '今日直播', 'img/index/59267ac63ba7c.jpg', 'img/index/aa.jpg', 'img/index/aa.jpg', 'img/index/560b91d804c13.jpg', 'img/index/\r\n5955c1e37ad0c.jpg', 'img/index/58da2d812c6c1.jpg', 'img/index/59534b6b8d3bd.jpg', 'img/index/5959e906a9be0.jpg', 'img/index/594cd65377523.jpg', '223', '232', '227', '112', '445', '66', '345', '177', '美苏多功能小N锅1+1超值组', '五粮液集团五龙\r\n\r\n宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组');
INSERT INTO `live` VALUES ('2', '热销推荐', 'img/index/5959e906a9be0.jpg', 'img/index/591ba5c27d5c8.jpg', 'img/index/591bb002e171b.jpg', 'img/index/5955ccad99fa5.jpg', 'img/index/\r\n\r\n590068d46b5b2.jpg', 'img/index/591bb390400f5.jpg', 'img/index/591bc0a9ef1a7.jpg', 'img/index/591c153eebdc0.jpg', 'img/index/591bc0a9ef1a7.jpg', '223', '112', '445', '66', '345', '177', '121', '989', '美苏多功能小N锅1+1超值组', '五粮液集团五龙宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组');

-- ----------------------------
-- Table structure for sup
-- ----------------------------
DROP TABLE IF EXISTS `sup`;
CREATE TABLE `sup` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `b` varchar(255) DEFAULT NULL,
  `p` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `img6` varchar(255) DEFAULT NULL,
  `img7` varchar(255) DEFAULT NULL,
  `img8` varchar(255) DEFAULT NULL,
  `title1` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL,
  `title3` varchar(255) DEFAULT NULL,
  `title4` varchar(255) DEFAULT NULL,
  `title5` varchar(255) DEFAULT NULL,
  `title6` varchar(255) DEFAULT NULL,
  `price1` varchar(255) DEFAULT NULL,
  `price2` varchar(255) DEFAULT NULL,
  `price3` varchar(255) DEFAULT NULL,
  `price4` varchar(255) DEFAULT NULL,
  `price5` varchar(255) DEFAULT NULL,
  `price6` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sup
-- ----------------------------
INSERT INTO `sup` VALUES ('2', 'F1', '服装鞋\r\n\r\n帽', 'img/index/590aa4a79db7b.jpg', 'img/index/5923f1f1d85a2.jpg', 'img/index/591bb002e171b.jpg', 'img/index/591bb2c0666ee.jpg', 'img/index/594a5275e0e3f.png', 'img/index/591bb390400f5.jpg', 'img/index/591bc0a9ef1a7.jpg', 'img/index/591c153eebdc0.jpg', '美苏多功能小N锅1+1超值组', '五粮液集团五龙宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '223', '112', '445', '66', '345', '177.00');
INSERT INTO `sup` VALUES ('3', 'F2', '个护美妆', 'img/index/58d8b9f41ca6a.jpg', 'img/index/595457788f8c3.jpg', 'img/index/5953871745ba3.jpg', 'img/index/14792012161815652797.jpg', 'img/index/\r\n\r\n14792019561177765261.jpg', 'img/index/s1_32930.jpg', 'img/index/5684e245adc2c.jpg', 'img/index/5954aaf057e89.png', '美苏多功能小N锅1+1超值组', '五粮液集团五龙\r\n\r\n宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '223', '112', '445', '66', '345', '177.00');
INSERT INTO `sup` VALUES ('4', 'F3', '食品酒水 运动保健', 'img/index/5923f4ec576ee.jpg', 'img/index/5923f5ca84a53.jpg', 'img/index/594cd5c4543c9.jpg', 'img/index/5695fd4f4f19f.jpg', 'img/index/\r\n5770a07b5c9fe.jpg', 'img/index/594cd5c4543c9.jpg', 'img/index/595b4942ed56a.jpg', 'img/index/591bb390400f5.jpg', '美苏多功能小N锅1+1超值组', '五粮液集团五龙\r\n\r\n宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '223', '112', '445', '66', '345', '177.00');
INSERT INTO `sup` VALUES ('5', 'F4', '个护美妆', 'img/index/58d8bb305871a.jpg', 'img/index/58ec972b68361.jpg', 'img/index/58f08b2d97ae9.jpg', 'img/index/591ba5c27d5c8.jpg', 'img/index/\r\n593a5dde98319.jpg', 'img/index/59535a4a12a0f.jpg', 'img/index/59534b6b8d3bd.jpg', 'img/index/5959e906a9be0.jpg', '美苏多功能小N锅1+1超值组', '五粮液集团五龙\r\n\r\n宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '223', '112', '445', '66', '345', '177.00');
INSERT INTO `sup` VALUES ('6', 'F5', '食品酒水 ', 'img/index/5923f4ec576ee.jpg', 'img/index/5923f5ca84a53.jpg', 'img/index/58f08b2d97ae9.jpg', 'img/index/591ba5c27d5c8.jpg', 'img/index/\r\n593a5dde98319.jpg', 'img/index/59535a4a12a0f.jpg', 'img/index/59534b6b8d3bd.jpg', 'img/index/5959e906a9be0.jpg', '美苏多功能小N锅1+1超值组', '五粮液集团五龙\r\n\r\n宾\r\n\r\n红樽微信日特惠组', '于阁老蜂巢蜜超值组', '若羌灰枣（精选）5斤', '法国原酒进口爱龙堡红酒庆典18瓶组', '20L禧又多土榨纯香菜籽油超值组', '223', '112', '445', '66', '345', '177.00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `addtime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'laoxie', '11212', '2017-07-06 14:41:50');
INSERT INTO `user` VALUES ('2', 'xiaolu', '121', '2017-07-06 14:57:28');
INSERT INTO `user` VALUES ('69', 'dfdf121', '4c56ff4ce4aaf9573aa5dff913df997a', '2017-07-13 09:30:33');
INSERT INTO `user` VALUES ('49', 'dfdf', 'a01610228fe998f515a72dd730294d87', '2017-07-06 19:33:49');
INSERT INTO `user` VALUES ('48', 'dfdf', 'a01610228fe998f515a72dd730294d87', '2017-07-06 19:33:03');
INSERT INTO `user` VALUES ('82', '小陆', '123456', '2017-07-14 11:03:05');
INSERT INTO `user` VALUES ('81', 'wrwer', '123456', '2017-07-13 16:04:57');
INSERT INTO `user` VALUES ('80', 'lulu', '123456', '2017-07-13 11:19:37');
INSERT INTO `user` VALUES ('79', 'laolu', 'e10adc3949ba59abbe56e057f20f883e', '2017-07-13 11:17:53');
INSERT INTO `user` VALUES ('76', 'wew', 'c20ad4d76fe97759aa27a0c99bff6710', '2017-07-13 09:41:31');
INSERT INTO `user` VALUES ('75', 'ssfs', '202cb962ac59075b964b07152d234b70', '2017-07-13 09:40:47');
INSERT INTO `user` VALUES ('74', 'wrwerw', '5a1e3a5aede16d438c38862cac1a78db', '2017-07-13 09:39:34');
INSERT INTO `user` VALUES ('73', 'weewr', 'a01610228fe998f515a72dd730294d87', '2017-07-13 09:37:48');
INSERT INTO `user` VALUES ('72', 'sfs', 'a01610228fe998f515a72dd730294d87', '2017-07-13 09:36:56');
INSERT INTO `user` VALUES ('71', 'wewew', 'a01610228fe998f515a72dd730294d87', '2017-07-13 09:31:31');
INSERT INTO `user` VALUES ('70', 'sdsdsd', '4c56ff4ce4aaf9573aa5dff913df997a', '2017-07-13 09:31:03');
INSERT INTO `user` VALUES ('53', 'ACCOUNTING', '45', '2017-07-10 10:28:24');
INSERT INTO `user` VALUES ('78', 'wewe', 'e3ceb5881a0a1fdaad01296d7554868d', '2017-07-13 10:38:45');
INSERT INTO `user` VALUES ('55', 'xxxxx', 'sdfs', '2017-07-12 20:31:46');
INSERT INTO `user` VALUES ('42', 'qw', 'a01610228fe998f515a72dd730294d87', '2017-07-06 15:48:06');
INSERT INTO `user` VALUES ('47', 'dfdf', 'a01610228fe998f515a72dd730294d87', '2017-07-06 19:32:30');
INSERT INTO `user` VALUES ('45', 'werere', '8ce87b8ec346ff4c80635f667d1592ae', '2017-07-06 15:48:21');
INSERT INTO `user` VALUES ('46', 'wewe22', 'f795e34c94384805f4e8da7d98effc81', '2017-07-06 15:48:47');
