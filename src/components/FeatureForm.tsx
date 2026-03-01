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
    marginBottom: "20px",
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
    marginBottom: "20px",
    width: "100%"
  }}
/>
      <br />
        <div style={{ marginBottom: "10px" }}>
  <label style={{ fontSize: "14px", fontWeight: 500 }}>
    Reach (Number of users affected)
  </label>
  <input
    name="reach"
    type="number"
    value={formData.reach}
    onChange={handleChange}
    style={{
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      marginTop: "2px",
      width: "100%"
    }}
  />
</div>
      <br />

      <div style={{ marginBottom: "10px" }}>
  <label style={{ fontSize: "14px", fontWeight: 500 }}>
    Impact (1–3 scale)
  </label>
  <input
    name="impact"
    type="number"
    step="0.1"
    min="1"
    max="3"
    value={formData.impact}
    onChange={handleChange}
    style={{
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      marginTop: "2px",
      width: "100%"
    }}
  />
</div>
      <br />

      <div style={{ marginBottom: "10px" }}>
  <label style={{ fontSize: "14px", fontWeight: 500 }}>
    Confidence (0–1)
  </label>
  <input
    name="confidence"
    type="number"
    step="0.1"
    min="0"
    max="1"
    value={formData.confidence}
    onChange={handleChange}
    style={{
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      marginTop: "4px",
      width: "100%"
    }}
  />
</div>
      <br />

      <div style={{ marginBottom: "10px" }}>
  <label style={{ fontSize: "14px", fontWeight: 500 }}>
    Effort (Engineering cost estimate)
  </label>
  <input
    name="effort"
    type="number"
    min="1"
    value={formData.effort}
    onChange={handleChange}
    style={{
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      marginTop: "4px",
      width: "100%"
    }}
  />
</div>
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