SET FOREIGN_KEY_CHECKS = 0;

-- Dữ liệu cho bảng brand
INSERT INTO brand VALUES (1,'Sử dụng cho trường hợp không rõ thương hiệu','Unknown'),(2,'Hãng Laptop, đồng thời cũng có CPU, GPU riêng','Apple'),(3,'Hãng Laptop','Asus'),(4,'Hãng Laptop','Acer'),(5,'Hãng Laptop','Dell'),(6,'Hãng Laptop','Huawei'),(7,'Hãng Laptop','VAIO'),(8,'Hãng Laptop','Lenovo'),(9,'Hãng Laptop','MSI'),(10,'Hãng Laptop','HP'),(11,'Hãng Laptop','Gigabyte'),(12,'Hãng Laptop','Masstel'),(13,'Hãng CPU, GPU','Intel'),(14,'Hãng CPU, GPU ','NVIDIA'),(15,'Hãng CPU, GPU ','AMD');

-- Dữ liệu cho bảng category
INSERT INTO category VALUES (5,'Doanh nhân'),(2,'Gaming - đồ họa'),(1,'Laptop AI'),(4,'Mỏng nhẹ'),(3,'Văn phòng'),(6,'Workstation');

-- Dữ liệu cho bảng color
INSERT INTO color VALUES (1,'Đen'),(2,'Hồng'),(3,'Trắng'),(4,'Xám'),(5,'Vàng'),(6,'Bạc'),(7,'Xanh');

-- Dữ liệu cho bảng cpu_tech
INSERT INTO cpu_tech VALUES (1,'M3 Max',2),(2,'M4 Max',2),(3,'M4 Pro',2),(4,'M3 Pro',2),(5,'M3',2),(6,'M4',2),(7,'M2',2),(8,'M1',2),(9,'Intel Core i3',13),(10,'Intel Core i5',13),(11,'Intel Core i7',13),(12,'Intel Core i9',13),(13,'Intel Celeron',13),(14,'Intel Core Ultra 5',13),(15,'Intel Core Ultra 7',13),(16,'Intel Core Ultra 9',13),(17,'Ryzen 3',15),(18,'Ryzen 5',15),(19,'Ryzen 7',15),(20,'Ryzen 9',15);

