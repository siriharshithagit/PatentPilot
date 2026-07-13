from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client["patentpilot"]

collection = db["analyses"]