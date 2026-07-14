"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Dashboard from "../../components/Dashboard";
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
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
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

  const filteredHistory = useMemo(() => {
    const filtered = [...history].filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortBy) {
      case "az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "high":
        filtered.sort((a, b) => b.score - a.score);
        break;

      case "low":
        filtered.sort((a, b) => a.score - b.score);
        break;

      default:
        break;
    }

    return filtered;
  }, [history, search, sortBy]);

  return (
    <main className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Analysis History
      </h1>

      {/* Dashboard */}
      <Dashboard patents={history} />

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search compound..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-white flex-1 border rounded-lg p-3 text-black"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-white border rounded-lg p-3 text-black"
        >
          <option value="default" className="text-black">Default</option>
          <option value="az" className="text-black">A → Z</option>
          <option value="za" className="text-black">Z → A</option>
          <option value="high" className="text-black">Highest Similarity</option>
          <option value="low" className="text-black">Lowest Similarity</option>
        </select>

      </div>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">
          Loading history...
        </p>
      ) : filteredHistory.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No analyses found.
        </p>
      ) : (
        <PatentList patents={filteredHistory} />
      )}

    </main>
  );
}