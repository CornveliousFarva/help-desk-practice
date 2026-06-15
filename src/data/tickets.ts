// src/data/tickets.ts

import type { Ticket } from "../types/ticket"

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "User cannot sign into Microsoft 365",
    client: "North Coast Dental",
    status: "Open",
    priority: "High",
    category: "Microsoft 365",
    environment: ["Windows 11", "Microsoft 365", "MFA"],
    description:
      "A user reports that they cannot access Outlook or Teams after getting a new phone.",
    correctActions: [
      "ask_clarifying_question",
      "basic_troubleshooting",
      "check_kb",
    ],
    badActions: ["close_ticket"],
    salesOpportunity:
      "Recommend documenting MFA recovery steps for future onboarding/offboarding."
  },
  {
    id: 2,
    title: "Printer shows offline",
    client: "Harbor Legal Group",
    status: "Open",
    priority: "Medium",
    category: "Printers",
    environment: ["Windows 10", "Network Printer", "Office LAN"],
    description:
      "Several users say the main office printer is offline, but the printer display shows ready.",
    correctActions: [
      "ask_clarifying_question",
      "basic_troubleshooting",
      "check_kb",
    ],
    badActions: ["escalate", "close_ticket"],
    salesOpportunity:
      "Suggest proactive printer documentation or managed print monitoring."
  },
  {
    id: 3,
    title: "VPN will not connect from home",
    client: "Pacific Accounting Services",
    status: "Open",
    priority: "High",
    category: "Networking",
    environment: ["Windows 11", "VPN", "Remote Work"],
    description:
      "A remote employee says the VPN fails immediately after entering credentials.",
    correctActions: [
      "ask_clarifying_question",
      "basic_troubleshooting",
      "escalate",
    ],
    badActions: ["close_ticket"],
    salesOpportunity:
      "Recommend reviewing remote access documentation and MFA enrollment."
  }
]