// src/pages/HelpDeskSimulatorPage.tsx

import { useState } from "react";
import { tickets } from "../data/tickets";
import type { TicketAction } from "../types/ticket";
import ActionPanel from "../components/ActionPanel";
import ScoreSummary from "../components/ScoreSummary";

type HelpDeskTicket = (typeof tickets)[number];

function TicketDetails({ ticket }: { ticket: HelpDeskTicket }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 mb-6">
      <h2 className="text-2xl font-semibold">Support Ticket</h2>
      <pre className="mt-4 overflow-x-auto text-slate-300">
        {JSON.stringify(ticket, null, 2)}
      </pre>
    </div>
  );
}

export default function HelpDeskSimulatorPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedActions, setSelectedActions] = useState<TicketAction[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const ticket = tickets[currentIndex];

  const toggleAction = (action: TicketAction) => {
    if (submitted) return;

    setSelectedActions((prev) =>
      prev.includes(action)
        ? prev.filter((item) => item !== action)
        : [...prev, action]
    );
  };

  const correctCount = selectedActions.filter((action) =>
    ticket.correctActions.includes(action)
  ).length;

  const badCount = selectedActions.filter((action) =>
    ticket.badActions.includes(action)
  ).length;

  const missedCount = ticket.correctActions.filter(
    (action) => !selectedActions.includes(action)
  ).length;

  const score = Math.max(
    0,
    correctCount * 25 - badCount * 20 - missedCount * 10
  );

  const nextTicket = () => {
    setCurrentIndex((prev) => (prev + 1) % tickets.length);
    setSelectedActions([]);
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Help Desk Simulator</h1>
          <p className="mt-4 text-slate-300">
            Review the ticket, choose the best support actions, and see how your
            troubleshooting judgment scores.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
          <TicketDetails ticket={ticket} />

          <ActionPanel
            selectedActions={selectedActions}
            submitted={submitted}
            onToggleAction={toggleAction}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSubmitted(true)}
              disabled={submitted || selectedActions.length === 0}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit actions
            </button>

            <button
              onClick={nextTicket}
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              Next ticket
            </button>
          </div>

          {submitted && (
            <ScoreSummary
              score={score}
              correctCount={correctCount}
              badCount={badCount}
              missedCount={missedCount}
              salesOpportunity={ticket.salesOpportunity}
            />
          )}
        </div>
      </section>
    </main>
  );
}