type Patent = {
  score: number;
  ai_summary?: string;
};

type Props = {
  patents: Patent[];
};

export default function Dashboard({ patents }: Props) {
  const totalSearches = patents.length;

  const avgSimilarity =
    patents.length === 0
      ? 0
      : (
          patents.reduce((sum, p) => sum + p.score, 0) /
          patents.length
        ) * 100;

  const aiSummaries = patents.filter(
    (p) => p.ai_summary && p.ai_summary.length > 0
  ).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-lg font-semibold">Total Searches</h2>
        <p className="text-4xl font-bold mt-4">
          {totalSearches}
        </p>
      </div>

      <div className="bg-green-600 text-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-lg font-semibold">Average Similarity</h2>
        <p className="text-4xl font-bold mt-4">
          {avgSimilarity.toFixed(1)}%
        </p>
      </div>

      <div className="bg-purple-600 text-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-lg font-semibold">AI Summaries</h2>
        <p className="text-4xl font-bold mt-4">
          {aiSummaries}
        </p>
      </div>

    </div>
  );
}