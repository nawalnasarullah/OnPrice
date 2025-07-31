from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()  # Loads from .env file

MONGO_URI = os.getenv("MONGO_URI", "mongodb://127.0.0.1")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "onPrice")

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB_NAME]

user_collection = db["user"]

# Optional async function to test connection
async def test_connection():
    try:
        await client.admin.command("ping")
        print("MongoDB connected successfully")
    except Exception as e:
        print("Failed to connect to MongoDB:", e)