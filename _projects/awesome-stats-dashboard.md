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

- **Multiple Regression Models**: Linear (OLS), Logistic (Binary), and Poisson (Count Data)
- **Built-in Datasets**: Cars93 (MASS), Penguins (palmerpenguins), Boston (MASS)
- **Custom Data Upload**: Import your own CSV files for analysis
- **Diagnostic Suite**: Residual plots, VIF analysis, Cook's Distance, leverage plots
- **Model Selection**: Stepwise AIC, BIC, and Adjusted R² comparisons
- **Time Series Analysis**: ARIMA modeling with forecast generation
- **ANOVA**: Group comparison for categorical predictors

## Methodology

The dashboard applies rigorous regression diagnostics following best practices taught by **Dr. Chad Cook** at the University of Central Oklahoma. Key diagnostic checks include:

- **Variance Inflation Factor (VIF)** for multicollinearity detection
- **Cook's Distance** for influential observation identification
- **Box-Cox transformations** for response variable normalization
- **Stepwise selection** for parsimonious model building

The Shiny visualization framework was developed under the mentorship of **Dr. Tyler Laverty**, leveraging the `bslib` package for a modern, responsive UI.

## Technical Details

- **Language**: R
- **Framework**: Shiny, bslib
- **Packages**: MASS, car, forecast, palmerpenguins
- **Deployment**: shinyapps.io
- **Application**: Statistical analysis, regression diagnostics, data visualization


