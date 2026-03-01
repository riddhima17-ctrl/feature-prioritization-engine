
# RICE Feature Prioritization Engine

## Overview

This project simulates how a Product Manager evaluates and prioritizes roadmap initiatives using the RICE framework (Reach, Impact, Confidence, Effort).

It demonstrates structured decision-making, tradeoff evaluation, and strategic weighting in a SaaS analytics product context.

The application is deployed and interactive.

## Live Demo

https://feature-prioritization-engine.vercel.app

📄 Case Study: [View Product Management Write-Up](https://continuous-bubbler-aca.notion.site/Feature-Prioritization-Engine-313801d78a9380ce9b30c9ff57fd97c2?source=copy_link)

## Problem Context

Early-stage product teams often struggle with:

- Subjective prioritization
- Bias toward loud stakeholders
- Ignoring engineering effort
- Overvaluing high-visibility features

This tool provides a transparent scoring mechanism to support structured roadmap decisions.

## Framework Used

RICE Formula:

Score = (Reach × Impact × Confidence) ÷ Effort

Weights can be adjusted to simulate different strategic priorities.

Example:
- Increasing Impact weight favors bold product bets.
- Increasing Effort weight favors cost-sensitive execution.

## Strategic Intent

This project is designed as a PM case study to demonstrate:

- Structured prioritization thinking
- Tradeoff awareness
- AI/SaaS roadmap simulation
- Decision transparency

## Tech Stack

- TypeScript
- React (Next.js)
- Deployed on Vercel

## Future Evolution

- Persistent storage (localStorage / DB)
- Scenario presets (Growth Mode vs Cost Mode)
- Exportable prioritization report
- AI-assisted scoring recommendations