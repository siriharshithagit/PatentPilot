import requests

from app.ai.gemini_service import explain_compound
from app.database.mongodb import collection


def search_patents(smiles: str):
    """
    Fetch compound information from PubChem using a SMILES string.
    """

    url = (
        "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
        f"{smiles}/property/IUPACName,MolecularFormula,MolecularWeight/JSON"
    )

    try:
        response = requests.get(url, timeout=10)

        if response.status_code != 200:
            return []

        data = response.json()

        props = data["PropertyTable"]["Properties"][0]

        ai_summary = explain_compound(
            props["IUPACName"],
            props["MolecularFormula"]
        )

        result = {
            "title": props["IUPACName"],
            "patent_number": "N/A",
            "publication_date": "N/A",
            "assignee": "PubChem",
            "abstract": (
                f"Molecular Formula: {props['MolecularFormula']}\n"
                f"Molecular Weight: {props['MolecularWeight']}"
            ),
            "source": "PubChem",
            "score": 1.0,
            "ai_summary": ai_summary,
        }

        # Create a copy for MongoDB
        db_result = result.copy()

        # Save the copy to MongoDB
        collection.insert_one(db_result)

        # Return the original object to the frontend
        return [result]

    except Exception as e:
        print("Error:", e)
        return []