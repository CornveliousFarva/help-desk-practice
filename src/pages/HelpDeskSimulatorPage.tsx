// src/pages/HelpDeskSimulatorPage.tsx

import { useState } from "react";
import { tickets } from "../data/tickets";
import type { TicketAction } from "../types/ticket";
// import TicketDetails from "../components/TicketDetails";
// import ActionPanel from "../components/ActionPanel";
// import ScoreSummary from "../components/ScoreSummary";

const actionLabels: Record<TicketAction, string> = {
  "ask_clarifying_question": "Ask Clarifying Question",
  "check_kb": "Check Knowledge Base",
  "basic_troubleshooting": "Basic Troubleshooting",
  "escalate": "Escalate",
  "close_ticket": "Close Ticket",
  "recommend_service": "Recommend Service",
  "document_solution": "Document Solution",
  "follow_up": "Follow Up",
  "contact_client": "Contact Client",
  "update_ticket": "Update Ticket",
  "resolve_ticket": "Resolve Ticket",
  "create_ticket": "Create Ticket",
  "assign_ticket": "Assign Ticket",
  "reassign_ticket": "Reassign Ticket",
  "reopen_ticket": "Reopen Ticket",
  "delete_ticket": "Delete Ticket",
  "archive_ticket": "Archive Ticket",
  "restore_ticket": "Restore Ticket",
  "notify_client": "Notify Client",
  "add_note": "Add Note",
  "remove_note": "Remove Note",
  "edit_note": "Edit Note",
  "view_ticket": "View Ticket",
  "search_tickets": "Search Tickets",
  "export_tickets": "Export Tickets",
  "import_tickets": "Import Tickets",
  "generate_report": "Generate Report",
  "view_report": "View Report",
  "update_report": "Update Report",
};

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

  const score = Math.max(0, correctCount * 25 - badCount * 20 - missedCount * 10);

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
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                Ticket #{ticket.id}
              </p>
              <h2 className="text-2xl font-semibold">{ticket.title}</h2>
              <p className="mt-1 text-slate-300">{ticket.client}</p>
            </div>

            <div className="flex gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                {ticket.status}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                {ticket.priority}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                {ticket.category}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Description</h3>
            <p className="text-slate-300">{ticket.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-lg font-semibold">Environment</h3>
            <div className="flex flex-wrap gap-2">
              {ticket.environment.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Choose your actions</h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(actionLabels) as TicketAction[]).map((action) => {
                const selected = selectedActions.includes(action);

                return (
                  <button
                    key={action}
                    onClick={() => toggleAction(action)}
                    className={`rounded-xl border p-4 text-left transition ${
                      selected
                        ? "border-blue-400 bg-blue-500/20"
                        : "border-slate-700 bg-slate-800 hover:bg-slate-700"
                    }`}
                  >
                    {actionLabels[action]}
                  </button>
                );
              })}
            </div>
          </div>

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
            <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h3 className="text-xl font-semibold">Result</h3>

              <p className="mt-3 text-slate-300">
                Score: <span className="font-bold text-white">{score}</span>
              </p>

              <p className="mt-2 text-slate-300">
                Correct actions selected: {correctCount}
              </p>

              <p className="mt-2 text-slate-300">
                Bad actions selected: {badCount}
              </p>

              <p className="mt-2 text-slate-300">
                Missed recommended actions: {missedCount}
              </p>

              {ticket.salesOpportunity && (
                <div className="mt-4 rounded-lg bg-slate-900 p-4">
                  <h4 className="font-semibold">Sales / Client Success Note</h4>
                  <p className="mt-2 text-slate-300">
                    {ticket.salesOpportunity}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}