-- Dữ liệu cho bảng cpu
INSERT INTO cpu VALUES (1,4,4,4.3,'7520U',2.8,8,NULL,18),(2,NULL,NULL,4.5,'7640HS',4.3,NULL,NULL,18),(3,16,6,4.5,'7535HS',3.3,12,NULL,18),(4,16,6,4.3,'7530U',2,12,NULL,18),(5,16,6,4.3,'7430U',2.3,12,NULL,18),(6,NULL,6,4,'5500U',2.1,12,NULL,18),(7,16,6,4.3,'5625U',2.3,12,NULL,18),(8,20,8,4.5,'7435HS',3.1,16,NULL,19),(9,8,8,4.6,'5700U',1.8,16,NULL,19),(10,16,8,4.5,'7730U',2,16,NULL,19),(11,16,8,4.7,'7735U',2.7,16,NULL,19),(12,16,8,4.7,'7735HS',3.2,16,NULL,19),(13,16,8,5.1,'8845HS',3.8,16,NULL,19),(14,NULL,8,4.7,'6800H',2.7,16,NULL,19),(15,NULL,NULL,NULL,'8840HS',3.3,NULL,10,19),(16,NULL,NULL,3.8,'N305',1.8,NULL,NULL,9),(17,10,6,4.4,'1215U',1.2,8,NULL,9),(18,18,12,4.5,'12500H',2.5,16,NULL,10),(19,12,10,4.6,'1335U',3.4,12,NULL,10),(20,NULL,NULL,4.6,'1334U',1.3,NULL,NULL,10),(21,6.5,10,4.4,'1235U',3.3,12,NULL,10),(22,12,8,4.4,'12450H',3.3,12,NULL,10),(23,18,12,4.7,'13500H',2.6,16,NULL,10),(24,12,8,4.6,'13420H',3.4,12,NULL,10),(25,12,8,4.4,'12450HX',2.4,12,NULL,10),(26,8,4,4.5,'11320H',3.2,8,NULL,10),(27,8,4,4.2,'1135G7',2.4,8,NULL,10),(28,NULL,NULL,NULL,'1340P',1.9,NULL,NULL,10),(29,NULL,NULL,4.6,'1155G7',1,NULL,NULL,10),(30,12,NULL,5,'120U',NULL,NULL,NULL,10),(31,NULL,NULL,4.3,'12650H',2.3,NULL,NULL,11),(32,NULL,NULL,4.7,'12700H',3.5,NULL,NULL,11),(33,24,10,4.9,'13620H',2.4,16,NULL,11),(34,NULL,10,5,'1355U',3.7,12,NULL,11),(35,NULL,NULL,4.7,'1255U',3.5,NULL,NULL,11),(36,18,12,4.7,'1260P',3.3,16,NULL,11),(37,24,14,5,'13700H',2.4,20,NULL,11),(38,24,14,4.9,'13650HX',2.6,20,NULL,11),(39,30,26,5.2,'14650HX',2.2,24,NULL,11),(40,NULL,NULL,NULL,'1360P',2.2,NULL,NULL,11),(41,33,20,5.5,'14700HX',2.1,28,NULL,11),(42,NULL,16,5,'13700HX',2.1,24,NULL,11),(43,NULL,4,2.6,'N4120',1.1,4,NULL,13),(44,NULL,NULL,4.3,'125U',3.6,NULL,10,14),(45,18,14,4.5,'125H',1.2,18,10,14),(46,8,NULL,4.5,'226V',1.6,NULL,40,14),(47,24,16,4.8,'155H',1.4,22,10,15),(48,NULL,NULL,3.8,'155U',1.7,NULL,10,15),(49,12,NULL,4.8,'258V',3.7,NULL,47,15),(50,NULL,NULL,5.1,'185H',2.3,NULL,10,16),(51,NULL,NULL,NULL,'8-Core',NULL,NULL,NULL,5);

-- Dữ liệu cho bảng gpu
INSERT INTO gpu VALUES (1,'Unknown','Unknown',NULL,0,1),(2,'4GB GDDR6','GeForce GTX 1650',143,1,14),(3,'4GB GDDR6','Geforce RTX 2050 ',104,1,14),(4,'4GB GDDR6','GeForce RTX 3050',143,1,14),(5,'Unknown','GeForce MX550',NULL,1,14),(6,'6GB GDDR6','GeForce RTX 4050',194,1,14),(7,'8GB GDDR6','GeForce RTX 4060',233,1,14),(8,'8GB GDDR6','GeForce RTX 4070',321,1,14),(9,'12GB GDDR6','GeForce RTX 4080',542,1,14),(10,'16GB GDDR6','GeForce RTX 4090',686,1,14),(11,'8GB GDDR6','RTX A1000',NULL,1,14),(12,'4GB GDDR6','RTX A500',NULL,1,14),(13,'Share','Radeon Graphics',NULL,0,15),(14,'4GB','AMD Radeon RX 5700M',25,1,15),(15,'Unknown','Radeon 760M Graphics',NULL,0,15),(16,'Unknown','UHD Graphics',NULL,0,13),(17,'Unknown','Arc Graphics',NULL,0,13),(18,'Unknown','Iris Plus Graphics',NULL,0,13),(19,'Unknown','Iris Xe Graphics',NULL,0,13),(20,'Unknown','M3 Max 30-core',NULL,0,2),(21,'Unknown','M3 Max 40-core',NULL,0,2),(22,'Unknown',' M3 Pro 18-core',NULL,0,2),(23,'Unknown','M3 Pro 14-core',NULL,0,2),(24,'Unknown','M3 8-core',NULL,0,2),(25,'Unknown','M2 10-core',NULL,0,2),(26,'Unknown','M2 8-core',NULL,0,2),(27,'Unknown','M1 7-core',NULL,0,2);

