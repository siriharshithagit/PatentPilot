import PatentCard from "./PatentCard";

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

type Props = {
  patents: Patent[];
};

export default function PatentList({ patents }: Props) {
  if (!patents || patents.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No patent results found.
      </p>
    );
  }

  return (
    <div className="grid gap-6">
      {patents.map((patent, index) => (
        <PatentCard
          key={patent._id || index}
          patent={patent}
        />
      ))}
    </div>
  );
}