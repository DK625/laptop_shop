from app.db import db
from datetime import datetime


class LaptopImage(db.Model):
    __tablename__ = 'laptop_images'

    laptop_id = db.Column(db.Integer, db.ForeignKey('laptop.id'), primary_key=True)
    image_url = db.Column(db.String(255), primary_key=True)


class Laptop(db.Model):
    __tablename__ = 'laptop'

    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(255), nullable=False)
    status = db.Column(db.SmallInteger, default=1)
    brand_id = db.Column(db.Integer)
    cpu_id = db.Column(db.Integer)
    ram_memory = db.Column(db.SmallInteger)
    ram_detail = db.Column(db.String(255))
    disk_capacity = db.Column(db.SmallInteger)
    disk_detail = db.Column(db.String(255), nullable=False)
    screen_size = db.Column(db.Float)
    screen_detail = db.Column(db.String(255), nullable=False)
    os_version_id = db.Column(db.Integer)
    keyboard_type = db.Column(db.String(255))
    battery_charger = db.Column(db.String(255))
    design = db.Column(db.String(255))
    origin = db.Column(db.String(255))
    warranty = db.Column(db.SmallInteger)
    price = db.Column(db.BigInteger)
    discount_percent = db.Column(db.Float)
    num_ratings = db.Column(db.Integer)
    created_at = db.Column(db.DateTime)

    # Relationships
    images = db.relationship('LaptopImage', lazy='joined')

    def to_dict(self):
        return {
            "id": self.id,
            "model": self.model,
            "status": self.status,
            "brand_id": self.brand_id,  # thay vì dùng brand.to_dict()
            "cpu_id": self.cpu_id,  # thay vì dùng cpu.to_dict()
            "ramMemory": self.ram_memory,
            "ramDetail": self.ram_detail,
            "diskCapacity": self.disk_capacity,
            "diskDetail": self.disk_detail,
            "screenSize": self.screen_size,
            "screenDetail": self.screen_detail,
            "osVersionId": self.os_version_id,  # thay vì dùng os_version.to_dict()
            "keyboardType": self.keyboard_type,
            "batteryCharger": self.battery_charger,
            "design": self.design,
            "origin": self.origin,
            "warranty": self.warranty,
            "price": self.price,
            "discountPercent": self.discount_percent,
            "numRatings": self.num_ratings,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
            "imageUrls": [img.image_url for img in self.images]
        }
