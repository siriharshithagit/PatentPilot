def explain_compound(compound_name: str, formula: str):
    prompt = f"""
    Explain this compound.

    Compound: {compound_name}
    Formula: {formula}

    Mention:
    1. What it is
    2. Applications
    3. Pharmaceutical importance
    4. Patent relevance
    """

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print("Gemini Error:", e)
        return "AI summary is temporarily unavailable because the Gemini API quota has been reached. Please try again later."