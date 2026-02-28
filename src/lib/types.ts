export interface FeatureInput {
  id: string;
  name: string;
  problemStatement: string;
  reach: number;
  impact: number;
  confidence: number; // 0 to 1
  effort: number;
  strategicNotes?: string;
}