-- Dữ liệu cho bảng os_version  
INSERT INTO os_version VALUES (1,'Windows 10 Home'),(2,'Windows 11 Home'),(3,'macOS 10.10 Yosemite'),(4,'macOS 10.11 El Capitan'),(5,'macOS 10.12 Sierra'),(6,'macOS 10.13 High Sierra'),(7,'macOS 10.14 Mojave'),(8,'macOS 10.15 Catalina'),(9,'macOS 11 Big Sur'),(10,'macOS 12 Monterey'),(11,'macOS 13 Ventura');

-- Dữ liệu cho bảng user
-- INSERT INTO user VALUES (1,NULL,'2024-12-21 19:32:23.634383','olympic963@gmail.com',NULL,'Nguyễn Anh Tú','$2a$10$3/eJJjiHZinYzhyySwmJtei7K1W5ShTjoU1iv8A0N.BDZyUd50gCu','0357851596','ADMIN');

-- Dữ liệu cho bảng cart
-- INSERT INTO cart VALUES (1,1);

-- Dữ liệu cho bảng laptop
INSERT INTO laptop VALUES (1,'Dung lượng 45W','2024-12-21 19:46:43.422860','32.4 x 22.5 x 1.79 cm, nặng 1.36 kg, mặt lưng nhựa',14,512,'SSD 1 M2 PCIe, không hỗ trợ nâng cấp',' Chiclet Keyboard','14s-dq5121TU',0,'Trung Quốc',12990000,'DDR4, 2 khe cắm rời, hỗ trợ tối đa 32 GB',8,' Anti-glare LED-backlit, 1920 x 1080 pixels (16:9)',14,12,10,17,2);

INSERT INTO laptop VALUES (2,'Dung lượng 90W, Sạc 240W','2024-12-21 19:57:03.608893',' 35.97 x 23.25 x 1.79 ~ 1.79 cm, nặng 2.2 kg, mặt lưng kim loại',16,512,'SSD 1 M2 NVMe, 2 khe cắm, hỗ trợ nâng cấp tối đa 1TB',' Backlit Chiclet Keyboard','TUF Gaming FA507NUR LP101W',0,'Trung Quốc',28490000,'DDR5, 2 khe cắm rời, hỗ trợ tối đa 32 GB',16,' Anti-glare LED, 1920 x 1080 pixels (16:9), tần số quét 144, tấm nền IPS',15.6,24,3,8,2);

INSERT INTO laptop VALUES (3,'Dung lượng 30W','2024-12-21 20:10:29.961999','30.41 x 21.5 x 1.13 cm, 1.24 kg, vỏ nhôm',14,256,'SSD',' English International Backlit Keyboard','Macbook Air M3 13 2024',0,'Trung Quốc',28490000,'LPDDR4, hỗ trợ tối đa 16GB',16,'Liquid Retina  2560 x 1644 pixels, tần số quét 60Hz, tầm nền IPS',13.6,12,2,51,11);

INSERT INTO laptop VALUES (4,'Dung lượng 90Wh, sạc 65W','2024-12-23 16:36:14.287132',' 324.3 x 213.8 x 17.9 mm, nặng 1.37 kg, vỏ nhựa ',17,512,'SSD M2. PCIe1 ',' Bàn phím cứng','IdeaPad 3 14IAH8',0,'Trung Quốc',15990000,'DDR5, 2 khe cắm, hỗ trợ tối đa 16GB',16,'Anti-Glare 1920 x 1080 pixels, tần số quét 60Hz, tầm nền IPS ',14,24,8,22,2);

