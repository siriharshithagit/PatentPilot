export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-10">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          About PatentPilot
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Overview
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            PatentPilot is an AI-assisted Freedom-to-Operate (FTO) workspace
            designed to help researchers, students, and innovators quickly
            analyze chemical compounds. It enables users to search compounds
            using SMILES notation, retrieve molecular information from PubChem,
            generate AI-powered summaries, store previous analyses, and create
            professional patentability reports with PDF export.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-blue-50 rounded-lg p-5 shadow">
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                🔍 Molecule Search
              </h3>

              <p className="text-gray-700">
                Search compounds using SMILES notation and retrieve molecular
                information from PubChem.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 shadow">
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                🤖 AI Summary
              </h3>

              <p className="text-gray-700">
                Generate AI-assisted summaries explaining the compound and its
                potential applications.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 shadow">
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                📚 Analysis History
              </h3>

              <p className="text-gray-700">
                Store every analysis in MongoDB and revisit previous searches
                at any time.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 shadow">
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                📄 Patentability Reports
              </h3>

              <p className="text-gray-700">
                Generate professional reports and export them as PDF documents.
              </p>
            </div>

          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Technology Stack
          </h2>

          <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              Next.js
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              React
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              Tailwind CSS
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              FastAPI
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              MongoDB
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              Gemini AI
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              PubChem API
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center font-semibold">
              jsPDF
            </div>

          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Workflow
          </h2>

          <div className="bg-gray-100 rounded-lg p-6 text-center text-lg font-medium text-gray-700">
            User Input
            <br />⬇️<br />
            Molecule Search
            <br />⬇️<br />
            PubChem API
            <br />⬇️<br />
            AI Summary (Gemini)
            <br />⬇️<br />
            MongoDB Storage
            <br />⬇️<br />
            Patentability Report
            <br />⬇️<br />
            PDF Export
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Project Goal
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            PatentPilot simplifies early-stage patent research by combining
            compound search, AI-generated insights, history management, and
            professional reporting into a single platform. It helps users
            quickly assess compounds before performing a detailed
            Freedom-to-Operate analysis.
          </p>
        </section>

      </div>
    </main>
  );
}