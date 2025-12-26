---
layout: post
title: "Building the Awesome Statistics Dashboard: An Academic Journey"
date: 2025-12-25
description: "How two UCO mentors shaped this interactive statistical analysis tool—one taught me regression rigor, the other showed me how to make it visual."
tags: data-science statistics R-shiny
categories: sample-posts
---

Today I'm sharing the **Awesome Statistics Dashboard**, an R Shiny app born from my graduate work at UCO. It streamlines statistical analysis from visualization to forecasting—all in one intuitive interface.

**[Try the Dashboard](/tools/)** | **[View Project Details](/projects/awesome-stats-dashboard/)**

## Origin

Two UCO professors shaped how I approach statistical analysis.

### Regression Rigor: Dr. Tyler Cook

Dr. Cook's regression course emphasized that fitting a model is just the beginning. The real work starts with **diagnostics**:

- **VIF**: Values > 5 signal multicollinearity—your predictors are telling the same story
- **Cook's Distance**: That one outlier might be driving your entire model
- **Residual Analysis**: Patterns in residuals reveal what your model is missing

These principles power the dashboard's diagnostic suite. Every regression model needs proper interrogation before trusting its coefficients.

### Visualization Motivation: Dr. Sean Laverty

If Dr. Cook taught me *what* to check, Dr. Laverty showed me *how* to make it accessible. His engaging teaching style and emphasis on interactive tools inspired the dashboard's intuitive interface—tabs that update in real-time, visualizations that respond to your choices.

Statistics shouldn't hide behind code. It should be explorable.

## Features

The tool supports three regression families:

| Model Type | Use Case |
|------------|----------|
| **Linear (OLS)** | Continuous response variables |
| **Logistic** | Binary classification |
| **Poisson** | Count/rate data |

Each includes:
- Coefficient tables with confidence intervals
- Stepwise model selection (AIC/BIC)
- Diagnostic panels (VIF, Cook's, residuals)
- Prediction interfaces

### Built-in Datasets

- **Penguins** (palmerpenguins) — classification demos
- **Cars93** (MASS) — continuous predictors
- **Boston** (MASS) — regression benchmarks

Or upload your own CSV.

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | R Shiny |
| UI Layer | bslib |
| Diagnostics | car, MASS |
| Time Series | forecast |
| Deployment | shinyapps.io |

## What's Next

- Mixed-effects model support
- Bootstrap confidence intervals
- Export functionality for reports

---

*Thanks to Dr. Tyler Cook (UCO) for instilling regression rigor and diagnostic thinking, and Dr. Sean Laverty (UCO) for the visualization motivation that made this tool intuitive.*


