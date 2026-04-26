import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "20",
  "folder": "20-revlio-support",
  "appName": "Revlio Support",
  "domain": "Customer Support",
  "heroHeadline": "Resolve issues faster",
  "heroSubtitle": "simplify your support requests, track agent performance, and keep your customers happy with a clean ticketing system.",
  "features": [
    {
      "icon": "Inbox",
      "title": "Unified Inbox",
      "description": "Manage all customer inquiries from a single centralized queue."
    },
    {
      "icon": "AlertCircle",
      "title": "Priority Triage",
      "description": "Automatically flag urgent issues that need immediate attention."
    },
    {
      "icon": "Headset",
      "title": "Agent Workload",
      "description": "Distribute tickets evenly across your support team."
    },
    {
      "icon": "Clock",
      "title": "Response Metrics",
      "description": "Track average resolution time and ensure SLAs are met."
    }
  ],
  "stats": [
    {
      "label": "Open Tickets",
      "value": "42",
      "trend": "-8"
    },
    {
      "label": "Avg Response Time",
      "value": "14 mins",
      "trend": "-2m"
    },
    {
      "label": "Resolution Rate",
      "value": "95%",
      "trend": "+1%"
    },
    {
      "label": "Active Agents",
      "value": "6",
      "trend": "Online"
    }
  ],
  "tableColumns": [
    {
      "key": "subject",
      "label": "Ticket#"
    },
    {
      "key": "customer",
      "label": "Subject"
    },
    {
      "key": "priority",
      "label": "Customer"
    },
    {
      "key": "agent",
      "label": "Priority"
    },
    {
      "key": "status",
      "label": "Agent"
    }
  ],
  "tableRows": [
    {
      "id": "TKT-1001",
      "subject": "Cannot access my account",
      "customer": "alex@example.com",
      "priority": "High",
      "agent": "Sarah J.",
      "status": "Open"
    },
    {
      "id": "TKT-1002",
      "subject": "Billing issue on last invoice",
      "customer": "pt.jaya@corp.id",
      "priority": "Medium",
      "agent": "Budi S.",
      "status": "In Progress"
    },
    {
      "id": "TKT-1003",
      "subject": "How to export data?",
      "customer": "dina.w@startup.com",
      "priority": "Low",
      "agent": "Sarah J.",
      "status": "Resolved"
    },
    {
      "id": "TKT-1004",
      "subject": "System downtime report",
      "customer": "admin@techcorp.net",
      "priority": "Critical",
      "agent": "Manager",
      "status": "Escalated"
    },
    {
      "id": "TKT-1005",
      "subject": "Feature request: Dark mode",
      "customer": "kevin.h@dev.io",
      "priority": "Low",
      "agent": "Budi S.",
      "status": "Open"
    },
    {
      "id": "TKT-1006",
      "subject": "Refund requested",
      "customer": "maya.sari@mail.com",
      "priority": "High",
      "agent": "Sarah J.",
      "status": "In Progress"
    },
    {
      "id": "TKT-1007",
      "subject": "API rate limit exceeded",
      "customer": "dev@fintech.co.id",
      "priority": "Medium",
      "agent": "Budi S.",
      "status": "Resolved"
    },
    {
      "id": "TKT-1008",
      "subject": "Database connection error",
      "customer": "sysadmin@enterprise.com",
      "priority": "Critical",
      "agent": "Manager",
      "status": "Escalated"
    }
  ],
  "statuses": [
    "Open",
    "In Progress",
    "Resolved",
    "Escalated"
  ],
  "ctaHeadline": "support your support team",
  "ctaSubtitle": "Give them the tools they need to provide exceptional service.",
  "ctaButtonText": "View Support Queue",
  "readmeDescription": "A customer support ticketing system for tracking user inquiries, agent assignments, and resolution metrics.",
  "readmeFeaturesList": [
    "Ticket queue management",
    "Priority tagging",
    "Agent assignment",
    "Response time analytics"
  ],
  "theme": {
    "heroLayout": "left",
    "navStyle": "solid",
    "cardStyle": "bordered",
    "primary": "#0891b2",
    "secondary": "#06b6d4",
    "accent": "#ecfeff",
    "background": "#ffffff",
    "text": "#164e63",
    "heroGradient": "linear-gradient(135deg, rgba(8, 145, 178, 0.98) 0%, rgba(6, 182, 212, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(6, 182, 212, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(236, 254, 255, 0.14) 0%, transparent 28%)",
    "surface": "rgba(8, 145, 178, 0.05)",
    "surfaceStrong": "rgba(8, 145, 178, 0.08)",
    "border": "rgba(8, 145, 178, 0.12)",
    "borderStrong": "rgba(8, 145, 178, 0.22)",
    "softText": "rgba(22, 78, 99, 0.72)",
    "primarySoft": "rgba(8, 145, 178, 0.12)",
    "secondarySoft": "rgba(6, 182, 212, 0.12)",
    "secondaryStrong": "rgba(6, 182, 212, 0.18)",
    "accentSoft": "rgba(236, 254, 255, 0.8)"
  }
};
