---
layout: post
title: "Building the Awesome Statistics Dashboard: An Academic Journey"
date: 2025-12-25
description: "How two mentors shaped this interactive statistical analysis tool—one taught me regression rigor, the other showed me how to make it visual."
tags: data-science statistics R-shiny
categories: sample-posts
---

Today I'm releasing the **Awesome Statistics Dashboard**, an interactive R Shiny application that brings together everything I've learned about statistical analysis and data visualization during my graduate studies at the University of Central Oklahoma.

🔗 **[Try the Dashboard](/tools/)** | **[View Project Details](/projects/awesome-stats-dashboard/)**

## The Origin Story

This dashboard didn't emerge from a single course or project—it crystallized from two distinct influences that shaped how I think about statistical analysis.

### The Regression Rigor: Dr. Chad Cook

In Dr. Cook's regression course, I learned that fitting a model is just the beginning. The real work starts with **diagnostics**:

- **Variance Inflation Factor (VIF)**: Don't just look at p-values—check if your predictors are telling the same story. VIF > 5? You've got multicollinearity problems.
- **Cook's Distance**: That one outlier might be driving your entire model. Find it. Understand it. Decide whether to keep it.
- **Residual Analysis**: Patterns in residuals aren't just "noise"—they're your model telling you something's wrong.

These principles became the diagnostic suite in my dashboard. Every regression model needs a proper interrogation before you trust its coefficients.

### The Visualization Spark: Dr. Tyler Laverty

If Dr. Cook taught me *what* to check, Dr. Laverty showed me *how* to make it accessible. His Shiny course introduced me to `bslib` for modern, responsive interfaces and the philosophy that **good tools should be intuitive**.

The dashboard's tabbed interface, real-time updates, and embedded visualizations all stem from this mentorship. Statistics shouldn't hide behind code—it should be explorable.

## What the Dashboard Does

The tool supports three regression families:

1. **Linear (OLS)** for continuous responses
2. **Logistic** for binary classification
3. **Poisson** for count data

Each comes with:
- Automatic coefficient tables with confidence intervals
- Stepwise model selection (AIC/BIC)
- Full diagnostic panels
- Prediction interfaces

### Built-in Datasets

To lower the barrier to entry, I included three classic datasets:
- **Penguins** (palmerpenguins) — great for classification demos
- **Cars93** (MASS) — rich continuous predictors
- **Boston** (MASS) — the canonical regression benchmark

Or upload your own CSV and explore.

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | R Shiny |
| UI Layer | bslib |
| Diagnostics | car, MASS |
| Time Series | forecast |
| Deployment | shinyapps.io |

## Looking Forward

This dashboard will continue to evolve. Planned additions include:
- Mixed-effects model support
- Bootstrap confidence intervals
- Export functionality for reports

If you're a student learning regression, I hope this tool helps you see beyond the summary output. And if you're an instructor, feel free to point students here for interactive exploration.

---

*Special thanks to Dr. Chad Cook for instilling diagnostic rigor and Dr. Tyler Laverty for teaching me that good tools should feel effortless to use.*


