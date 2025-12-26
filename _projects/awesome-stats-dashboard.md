---
layout: page
title: Awesome Statistics Dashboard
description: Interactive R Shiny dashboard for regression diagnostics, model selection, and statistical visualization
img: 
importance: 3
category: work
related_publications: false
---

The **Awesome Statistics Dashboard** is an interactive web application built with R Shiny that provides comprehensive statistical analysis tools, from exploratory data analysis to advanced regression diagnostics and time series forecasting.

🔗 **[Launch the Live Dashboard](https://kamaluco.shinyapps.io/Awesome_Statistics_Dashboard/)**

## Features

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

## Methodology

The dashboard applies rigorous regression techniques following best practices taught by **Dr. Tyler Cook** at the University of Central Oklahoma. Key diagnostic checks include:

- **Variance Inflation Factor (VIF)**
- **Cook's Distance**
- **Box-Cox transformations**
- **Stepwise selection**

The Shiny visualization framework and visualization practices was developed by following best practices taught by **Dr. Sean Laverty**.

## Technical Details

- **Language**: R
- **Framework**: Shiny, bslib
- **Packages**: MASS, car, forecast, palmerpenguins
- **Deployment**: shinyapps.io
- **Application**: Statistical analysis, regression diagnostics, data visualization


