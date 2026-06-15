// src/components/ActionPanel.tsx

import type { TicketAction } from "../types/ticket";

type ActionPanelProps = {
  selectedActions: TicketAction[];
  submitted: boolean;
  onToggleAction: (action: TicketAction) => void;
};

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

export default function ActionPanel({
  selectedActions,
  submitted,
  onToggleAction,
}: ActionPanelProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Choose your actions</h3>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(actionLabels) as TicketAction[]).map((action) => {
          const selected = selectedActions.includes(action);

          return (
            <button
              key={action}
              onClick={() => onToggleAction(action)}
              disabled={submitted}
              className={`rounded-xl border p-4 text-left transition ${
                selected
                  ? "border-blue-400 bg-blue-500/20"
                  : "border-slate-700 bg-slate-800 hover:bg-slate-700"
              } disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {actionLabels[action]}
            </button>
          );
        })}
      </div>
    </div>
  );
}