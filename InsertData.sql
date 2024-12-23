-- Các thương hiệu
INSERT INTO `laptop_shop`.`brand`(`name`,`description`) VALUES ("Unknown","Sử dụng cho trường hợp không rõ thương hiệu"),
("Apple","Hãng Laptop, đồng thời cũng có CPU, GPU riêng"),
("Asus","Hãng Laptop"),
("Acer","Hãng Laptop"),
("Dell","Hãng Laptop"),
("Huawei","Hãng Laptop"),
("VAIO","Hãng Laptop"),
("Lenovo","Hãng Laptop"),
("MSI","Hãng Laptop"),
("HP","Hãng Laptop"),
("Gigabyte","Hãng Laptop"),
("Masstel","Hãng Laptop"),
("Intel","Hãng CPU, GPU"),
("NVIDIA","Hãng CPU, GPU "),
("AMD","Hãng CPU, GPU ");

INSERT INTO `laptop_shop`.`category` (`name`) VALUES ("Laptop AI"),
("Gaming - đồ họa"), ("Văn phòng"), ("Mỏng nhẹ"),("Doanh nhân"), ("Workstation");

INSERT INTO `laptop_shop`.`color` (`name`) VALUES ("Đen"),("Hồng"),("Trắng"),("Xám"),("Vàng"),("Bạc"),("Xanh");

-- Công nghệ cpu 
-- Công nghệ CPU của Apple
INSERT INTO `cpu_tech` (`technology`, `brand_id`) VALUES ('M3 Max', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M4 Max', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M4 Pro', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M3 Pro', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M3', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M4', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M2', (SELECT `id` FROM `brand` WHERE `name` = 'Apple')),
('M1', (SELECT `id` FROM `brand` WHERE `name` = 'Apple'));

-- Công nghệ CPU của Intel
INSERT INTO `cpu_tech` (`technology`, `brand_id`) VALUES ('Intel Core i3', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core i5', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core i7', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core i9', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Celeron', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core Ultra 5', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core Ultra 7', (SELECT `id` FROM `brand` WHERE `name` = 'Intel')),
('Intel Core Ultra 9', (SELECT `id` FROM `brand` WHERE `name` = 'Intel'));

-- Công nghệ CPU của AMD
INSERT INTO `cpu_tech` (`technology`, `brand_id`) VALUES 
('Ryzen 3', (SELECT `id` FROM `brand` WHERE `name` = 'AMD')),
('Ryzen 5', (SELECT `id` FROM `brand` WHERE `name` = 'AMD')),
('Ryzen 7', (SELECT `id` FROM `brand` WHERE `name` = 'AMD')),
('Ryzen 9', (SELECT `id` FROM `brand` WHERE `name` = 'AMD'));