INSERT INTO laptop VALUES (5,'Dung lượng 52.4Wh, sạc 120W','2024-12-23 16:49:07.002058','359 x 254 x 21.7 mm, nặng 1.86 kg, vỏ nhựa + kim loại ',20,512,'SSD 1 M.2 NVMe ','Single Backlit Keyboard','Gaming Thin A15 B7UC-261VN',0,'Trung Quốc',21990000,'DDR5, 2 khe cắm, hỗ trợ tối đa 64GB',16,'Anti-Glare LED-Backlit Display 1920 x 1080 pixels, tần số quét 144, tấm nền IPSHz, tầm nền IPS ',15.6,24,9,3,2);

INSERT INTO laptop VALUES (6,'Pin Lithium-ion 4 cells','2024-12-23 17:06:22.338815',' 360.4 x 271.09 x 25.9 mm, nặng 2.5kg, vỏ nhựa',28,512,'SSD M.2 NVMe, 1 khe cắm HDD + 2 khe SSD, nâng cấp tối đa 1TB (HDD) và 2TB (SSD)',' English International Backlit Keyboard, RGB 4 Zone','Nitro 5 Tiger Gaming AN515-58-5193',0,'Trung Quốc',26990000,'DDR5, 2 khe cắm, hỗ trợ tối đa 32GB',16,' Acer ComfyView LED-backlit  1920 x 1200 pixels, tần số quét 144Hz, tấm nền IPS',15.6,24,4,22,2);

INSERT INTO laptop VALUES (8,'Pin Lithium-ion 3 cells','2024-12-23 17:29:44.112814',' 358.50 x 235.56 x 18.99 mm, nặng 1.66 kg, vỏ nhựa',10,512,'SSD M.2 PCIe',' English International Non-backlit Keyboard','Inspiron N3530',0,'Trung Quốc',19990000,'DDR4, hỗ trợ tối đa 16GB',16,' Anti-Glare LED Backlit, 1920 x 1080 pixels, tần số quét 120 Hz, tấm nền WVA',15.6,12,5,20,2);

-- Dữ liệu cho bảng laptop_category
INSERT INTO laptop_category VALUES (2,2),(5,2),(6,2),(1,3),(2,3),(3,3),(4,3),(5,3),(6,3),(8,3),(1,4),(3,4),(4,4),(8,4),(3,5);

-- Dữ liệu cho bảng laptop_color
INSERT INTO laptop_color VALUES (1,100,6,1),(2,100,4,2),(3,100,1,3),(4,100,5,3),(5,100,4,3),(6,100,6,3),(7,100,4,4),(8,100,4,5),(9,100,1,6),(11,100,6,8);

-- Dữ liệu cho bảng laptop_gpu
INSERT INTO laptop_gpu VALUES (2,1),(3,1),(5,1),(5,4),(2,6),(6,6),(1,16),(4,16),(6,19),(8,19);

