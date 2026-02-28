import { FeatureInput } from "@/lib/types";

export const sampleFeatures: FeatureInput[] = [
  {
    id: "1",
    name: "Smart Filters",
    problemStatement: "Users cannot narrow search effectively.",
    reach: 2000,
    impact: 3,
    confidence: 0.8,
    effort: 4
  },
  {
    id: "2",
    name: "Dark Mode",
    problemStatement: "Users request better night usability.",
    reach: 1200,
    impact: 2,
    confidence: 0.9,
    effort: 2
  },
  {
    id: "3",
    name: "Bulk Export",
    problemStatement: "Admins need faster data extraction.",
    reach: 300,
    impact: 3,
    confidence: 0.7,
    effort: 1
  }
];