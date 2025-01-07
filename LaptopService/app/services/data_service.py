import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input
from io import BytesIO
import faiss
import sqlite3
import logging

from app.model import LaptopImage

logger = logging.getLogger(__name__)

def get_embedding_from_file(model, file_stream):

    img = image.load_img(BytesIO(file_stream.read()), target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    embedding = model.predict(x).reshape(-1)
    return embedding

def normalize_embedding(embedding):

    norm = np.linalg.norm(embedding)
    return embedding / norm

def search_similar_images(embedding, index, k=5):

    normalized_query = normalize_embedding(embedding)
    _, indices = index.search(np.array([normalized_query], dtype=np.float32), k)
    return indices[0]

def get_image_names_from_db(indices):
    connection = sqlite3.connect('app/static/image_embeddings.db')
    cursor = connection.cursor()
    indices_str = ', '.join(map(str, indices))
    query = f"SELECT image_name FROM embeddings WHERE faiss_id IN ({indices_str})"
    cursor.execute(query)
    results = [row[0] for row in cursor.fetchall()]

    connection.close()
    return results


def get_laptops_from_images(image_names):
    from app.model import Laptop
    from sqlalchemy import or_
    laptops = []
    try:
        # Tạo điều kiện OR cho mỗi image_name
        like_conditions = [LaptopImage.image_url.like(f'%{image_name}') for image_name in image_names]
        # Query với điều kiện OR
        laptops = Laptop.query.join(LaptopImage).filter(or_(*like_conditions)).all()
    except Exception as e:
        logger.error(f"Database error: {str(e)}")
        print(e)
    return [laptop.to_dict() for laptop in laptops]
