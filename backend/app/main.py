from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.services.patent_service import search_patents
from app.database.mongodb import collection

app = FastAPI(
    title="PatentPilot API",
    description="AI-assisted Freedom-to-Operate Workspace",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Molecule(BaseModel):
    smiles: str
    target: str | None = ""
    disease: str | None = ""


@app.get("/")
def home():
    return {
        "status": "running",
        "project": "PatentPilot"
    }


@app.post("/search")
def search_patent(data: Molecule):

    patents = search_patents(data.smiles)

    return {
        "query": {
            "smiles": data.smiles,
            "target": data.target,
            "disease": data.disease,
        },
        "patents": patents
    }


@app.get("/history")
def get_history():

    history = []

    for item in collection.find():
        item["_id"] = str(item["_id"])
        history.append(item)

    return history