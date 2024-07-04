=>create tabel

CREATE TABLE `workshop`.`user` (`id` INT(11) NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `remark` VARCHAR(255) , PRIMARY KEY (`id`) ) ;


=>insert
INSERT INTO `user`(`name`, `password`, `email`, `remark`) VALUES ('ram','34567','ram@34567','ok');


=>select

SELECT * FROM `user`;

=> update

UPDATE `user` SET `password`='abcd' WHERE `email`='ram@34567';


=> delete

DELETE FROM `user` WHERE `email`='ram@34567';