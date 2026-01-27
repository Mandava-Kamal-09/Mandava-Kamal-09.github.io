---
layout: page
title: Firefly Synchronization Dashboard
permalink: /tools/firefly/
description: An interactive R Shiny application for exploring mathematical models of firefly synchronization.
nav: false
---

An interactive R Shiny application for exploring mathematical models of firefly synchronization. Features four biologically-inspired models (Kuramoto oscillators, spatial coupling, integrate-and-fire, and hybrid multi-species), real-time phase space visualization, chimera state detection, critical slowing down analysis, and bifurcation diagrams. Built to investigate collective behavior and phase transitions in coupled oscillator systems.

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

## Quick Start Guide

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

## Model Descriptions

### 1. P. frontalis (Kuramoto)
Classic coupled oscillator model where each firefly adjusts its phase based on the average of all others. At low coupling, fireflies flash independently. Above the critical threshold (K_c ≈ 0.20), they spontaneously synchronize. Can exhibit chimera states—groups of synchronized and desynchronized fireflies coexisting.

### 2. P. frontalis (Spatial)
Extension of Kuramoto where coupling strength decays with distance. Nearby fireflies influence each other more than distant ones. Creates spatially-organized clusters and wave patterns. Controlled by coupling range parameter (r).

### 3. P. carolinus (Integrate-and-Fire)
Pulse-coupled model where fireflies accumulate charge and flash when reaching a threshold, then reset. When one flashes, it nudges others closer to firing. Produces characteristic synchronous bursts separated by quiet periods. Critical coupling β_c ≈ 0.13.

### 4. Mixed Species (Hybrid)
Combines Kuramoto and integrate-and-fire populations with cross-species coupling. Simulates mixed swarms where two species with different signaling mechanisms interact. Explore how species ratio and inter-species coupling affect collective synchronization.

---

**Tech:** R, Shiny, ggplot2, Plotly

*Inspired by the research of Dr. Orit Peleg (CU Boulder) and Dr. Daniel Abrams (Northwestern).*
