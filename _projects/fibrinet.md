---
layout: page
title: FibriNet
description: Mechanochemical simulation framework for fibrin clot degradation coupling WLC mechanics with Gillespie kinetics
importance: 1
category: research
github: https://github.com/Mandava-Kamal-09/Fibrinet
---

FibriNet is a mechanochemical simulation framework for fibrin clot degradation that couples nonlinear fiber mechanics (worm-like chain model) with stochastic cleavage events (Gillespie algorithm).

This work is supported by the **NIH grant 2R15HL148842-02** under the supervision of Dr. Brittany Bannish at the University of Central Oklahoma.

## Key Results

- **Non-monotonic clearance**: Mean clearance time vs applied strain (70 sims: 7 strains × 10 realizations)
- **Percolation failure**: Connectivity loss occurs at ~20–50% lysis
- **Optimal strain**: Fastest network failure near ε ≈ 0.05

## Methodology

The model represents fibrin networks as interconnected nodes connected by nonlinear springs following worm-like chain (WLC) mechanics. Enzyme cleavage is modeled as a stochastic process using the Gillespie algorithm, coupling mechanical stress with biochemical degradation.

## Technical Details

- **Language**: Python
- **Mechanics**: Worm-like chain (WLC) model
- **Kinetics**: Gillespie algorithm for stochastic cleavage
- **Application**: Computational biology, biophysics, biomechanics
