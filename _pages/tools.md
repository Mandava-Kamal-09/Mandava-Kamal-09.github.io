---
layout: page
title: Tools
permalink: /tools/
description: Interactive statistical analysis tools and dashboards.
nav: true
nav_order: 3
---

## Awesome Statistics Dashboard

An interactive R Shiny application for comprehensive statistical analysis—from exploratory data visualization to advanced regression diagnostics and time series forecasting.

<div class="embed-responsive" style="position: relative; width: 100vw; max-width: calc(100vw - 40px); height: 900px; border: 1px solid var(--global-divider-color); border-radius: 8px; overflow: hidden; margin: 1.5rem 0; margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%);">
  <iframe 
    src="https://kamaluco.shinyapps.io/Awesome_Statistics_Dashboard/" 
    style="width: 100%; height: 100%; border: none;"
    title="Awesome Statistics Dashboard"
    loading="lazy"
    allow="fullscreen">
  </iframe>
</div>

---

## Quick Start Guide

### 1. Choose Your Data

The dashboard comes with **three built-in datasets** ready for exploration:

| Dataset | Source | Best For |
|---------|--------|----------|
| **Penguins** | palmerpenguins | Classification, species comparison |
| **Cars93** | MASS | Regression, continuous predictors |
| **Boston** | MASS | Housing price prediction |

Or upload your own **CSV file** for custom analysis.

### 2. Select Model Type

- **Linear (OLS)**: Standard regression for continuous response variables
- **Logistic (Binary)**: Classification for binary outcomes
- **Poisson (Count Data)**: Modeling count/rate data

### 3. Explore the Tabs

| Tab | Description |
|-----|-------------|
| **Data Summary** | Overview statistics and data structure |
| **Pairwise Plots** | Correlation matrix and scatterplot grid |
| **Model Results** | Coefficients, p-values, R² statistics |
| **Model Selection** | Stepwise AIC/BIC for variable selection |
| **Diagnostics** | Residual plots, VIF, Cook's Distance |
| **Group Comparison** | ANOVA for categorical predictors |
| **Time Series** | ARIMA modeling and forecasting |
| **Prediction** | Generate predictions from fitted models |

### 4. Pro Tips

- Use the **Box-Cox transformation** button to optimize your response variable's distribution
- Check **VIF values** in Diagnostics—values > 5 suggest multicollinearity
- **Cook's Distance** helps identify influential outliers that may skew your model

---

*Built with R Shiny, bslib, and deployed on shinyapps.io*


