// src/components/ScoreSummary.tsx
// src/components/ScoreSummary.tsx

type ScoreSummaryProps = {
  score: number;
  correctCount: number;
  badCount: number;
  missedCount: number;
  salesOpportunity?: string;
};

export default function ScoreSummary({
  score,
  correctCount,
  badCount,
  missedCount,
  salesOpportunity,
}: ScoreSummaryProps) {
  return (
    <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="text-xl font-semibold">Result</h3>

      <p className="mt-3 text-slate-300">
        Score: <span className="font-bold text-white">{score}</span>
      </p>

      <p className="mt-2 text-slate-300">
        Correct actions selected: {correctCount}
      </p>

      <p className="mt-2 text-slate-300">Bad actions selected: {badCount}</p>

      <p className="mt-2 text-slate-300">
        Missed recommended actions: {missedCount}
      </p>

      {salesOpportunity && (
        <div className="mt-4 rounded-lg bg-slate-900 p-4">
          <h4 className="font-semibold">Sales / Client Success Note</h4>
          <p className="mt-2 text-slate-300">{salesOpportunity}</p>
        </div>
      )}
    </div>
  );
}