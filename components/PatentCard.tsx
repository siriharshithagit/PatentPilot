import Link from "next/link";

type Patent = {
  title: string;
  patent_number: string;
  publication_date: string;
  assignee: string;
  abstract: string;
  source: string;
  score: number;
  ai_summary: string;
};

type Props = {
  patent: Patent;
};

export default function PatentCard({ patent }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-700">
        {patent.title}
      </h2>

      <div className="mt-4 space-y-2 text-gray-700">
        <p>
          <strong>Patent Number:</strong> {patent.patent_number}
        </p>

        <p>
          <strong>Publication:</strong> {patent.publication_date}
        </p>

        <p>
          <strong>Assignee:</strong> {patent.assignee}
        </p>

        <p>
          <strong>Source:</strong> {patent.source}
        </p>

        <p>
          <strong>Similarity:</strong>{" "}
          {(patent.score * 100).toFixed(1)}%
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">
          Compound Information
        </h3>

        <p className="text-gray-700 whitespace-pre-line">
          {patent.abstract}
        </p>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-bold text-blue-700 mb-2">
          🤖 AI Summary
        </h3>

        <p className="text-gray-700 whitespace-pre-line">
          {patent.ai_summary}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          href={`/report?title=${encodeURIComponent(
            patent.title
          )}&patent_number=${encodeURIComponent(
            patent.patent_number
          )}&publication_date=${encodeURIComponent(
            patent.publication_date
          )}&assignee=${encodeURIComponent(
            patent.assignee
          )}&abstract=${encodeURIComponent(
            patent.abstract
          )}&source=${encodeURIComponent(
            patent.source
          )}&score=${patent.score}&ai_summary=${encodeURIComponent(
            patent.ai_summary
          )}`}
        >
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            📄 View Report
          </button>
        </Link>
      </div>
    </div>
  );
}