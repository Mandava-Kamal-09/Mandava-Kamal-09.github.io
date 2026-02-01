---
layout: page
title: FibriNet
description: Mechanochemical simulation framework for fibrin clot degradation coupling WLC mechanics with Gillespie kinetics
img: assets/img/fibrinet-network.png
poster: assets/pdf/dynamics-days-2026-poster.pdf
importance: 1
category: research
github: https://github.com/Mandava-Kamal-09/Fibrinet
---

FibriNet is a mechanochemical simulation framework for fibrin clot degradation that couples nonlinear fiber mechanics (worm-like chain model) with stochastic cleavage events (Gillespie algorithm).

This work is supported by the **NIH grant 2R15HL148842-02** under the supervision of Dr. Brittany Bannish at the University of Central Oklahoma.

## Research Artifacts

- **Poster** (Dynamics Days US 2026): [PDF]({{ page.poster | relative_url }})
- **Key result**: Mean clearance time vs applied strain (70 sims: 7 strains × 10 realizations)
- **Finding**: Connectivity loss occurs at ~20–50% lysis (percolation failure)
- **Visualization**: Strain heatmap before/after applied loading

## Methodology

The model represents fibrin networks as interconnected nodes connected by nonlinear springs following worm-like chain (WLC) mechanics. Enzyme cleavage is modeled as a stochastic process using the Gillespie algorithm, coupling mechanical stress with biochemical degradation.

## Technical Details

- **Language**: Python
- **Mechanics**: Worm-like chain (WLC) model
- **Kinetics**: Gillespie algorithm for stochastic cleavage
- **Application**: Computational biology, biophysics, biomechanics
