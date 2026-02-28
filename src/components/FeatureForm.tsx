"use client";

import { useState } from "react";
import { FeatureInput } from "@/lib/types";
import { validateFeature } from "@/lib/validation";
interface Props {
  onAddFeature: (feature: FeatureInput) => void;
}

export default function FeatureForm({ onAddFeature }: Props) {
  const [formData, setFormData] = useState<FeatureInput>({
    id: "",
    name: "",
    problemStatement: "",
    reach: 0,
    impact: 1,
    confidence: 0.5,
    effort: 1
  });
  const [errors, setErrors] = useState<string[]>([]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "name" ||
        name === "problemStatement"
          ? value
          : Number(value)
    });
  }

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const newFeature = {
    ...formData,
    id: Date.now().toString()
  };

  const validationErrors = validateFeature(newFeature);

  if (validationErrors.length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors([]);
  onAddFeature(newFeature);

  setFormData({
    id: "",
    name: "",
    problemStatement: "",
    reach: 0,
    impact: 1,
    confidence: 0.5,
    effort: 1
  });
}

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
  <ul style={{ color: "red" }}>
    {errors.map((err, index) => (
      <li key={index}>{err}</li>
    ))}
  </ul>
)}

      <input
  name="name"
  placeholder="Feature name"
  value={formData.name}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <input
  name="problemStatement"
  placeholder="Problem Statement"
  value={formData.problemStatement}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <input
        name="reach"
        type="number"
        placeholder="Reach"
        value={formData.reach}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <input
        name="impact"
        type="number"
        step="0.1"
        placeholder="Impact"
        value={formData.impact}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <input
        name="confidence"
        type="number"
        step="0.1"
        placeholder="Confidence (0-1)"
        value={formData.confidence}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <input
        name="effort"
        type="number"
        placeholder="Effort"
        value={formData.effort}
  onChange={handleChange}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "10px",
    width: "100%"
  }}
/>
      <br />

      <button
  type="submit"
  style={{
    backgroundColor: "#7c3aed",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%"
  }}
>
  Add Feature
</button>
    </form>
  );
}