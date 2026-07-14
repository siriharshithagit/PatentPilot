"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PatentReport from "../../components/PatentReport";

function ReportContent() {
  const params = useSearchParams();

  const patent = {
    title: params.get("title") || "",
    patent_number: params.get("patent_number") || "",
    publication_date: params.get("publication_date") || "",
    assignee: params.get("assignee") || "",
    abstract: params.get("abstract") || "",
    source: params.get("source") || "",
    score: Number(params.get("score")) || 0,
    ai_summary: params.get("ai_summary") || "",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <PatentReport patent={patent} />
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading report...</p>}>
      <ReportContent />
    </Suspense>
  );
}