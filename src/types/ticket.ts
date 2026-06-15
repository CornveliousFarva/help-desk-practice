// src/types/ticket.ts
export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Closed"
export type TicketPriority = "Low" | "Medium" | "High" | "Critical"

export type TicketAction =
  | "ask_clarifying_question"
  | "check_kb"
  | "basic_troubleshooting"
  | "escalate"
  | "close_ticket"
  | "recommend_service"
  | "document_solution"
  | "follow_up"
  | "contact_client"
  | "update_ticket"
  | "resolve_ticket"
  | "create_ticket"
  | "assign_ticket"
  | "reassign_ticket"
  | "close_ticket"
  | "reopen_ticket"
  | "delete_ticket"
  | "archive_ticket"
  | "restore_ticket"
  | "notify_client"
  | "add_note"
  | "remove_note"
  | "edit_note"
  | "view_ticket"
  | "search_tickets"
  | "export_tickets"
  | "import_tickets"
  | "generate_report"
  | "view_report"
  | "update_report"

export type Ticket = {
  id: number
  title: string
  client: string
  status: TicketStatus
  priority: TicketPriority
  category: string
  environment: string[]
  description: string
  correctActions: TicketAction[]
  badActions: TicketAction[]
  salesOpportunity?: string
}