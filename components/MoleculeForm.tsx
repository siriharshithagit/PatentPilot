"use client";

import { useState } from "react";
import axios from "axios";
import PatentList from "./PatentList";

type Patent = {
  _id?: string;
  title: string;
  patent_number: string;
  publication_date: string;
  assignee: string;
  abstract: string;
  source: string;
  score: number;
  ai_summary?: string;
};

export default function MoleculeForm() {
  const [smiles, setSmiles] = useState("");
  const [target, setTarget] = useState("");
  const [disease, setDisease] = useState("");

  const [patents, setPatents] = useState<Patent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/search",
        {
          smiles,
          target,
          disease,
        }
      );

      setPatents(response.data.patents);
    } catch (err) {
      console.error(err);
      setError("Unable to search patents. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 my-12">
      <h2 className="text-black text-3xl font-bold text-center mb-8">
        Molecule Submission
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-black block font-semibold mb-2">
            SMILES *
          </label>

          <input
            type="text"
            value={smiles}
            onChange={(e) => setSmiles(e.target.value)}
            placeholder="Enter SMILES notation"
            className="text-black w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="text-black block font-semibold mb-2">
            Target (Optional)
          </label>

          <input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Example: EGFR"
            className="text-black w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-black block font-semibold mb-2">
            Disease (Optional)
          </label>

          <input
            type="text"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            placeholder="Example: Lung Cancer"
            className="text-black w-full border rounded-lg p-3"
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          {loading ? "Searching..." : "Search Patents"}
        </button>
      </form>

      {patents.length > 0 && (
        <div className="mt-10">
          <PatentList patents={patents} />
        </div>
      )}
    </div>
  );
}