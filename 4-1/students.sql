CREATE TABLE `students` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(20) NOT NULL,
`admission_year` YEAR NOT NULL,
`major` VARCHAR(20) NOT NULL,
`major_id` INT NOT NULL,
`num` INT NOT NULL,
`gpa` FLOAT NOT NULL DEFAULT 0.0,
`phone` VARCHAR(16) NOT NULL,
`address` VARCHAR(100) NOT NULL,
`credit` INT NOT NULL DEFAULT 0,
`is_active` TINYINT(1) NOT NULL DEFAULT 1,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;