-- Dữ liệu cho bảng laptop_images
INSERT INTO laptop_images VALUES 
(1,'/images/laptop/1/1734785204230_2022_12_7_638060331277213439_hp-14s-dq-bac-4.jpg'),
(1,'/images/laptop/1/1734785204227_2022_12_7_638060331277213439_hp-14s-dq-bac-2.jpg'),
(1,'/images/laptop/1/1734785204233_2022_12_7_638060331277536556_hp-14s-dq-bac-1.jpg'),
(1,'/images/laptop/1/1734785204225_2022_12_7_638060331276811554_hp-14s-dq-bac-3.jpg'),
(1,'/images/laptop/1/1734785204092_2022_12_7_638060331276179591_hp-14s-dq-bac-5.jpg'),
(2,'/images/laptop/2/1734785824072_asus_tuf_gaming_a15_2023_jaeger_gray_4_fa6ce482eb.png'),
(2,'/images/laptop/2/1734785824067_asus_tuf_gaming_a15_2023_jaeger_gray_3_32c5f07d59.png'),
(2,'/images/laptop/2/1734785824055_asus_tuf_gaming_a15_2023_jaeger_gray_1_d406d0a91a.png'),
(2,'/images/laptop/2/1734785824073_asus_tuf_gaming_a15_2023_jaeger_gray_5_a548ec117e.png'),
(2,'/images/laptop/2/1734785824075_asus_tuf_gaming_a15_2023_jaeger_gray_22b3a74a4b.png'),
(2,'/images/laptop/2/1734785824064_asus_tuf_gaming_a15_2023_jaeger_gray_2_a8ae42d3a3.png'),
(3,'/images/laptop/3/1734786630496_2024_3_20_638465302395359512_macbook-air-m3-13-2024-5.jpg'),
(3,'/images/laptop/3/1734786630514_2024_3_20_638465309414918305_macbook-air-m3-13-2024-xanh-1.jpg'),
(3,'/images/laptop/3/1734786630498_2024_3_20_638465302396608901_macbook-air-m3-13-2024-6.jpg'),
(3,'/images/laptop/3/1734786630512_2024_3_20_638465309414449371_macbook-air-m3-13-2024-xanh-2.jpg'),
(3,'/images/laptop/3/1734786630501_2024_3_20_638465309414130328_macbook-air-m3-13-2024-xanh-9.jpg'),
(3,'/images/laptop/3/1734786630505_2024_3_20_638465309414292284_macbook-air-m3-13-2024-xanh-7.jpg'),
(3,'/images/laptop/3/1734786630487_2024_3_20_638465302394266202_macbook-air-m3-13-2024-4.jpg'),
(4,'/images/laptop/4/1734946577690_2023_8_15_638276943814922316_lenovo-ideapad-3-14iah8-xam-1.jpg'),
(4,'/images/laptop/4/1734946577686_2023_8_15_638276943814453136_lenovo-ideapad-3-14iah8-xam-3.jpg'),
(4,'/images/laptop/4/1734946577618_2023_8_15_638276943814296264_lenovo-ideapad-3-14iah8-xam-2.jpg'),
(5,'/images/laptop/5/1734947347511_msi_thin_a15_b7u_4_d76e6974b3.png'),
(5,'/images/laptop/5/1734947347497_msi_thin_a15_b7u_2_22b97279ed.png'),
(5,'/images/laptop/5/1734947347462_msi_thin_a15_b7u_1_502129b847.png'),
(5,'/images/laptop/5/1734947347500_msi_thin_a15_b7u_3_617d4028ff.png'),
(5,'/images/laptop/5/1734947347518_msi_thin_a15_b7u_61070ff9c3.png'),
(6,'/images/laptop/6/1734948382693_acer_nitro_5_tiger_an515_58_3_6c3ef189b6.png'),
(6,'/images/laptop/6/1734948382689_acer_nitro_5_tiger_an515_58_2_a5385bfde2.png'),
(6,'/images/laptop/6/1734948382691_acer_nitro_5_tiger_an515_58_2a10078adb.png'),
(6,'/images/laptop/6/1734948382699_acer_nitro_5_tiger_an515_58_6_bc97c6b2ec.png'),
(6,'/images/laptop/6/1734948382697_acer_nitro_5_tiger_an515_58_5_57c244f8c2.png'),
(6,'/images/laptop/6/1734948382686_acer_nitro_5_tiger_an515_58_1_9235f94842.png'),
(6,'/images/laptop/6/1734948382695_acer_nitro_5_tiger_an515_58_4_a60c9e8c34.png'),
(8,'/images/laptop/8/1734949784527_dell_inspiron_15_3530_sliver_3_d9d5396a56.png'),
(8,'/images/laptop/8/1734949784528_dell_inspiron_15_3530_sliver_4_1c60362d3c.png'),
(8,'/images/laptop/8/1734949784525_dell_inspiron_15_3530_sliver_2_73ec35c560.png'),
(8,'/images/laptop/8/1734949784531_dell_inspiron_15_3530_sliver_049b98a1a0.png'),
(8,'/images/laptop/8/1734949784521_dell_inspiron_15_3530_sliver_1_10d5c22c4e.png');

SET FOREIGN_KEY_CHECKS = 1;
