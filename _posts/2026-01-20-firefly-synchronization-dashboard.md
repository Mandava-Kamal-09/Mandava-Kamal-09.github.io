---
layout: post
title: "Firefly Synchronization Dashboard"
date: 2026-01-20
description: "An interactive tool for exploring mathematical models of firefly synchronization, inspired by the research of Dr. Orit Peleg and a talk by Dr. Daniel Abrams at Dynamics Days US 2026."
tags: nonlinear-dynamics R-shiny synchronization coupled-oscillators biological-modeling
categories: sample-posts
---

What happens when thousands of fireflies flash in perfect unison? This question led me down a rabbit hole of coupled oscillators, phase transitions, and collective behavior in nature.

**[Try the Dashboard](/tools/)** | **[Live Demo](https://kamaluco.shinyapps.io/Fireflies/)**

## The Inspiration

My interest started with Dr. Orit Peleg's research on firefly swarms. Her fieldwork documenting how real fireflies synchronize in the wild fascinated me. Species like *Photinus carolinus* in the Great Smoky Mountains create waves of light that ripple through forests. The question of how individual insects, each with their own internal clock, coordinate into collective displays is both biologically rich and mathematically deep.

Then came Dr. Daniel Abrams' talk at Dynamics Days US 2026 at the University of Arizona. He introduced chimera states—this counterintuitive phenomenon where synchronized and desynchronized populations coexist in the same system. The mathematical elegance of coupled oscillator theory suddenly clicked with the biological reality I'd been reading about.

The combination of rigorous math and real biology made me want to explore both sides. Building this dashboard was my way of learning by doing.

## Bridging Theory and Observation

The gap between theoretical models and biological observation is where things get interesting. Kuramoto's mean-field model captures the essence of synchronization beautifully, but real fireflies don't interact with every other firefly equally. They respond to neighbors. They have different flash patterns across species. Some use continuous phase adjustment, others use pulse-coupled mechanisms.

The dashboard lets you play with these distinctions:

| Model | Biological Basis |
|-------|------------------|
| **Kuramoto** | Mean-field coupling, classic phase oscillator theory |
| **Spatial** | Distance-dependent coupling, local neighborhoods |
| **Integrate-and-Fire** | Pulse-coupled dynamics, threshold-based flashing |
| **Hybrid** | Multi-species interactions with different mechanisms |

Each model corresponds to different assumptions about how fireflies actually communicate. *P. frontalis* behavior maps better to Kuramoto-type dynamics. *P. carolinus* synchronous bursts fit the integrate-and-fire framework. The hybrid model asks what happens when species with different signaling strategies share the same space.

## What You Can Explore

The interactivity is the point. You can:

- Watch synchronization emerge in real-time as you increase coupling strength
- Find chimera states where part of the population locks in phase while the rest drifts
- Push systems through phase transitions and observe critical slowing down
- Compare how different models produce different collective behaviors
- Generate bifurcation diagrams showing where synchronization kicks in

The critical thresholds aren't arbitrary—K_c around 0.20 for Kuramoto, beta_c around 0.13 for integrate-and-fire. These numbers come from the mathematics of coupled oscillator theory, but they have biological meaning. They represent how strongly fireflies need to influence each other before collective behavior emerges.

## Connection to Broader Themes

Firefly synchronization sits at the intersection of nonlinear dynamics and emergent biological behavior. The questions Dr. Peleg asks about collective behavior in nature—how local rules produce global patterns, how information propagates through populations, how systems find synchronized states—connect to themes that run through my own research interests.

Understanding how coupled oscillators synchronize isn't just about fireflies. The same mathematics appears in neural networks, cardiac pacemaker cells, circadian rhythms, and engineered systems. Building intuition through an interactive tool helps bridge the gap between equations on paper and dynamical systems in action.

## Technical Details

| Component | Technology |
|-----------|------------|
| Framework | R Shiny |
| Visualization | ggplot2, Plotly |
| Numerical Integration | Custom ODE solvers |
| Deployment | shinyapps.io |

---

*Inspired by the research of Dr. Orit Peleg (CU Boulder) and a talk by Dr. Daniel Abrams (Northwestern) at Dynamics Days US 2026.*
