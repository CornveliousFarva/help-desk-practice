// src/types/ticket.ts

export type TicketStatus = "open" | "in-progress" | "resolved";

export type TicketPriority = "low" | "medium" | "high";

export type TicketAction =
  | "ask-question"
  | "check-status"
  | "check-history"
  | "comment"
  | "add-attachment"
  | "assign"
  | "transfer"
  | "escalate"
  | "resolve"
  | "reopen"
  | "close";

export type Ticket = {
  id: number;
  title: string;
  client: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: string;
  environment: string[];
  description: string;
  correctActions: TicketAction[];
  badActions: TicketAction[];
  salesOpportunity?: string;
};