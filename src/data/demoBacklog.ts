import { FeatureInput } from "@/lib/types";
// Demo Backlog
// These example features simulate a SaaS analytics product roadmap
// Used to demonstrate RICE prioritization logic
export const demoBacklog: FeatureInput[] = [
  {
    id: "1",
    name: "AI Auto Summarization",
    problemStatement: "Users struggle to extract insights from long dashboards",
    reach: 2000,
    impact: 3,
    confidence: 0.8,
    effort: 4
  },
  {
    id: "2",
    name: "One-Click Report Export",
    problemStatement: "Users manually compile weekly reports",
    reach: 1200,
    impact: 2,
    confidence: 0.9,
    effort: 2
  },
  {
    id: "3",
    name: "Advanced Segmentation Filters",
    problemStatement: "Power users need deeper audience slicing",
    reach: 300,
    impact: 3,
    confidence: 0.7,
    effort: 1
  }
];