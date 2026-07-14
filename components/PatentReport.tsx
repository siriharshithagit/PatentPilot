"use client";

import { jsPDF } from "jspdf";

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

export default function PatentReport({ patent }: Props) {
  const assessment =
    patent.score >= 0.9
      ? "High similarity with existing compounds. Prior art likely exists. Consider structural modifications before filing."
      : patent.score >= 0.7
      ? "Moderate similarity detected. Further patent landscape analysis is recommended."
      : "Low similarity detected. The compound may have good patentability potential.";

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("Patentability Report", 20, y);

    y += 15;

    doc.setFontSize(16);
    doc.text("Compound Information", 20, y);

    y += 10;

    doc.setFontSize(12);
    doc.text(`Compound: ${patent.title}`, 20, y);

    y += 8;
    doc.text(`Patent Number: ${patent.patent_number}`, 20, y);

    y += 8;
    doc.text(`Publication: ${patent.publication_date}`, 20, y);

    y += 8;
    doc.text(`Assignee: ${patent.assignee}`, 20, y);

    y += 8;
    doc.text(`Source: ${patent.source}`, 20, y);

    y += 8;
    doc.text(
      `Similarity: ${(patent.score * 100).toFixed(1)}%`,
      20,
      y
    );

    y += 15;

    doc.setFontSize(16);
    doc.text("Compound Details", 20, y);

    y += 8;

    doc.setFontSize(12);

    const abstractLines = doc.splitTextToSize(
      patent.abstract,
      170
    );

    doc.text(abstractLines, 20, y);

    y += abstractLines.length * 7 + 10;

    doc.setFontSize(16);
    doc.text("AI Summary", 20, y);

    y += 8;

    doc.setFontSize(12);

    const aiLines = doc.splitTextToSize(
      patent.ai_summary,
      170
    );

    doc.text(aiLines, 20, y);

    y += aiLines.length * 7 + 10;

    doc.setFontSize(16);
    doc.text("Patentability Assessment", 20, y);

    y += 8;

    doc.setFontSize(12);

    const assessmentLines = doc.splitTextToSize(
      assessment,
      170
    );

    doc.text(assessmentLines, 20, y);

    y += assessmentLines.length * 10;

    doc.setFontSize(16);
    doc.text("Recommendation", 20, y);

    y += 8;

    doc.setFontSize(12);

    doc.text(
      [
        "• Review similar patents before filing.",
        "• Perform a Freedom-to-Operate analysis.",
        "• Consult a patent attorney.",
        "• Validate novelty using multiple patent databases."
      ],
      20,
      y
    );

    doc.save("Patentability_Report.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-10 my-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Patentability Report
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Compound Information
        </h2>

        <p>
          <strong>Compound:</strong> {patent.title}
        </p>

        <p className="mt-3 whitespace-pre-line">
          {patent.abstract}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Patent Information
        </h2>

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
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 border-b pb-2 mb-4">
          🤖 AI Summary
        </h2>

        <p className="whitespace-pre-line">
          {patent.ai_summary}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 border-b pb-2 mb-4">
          📊 Patentability Assessment
        </h2>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
          {assessment}
        </div>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-700 mb-3">
          💡 Recommendation
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Review similar patents before filing.</li>
          <li>Perform a Freedom-to-Operate analysis.</li>
          <li>Consult a patent attorney.</li>
          <li>Validate novelty using multiple patent databases.</li>
        </ul>
      </section>

      <div className="flex justify-center mt-10">
        <button
          onClick={downloadPDF}
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
        >
          📥 Download PDF
        </button>
      </div>
    </div>
  );
}