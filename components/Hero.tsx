export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 px-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-6 text-center">
        PatentPilot
      </h1>

      <p className="text-xl text-gray-700 text-center max-w-2xl mb-10">
        AI-assisted Freedom-to-Operate workspace for discovering relevant
        patents, analyzing similarity, and generating patentability reports.
      </p>

      <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-800 transition">
        Search Molecule
      </button>
    </section>
  );
}