INSERT INTO `laptop_shop`.`cpu` (`cache`, `core`, `max_speed`, `model`, `speed`, `thread`, `tops`, `technology_id`) VALUES
(4, 4, 4.3, "7520U", 2.8, 8, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(null, null, 4.5, "7640HS", 4.3, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(16, 6, 4.5, "7535HS", 3.3, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(16, 6, 4.3, "7530U", 2, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(16, 6, 4.3, "7430U", 2.3, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(null, 6, 4, "5500U", 2.1, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(16, 6, 4.3, "5625U", 2.3, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 5')),
(20, 8, 4.5, "7435HS", 3.1, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(8, 8, 4.6, "5700U", 1.8, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(16, 8, 4.5, "7730U", 2, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(16, 8, 4.7, "7735U", 2.7, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(16, 8, 4.7, "7735HS", 3.2, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(16, 8, 5.1, "8845HS", 3.8, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(null, 8, 4.7, "6800H", 2.7, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(null, null, null, "8840HS", 3.3, null, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Ryzen 7')),
(null, null, 3.8, "N305", 1.8, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i3')),
(10, 6, 4.4, "1215U", 1.2, 8, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i3')),
(18, 12, 4.5, "12500H", 2.5, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(12, 10, 4.6, "1335U", 3.4, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(null, null, 4.6, "1334U", 1.3, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(6.5, 10, 4.4, "1235U", 3.3, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(12, 8, 4.4, "12450H", 3.3, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(18, 12, 4.7, "13500H", 2.6, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(12, 8, 4.6, "13420H", 3.4, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(12, 8, 4.4, "12450HX", 2.4, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(8, 4, 4.5, "11320H", 3.2, 8, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(8, 4, 4.2, "1135G7", 2.4, 8, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(null, null, null, "1340P", 1.9, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(null, null, 4.6, "1155G7", 1, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(12, null, 5, "120U", null, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i5')),
(null, null, 4.3, "12650H", 2.3, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, null, 4.7, "12700H", 3.5, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(24, 10, 4.9, "13620H", 2.4, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, 10, 5, "1355U", 3.7, 12, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, null, 4.7, "1255U", 3.5, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(18, 12, 4.7, "1260P", 3.3, 16, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(24, 14, 5, "13700H", 2.4, 20, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(24, 14, 4.9, "13650HX", 2.6, 20, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(30, 26, 5.2, "14650HX", 2.2, 24, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, null, null, "1360P", 2.2, null, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(33, 20, 5.5, "14700HX", 2.1, 28, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, 16, 5, "13700HX", 2.1, 24, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core i7')),
(null, 4, 2.6, "N4120", 1.1, 4, null, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Celeron')),
(null, null, 4.3, "125U", 3.6, null, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 5')),
(18, 14, 4.5, "125H", 1.2, 18, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 5')),
(8, null, 4.5, "226V", 1.6, null, 40, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 5')),
(24, 16, 4.8, "155H", 1.4, 22, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 7')),
(null, null, 3.8, "155U", 1.7, null, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 7')),
(12, null, 4.8, "258V", 3.7, null, 47, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 7')),
(null, null, 5.1, "185H", 2.3, null, 10, (SELECT id FROM `cpu_tech` WHERE `technology` = 'Intel Core Ultra 9'));

INSERT INTO `gpu` (`memory`, `model`, `tops`, `type`, `brand_id`) VALUES
('Unknown', 'Unknown', null, 0, (SELECT id FROM `brand` WHERE `name` = 'Unknown')),
('4GB GDDR6', 'GeForce GTX 1650', 143, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('4GB GDDR6', 'Geforce RTX 2050 ', 104, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('4GB GDDR6', 'GeForce RTX 3050', 143, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('Unknown', 'GeForce MX550', null, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('6GB GDDR6', 'GeForce RTX 4050', 194, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('8GB GDDR6', 'GeForce RTX 4060', 233, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('8GB GDDR6', 'GeForce RTX 4070', 321, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('12GB GDDR6', 'GeForce RTX 4080', 542, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('16GB GDDR6', 'GeForce RTX 4090', 686, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('8GB GDDR6', 'RTX A1000', null, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('4GB GDDR6', 'RTX A500', null, 1, (SELECT id FROM `brand` WHERE `name` = 'NVIDIA')),
('Share', 'Radeon Graphics', null, 0, (SELECT id FROM `brand` WHERE `name` = 'AMD')),
('4GB', 'AMD Radeon RX 5700M', 25, 1, (SELECT id FROM `brand` WHERE `name` = 'AMD')),
('Unknown', 'Radeon 760M Graphics', null, 0, (SELECT id FROM `brand` WHERE `name` = 'AMD')),
('Unknown', 'UHD Graphics', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Intel')),
('Unknown', 'Arc Graphics', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Intel')),
('Unknown', 'Iris Plus Graphics', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Intel')),
('Unknown', 'Iris Xe Graphics', null, 0, (SELECT id FROM `brand` WHERE `name` = 'Intel')),
('Unknown', 'M3 Max 30-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M3 Max 40-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', ' M3 Pro 18-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M3 Pro 14-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M3 8-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M2 10-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M2 8-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple')),
('Unknown', 'M1 7-core', NULL, 0, (SELECT id FROM `brand` WHERE `name` = 'Apple'));

INSERT INTO `laptop_shop`.`os_version` (`version`)
VALUES('Windows 10 Home'),
('Windows 11 Home'),
('macOS 10.10 Yosemite'),
('macOS 10.11 El Capitan'),
('macOS 10.12 Sierra'),
('macOS 10.13 High Sierra'),
('macOS 10.14 Mojave'),
('macOS 10.15 Catalina'),
('macOS 11 Big Sur'),
('macOS 12 Monterey'),
('macOS 13 Ventura');






