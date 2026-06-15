// src/types/ticket.ts

export type TicketPriority = "Low" | "Medium" | "High" | "Critical"

export type TicketAction =
  | "ask_clarifying_question"
  | "check_kb"
  | "basic_troubleshooting"
  | "escalate"
  | "close_ticket"
  | "recommend_service"

export type Ticket = {
  id: number
  title: string
  client: string
  priority: TicketPriority
  category: string
  environment: string[]
  description: string
  correctActions: TicketAction[]
  badActions: TicketAction[]
  salesOpportunity?: string
}