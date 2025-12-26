---
layout: post
title: "Building the Awesome Statistics Dashboard"
date: 2025-12-25
description: "A Statistical tool for researchers and students Community with advanced Regression Analysis Techniques and Tools"
tags: data-science statistics R-shiny data-visualization Regression-Analysis
categories: sample-posts
---

I'm excited for sharing the **Awesome Statistics Dashboard**, an R Shiny app translation from my graduate  course work at UCO. It streamlines statistical analysis from visualization to forecasting all in one intuitive interface.

**[Try the Dashboard](/tools/)** | **[View Project Details](/projects/awesome-stats-dashboard/)**


Two UCO professors shaped how I approach statistical analysis.

### Regression Analysis: Dr. Tyler Cook

Dr. Cook's Applied Regression Analysis course emphasized that fitting a model is just the beginning. The real work starts with **diagnostics**:

- **VIF**: Values > 10 signal multicollinearity: its kind of like your predictors are telling the same story
- **Cook's Distance**: Compact and useful for interpreting many aspects like: outlier, High leverage and High influence observations 
- **Residual Analysis**: Validating Model Assumptions: Linearity, Independence, Homoscedasticity, Normality

These principles power the dashboard's diagnostic suite. Every regression model needs proper interrogation before trusting its coefficients.

### Data Visualization Motivation: Dr. Sean Laverty

Dr. Laverty's course work, Data Visualization and Exploration helped me learn and understand best visualization practices. His engaging teaching style and emphasis on interactive tools inspired and impacted the dashboard's intuitive interface tabs and visualization practices. 


## Features (Current State)

The tool supports three regression types:

| Model Type | Use Case |
|------------|----------|
| **Linear (OLS)** | Continuous response variables |
| **Logistic** | Binary classification |
| **Poisson** | Count/rate data |

Tabs and short summary of tabs functionalities:
**Data Summary**: Provides five-number summary statistics (minimum, quartiles, median, maximum), mean values, and dataset preview for initial exploratory data analysis.
**Pairwise Plots**: Interactive correlation matrix displaying scatterplots with LOWESS smoothers, variable histograms, and Pearson correlation coefficients to assess multivariate relationships.
**Model Results**: Comprehensive regression modeling supporting Linear (OLS), Logistic (binary outcomes), and Poisson (count data) regression. Includes automated statistical interpretation, stepwise AIC variable selection, and Box-Cox power transformation for variance stabilization.
**Model Selection**: Best subsets regression analysis using Bayesian Information Criterion (BIC) or Adjusted R-squared to systematically evaluate and compare all possible predictor combinations.
**Diagnostics**: Complete suite of assumption validation tools including residual analysis plots, Variance Inflation Factors (VIF) for multicollinearity detection, Durbin-Watson autocorrelation test, Cook's Distance for influence analysis, and standardized residual outlier identification.
**Group Comparison (ANOVA)**: One-way Analysis of Variance with Tukey Honestly Significant Difference post-hoc tests for multiple pairwise comparisons with family-wise error control.
**Time Series Analysis**: Automatic ARIMA model selection and parameter estimation with user-defined forecast horizons and confidence interval visualization.
**Prediction**: Generates point predictions with 95% prediction intervals for new observations. Includes automatic inverse Box-Cox transformation to return predictions to original measurement scale.


In addition to the above mentioned tabs i was able to hard code two unique and very useful functionalities they are:
**Box-Cox Transformation**: A power transformation that identifies the optimal lambda (λ) to normalize the response variable and stabilize variance. Automatically handles non-positive values and provides inverse transformation for predictions on the original scale.
**Custom Formula Syntax**: Enables advanced model specification including interaction effects (x1:x2) and polynomial terms (I(x^2)) using standard R formula notation for testing non-linear relationships.


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
I am currently working on the following topics and stratergies to implement into My Awsome Statistics Dashboard and make it more robust and highly efficient tool for Students and Research Community
- Model Comparison Tools
- Cross-Validation Framework
- ROC Curves & Classification Metrics
- Regularization Methods
- Advanced Visualization Techniques for better interaction

I am always happy to accept and hear any improvements or suggestions or feedback about **THE AWESOME STATISTICS DASHBOARD**

---

*Special thanks to Dr. Tyler Cook (UCO) and Dr. Sean Laverty (UCO)*


