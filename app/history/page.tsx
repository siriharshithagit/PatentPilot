"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PatentList from "../../components/PatentList";

type Patent = {
  _id: string;
  title: string;
  patent_number: string;
  publication_date: string;
  assignee: string;
  abstract: string;
  source: string;
  score: number;
  ai_summary: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<Patent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/history");
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Analysis History
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : history.length === 0 ? (
        <p className="text-center text-gray-600">
          No previous analyses found.
        </p>
      ) : (
        <PatentList patents={history} />
      )}
    </main>
  );
}