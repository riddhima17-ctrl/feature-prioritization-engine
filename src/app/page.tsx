"use client";

import { useState } from "react";
import { calculateRiceScore } from "@/lib/rice";
import { RiceWeights, defaultWeights } from "@/lib/rice";
import { demoBacklog } from "@/data/demoBacklog";
import FeatureForm from "@/components/FeatureForm";
import { FeatureInput } from "@/lib/types";


export default function Home() {
  const [features, setFeatures] =
    useState<FeatureInput[]>(demoBacklog);
    const [weights, setWeights] =
  useState<RiceWeights>(defaultWeights);

  function handleAddFeature(feature: FeatureInput) {
    setFeatures([...features, feature]);
  }

  const scored = features.map((f) => {
  const score = calculateRiceScore(f, weights);

  return {
    ...f,
    score,
    explanation: `
    (${f.reach} × ${f.impact} × ${f.confidence}) ÷ ${f.effort}
    `
  };
});

  const sorted = scored.sort(
    (a, b) => b.score - a.score
  );
  const topFeature = sorted[0];
  const primaryColor = "#7c3aed";
  const cardShadow = "0 8px 30px rgba(124, 58, 237, 0.08)";
  
  const cardStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  marginBottom: "40px",
  boxShadow: cardShadow
};

  return (
   <main
    style={{
    padding: "40px",
    maxWidth: "1100px",
    margin: "0 auto",
    lineHeight: "1.6",
    backgroundColor: "#f5f3ff",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    color: "#1e293b",
  }}
>
      <h1 style={{ color: primaryColor, marginBottom: "30px" }}>
  Feature Prioritization Engine
</h1>
<div
  style={{
    display: "inline-block",
    backgroundColor: "#ede9fe",
    color: "#6d28d9",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    marginBottom: "30px"
  }}
>
  Demo Mode - Example Backlog Loaded 
</div>

      {topFeature && (
  <div style={cardStyle}>
    <h2 style={{ marginTop: 0 }}>Top Ranked Feature</h2>

    <strong
      style={{
        fontSize: "20px",
        color: primaryColor
      }}
    >
      {topFeature.name}
    </strong>

    <p
  style={{
    margin: "8px 0",
    fontSize: "22px",
    fontWeight: 600,
    color: "#7c3aed"
  }}
>
  {topFeature.score.toFixed(2)}
</p>

    <p style={{ opacity: 0.6 }}>
      Formula: {topFeature.explanation}
    </p>
  </div>
)}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    marginBottom: "30px"
  }}
>

  <div style={cardStyle}>
    <h2 style={{ marginTop: 0, color: "#334155" }}>
      Adjust Weights
    </h2>

    <div style={{ display: "grid", gap: "12px" }}>

      <label>
        Reach Weight:
        <input
          type="number"
          step="0.1"
          min="0.5"
          max="3"
          value={weights.reach}
          onChange={(e) =>
          setWeights((prev) => ({
          ...prev,
          reach: Number(e.target.value)
        }))
        }
          style={{
  marginLeft: "10px",
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  backgroundColor: "#ffffff",
  color: "#1e293b",
  fontWeight: 500
}}
        />
      </label>

      <label>
        <label>
  Impact Weight:
  <input
    type="number"
    min="0.5"
    max="3"
    step="0.1"
    value={weights.impact}
    onChange={(e) =>
      setWeights((prev) => ({
        ...prev,
        impact: Number(e.target.value)
      }))
    }
    style={{
      marginLeft: "10px",
      padding: "6px 10px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      backgroundColor: "#ffffff",
      color: "#1e293b",
      fontWeight: 500
    }}
  />
</label>
      </label>

      <label>
  Confidence Weight:
  <input
    type="number"
    min="0.5"
    max="3"
    step="0.1"
    value={weights.confidence}
    onChange={(e) =>
      setWeights((prev) => ({
        ...prev,
        confidence: Number(e.target.value)
      }))
    }
    style={{
      marginLeft: "10px",
      padding: "6px 10px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      backgroundColor: "#ffffff",
      color: "#1e293b",
      fontWeight: 500
    }}
  />
</label>

      <label>
  Effort Weight:
  <input
    type="number"
    min="0.5"
    max="3"
    step="0.1"
    value={weights.effort}
    onChange={(e) =>
      setWeights((prev) => ({
        ...prev,
        effort: Number(e.target.value)
      }))
    }
    style={{
      marginLeft: "10px",
      padding: "6px 10px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      backgroundColor: "#ffffff",
      color: "#1e293b",
      fontWeight: 500
    }}
  />
</label>
    </div>
  </div>

  <div style={cardStyle}>
    <h2 style={{ marginTop: 0, color: "#334155" }}>
      Add Feature
    </h2>

    <FeatureForm onAddFeature={handleAddFeature} />
  </div>

</div>     
      <div style={cardStyle}>
  <h2 style={{ marginTop: 0 }}>Ranked Features</h2>
  <p style={{ opacity: 0.6, marginBottom: "20px" }}>
  Example SaaS analytics roadmap prioritized using RICE framework.
</p>
  <div style={{ display: "grid", gap: "16px" }}>
    {sorted.map((feature) => (
      <div
        key={feature.id}
        style={{
          padding: "16px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb"
        }}
      >
        <strong style={{ color: primaryColor }}>
          {feature.name}
        </strong>

        <p
  style={{
    margin: "6px 0",
    fontWeight: 600,
    color: "#1e293b"
  }}
>
  {feature.score.toFixed(2)}
</p>

        <p style={{ fontSize: "14px", opacity: 0.6 }}>
          {feature.explanation}
        </p>
      </div>
    ))}
  </div>
</div>
            <hr />

      <h2>Model Notes</h2>
      <ul>
        <li>Scores depend entirely on input accuracy.</li>
        <li>Inflated reach or underestimated effort will distort ranking.</li>
        <li>Confidence should reflect evidence, not optimism.</li>
        <li>This tool supports decisions — it does not replace judgment.</li>
      </ul>
      <div style={{ marginTop: "40px" }}>
  <h2 style={{ marginBottom: "15px" }}>Prioritization Strategy</h2>

  <div style={cardStyle}>
    <p style={{ marginBottom: "12px" }}>
      This demo simulates a SaaS analytics product evaluating roadmap initiatives using the RICE framework.
    </p>

    <ul style={{ lineHeight: "1.8" }}>
      <li>
        High Reach initiatives maximize exposure across the user base.
      </li>
      <li>
        Impact reflects expected business or user value (1–3 scale).
      </li>
      <li>
        Confidence moderates optimism with evidence-based scoring.
      </li>
      <li>
        Effort ensures engineering cost is factored into prioritization.
      </li>
    </ul>

    <p style={{ marginTop: "15px", opacity: 0.7 }}>
      Weight adjustments simulate strategic shifts — for example, increasing Effort weight emphasizes cost sensitivity, while increasing Impact weight prioritizes transformative bets.
    </p>
  </div>
</div>
    </main>
  );
}
