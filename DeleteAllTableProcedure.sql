SET FOREIGN_KEY_CHECKS = 0;
-- Khai báo biến con trỏ để duyệt danh sách các bảng
DELIMITER $$
CREATE PROCEDURE DropAllTables(schema_name VARCHAR(255))
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE tbl_name VARCHAR(255);
  DECLARE cur CURSOR FOR 
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = schema_name;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO tbl_name;
    IF done THEN
      LEAVE read_loop;
    END IF;
    SET @drop_statement = CONCAT('DROP TABLE IF EXISTS `', schema_name, '`.`', tbl_name, '`');
    PREPARE stmt FROM @drop_statement;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END LOOP;
  CLOSE cur;
END$$
DELIMITER ;
-- Gọi thủ tục để xóa tất cả các bảng trong schema
CALL DropAllTables('laptop_shop');
DROP PROCEDURE DropAllTables;
SET FOREIGN_KEY_CHECKS = 1;