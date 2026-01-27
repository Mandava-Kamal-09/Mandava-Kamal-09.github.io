---
layout: page
title: Tools
permalink: /tools/
description: Interactive tools and dashboards for statistical analysis and dynamical systems.
nav: true
nav_order: 3
---

## Awesome Statistics Dashboard

A comprehensive R Shiny Dashboard for statistical modeling and diagnostics. Features include GLM regression (Linear/Logistic/Poisson), automated variable selection, Box-Cox transformation, diagnostic testing, and time series forecasting. Designed to make rigorous statistical analysis efficient and reproducible. 

Scroll to the bottom to access the tool and quick start guide


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
**Please make sure that all observations and variables are arranged in an ordered manner in the uploading csv file**


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
- Check **VIF values** in Diagnostics—values > 10 suggest multicollinearity
- **Cook's Distance** helps identify influential outliers that may skew your model

---

## Firefly Synchronization Dashboard

An interactive R Shiny application for exploring mathematical models of firefly synchronization. Features four biologically-inspired models (Kuramoto oscillators, spatial coupling, integrate-and-fire, and hybrid multi-species), real-time phase space visualization, chimera state detection, critical slowing down analysis, and bifurcation diagrams. Built to investigate collective behavior and phase transitions in coupled oscillator systems.

**Tech:** R, Shiny, ggplot2, Plotly

<a href="https://kamaluco.shinyapps.io/Fireflies/" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<div class="embed-responsive" style="position: relative; width: 100vw; max-width: calc(100vw - 40px); height: 900px; border: 1px solid var(--global-divider-color); border-radius: 8px; overflow: hidden; margin: 1.5rem 0; margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%);">
  <iframe
    src="https://kamaluco.shinyapps.io/Fireflies/"
    style="width: 100%; height: 100%; border: none;"
    title="Firefly Synchronization Dashboard"
    loading="lazy"
    allow="fullscreen">
  </iframe>
</div>

---

### Quick Start Guide

1. **Select a Model** from the dropdown menu
2. **Adjust Parameters** using the sliders (coupling strength K, population size N, frequency spread σ)
3. **Click "Run Simulation"** to execute
4. **Explore Results** across three tabs:
   - **Phase Space** – See firefly phases on a circular plot or 2D scatter
   - **Order Parameter** – Track synchronization level over time
   - **Raster Plot** – View individual flash events (I&F and Hybrid models)
5. **Compute Bifurcation** to see how synchronization changes across coupling strengths
6. **Export Data** as CSV for further analysis

---

### Model Descriptions

#### 1. P. frontalis (Kuramoto)
Classic coupled oscillator model where each firefly adjusts its phase based on the average of all others. At low coupling, fireflies flash independently. Above the critical threshold (K_c ≈ 0.20), they spontaneously synchronize. Can exhibit chimera states—groups of synchronized and desynchronized fireflies coexisting.

#### 2. P. frontalis (Spatial)
Extension of Kuramoto where coupling strength decays with distance. Nearby fireflies influence each other more than distant ones. Creates spatially-organized clusters and wave patterns. Controlled by coupling range parameter (r).

#### 3. P. carolinus (Integrate-and-Fire)
Pulse-coupled model where fireflies accumulate charge and flash when reaching a threshold, then reset. When one flashes, it nudges others closer to firing. Produces characteristic synchronous bursts separated by quiet periods. Critical coupling β_c ≈ 0.13.

#### 4. Mixed Species (Hybrid)
Combines Kuramoto and integrate-and-fire populations with cross-species coupling. Simulates mixed swarms where two species with different signaling mechanisms interact. Explore how species ratio and inter-species coupling affect collective synchronization.

---

