// src/components/TicketDetails.tsx

import type { Ticket } from "../types/ticket";

type TicketDetailsProps = {
  ticket: Ticket;
};

export default function TicketDetails({ ticket }: TicketDetailsProps) {
  return (
    <>
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
    </>
  );
}