import { FeatureInput } from "./types";

export function validateFeature(feature: FeatureInput): string[] {
  const errors: string[] = [];

  if (!feature.name.trim()) {
    errors.push("Name is required.");
  }

  if (!feature.problemStatement.trim()) {
    errors.push("Problem statement is required.");
  }

  if (feature.reach < 0) {
    errors.push("Reach must be ≥ 0.");
  }

  if (feature.impact <= 0) {
    errors.push("Impact must be > 0.");
  }

  if (feature.confidence <= 0 || feature.confidence > 1) {
    errors.push("Confidence must be between 0 and 1.");
  }

  if (feature.effort <= 0) {
    errors.push("Effort must be greater than 0.");
  }

  return errors;
}