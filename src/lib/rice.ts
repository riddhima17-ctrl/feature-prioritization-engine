import { FeatureInput } from "./types";

export interface RiceWeights {
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
}

export const defaultWeights: RiceWeights = {
  reach: 1,
  impact: 1,
  confidence: 1,
  effort: 1
};

export function calculateRiceScore(
  feature: FeatureInput,
  weights: RiceWeights = defaultWeights
): number {

  if (feature.effort <= 0) {
    throw new Error("Effort must be greater than 0.");
  }

  const weightedReach = feature.reach * weights.reach;
  const weightedImpact = feature.impact * weights.impact;
  const weightedConfidence = feature.confidence * weights.confidence;
  const weightedEffort = feature.effort * weights.effort;

  return (
    (weightedReach *
      weightedImpact *
      weightedConfidence) /
    weightedEffort
  );
}