---
layout: page
title: Context Bridge
description: Chrome extension for secure AI conversation portability with local AES-256-GCM encryption
img: assets/img/context-bridge-icon.png
importance: 1
category: tools
related_publications: false
---

A Chrome extension that captures conversation text from AI chat websites and injects it into other platforms. All data is encrypted locally using AES-256-GCM - nothing is transmitted to external servers.

**[Install from Chrome Web Store](https://chromewebstore.google.com/detail/context-bridge/aomkcodnddognjdihieojjijaficemde)** | **[Privacy Policy](/context-bridge/privacy-policy.html)**

## Key Features

- **Cross-platform capture** - Extracts conversation text from 6 AI platforms via DOM parsing
- **Local encryption** - All stored data encrypted with AES-256-GCM (100k PBKDF2 iterations)
- **Smart pruning** - KadaneDial algorithm trims long conversations to fit context limits
- **PII protection** - Detects and masks emails, phones, SSNs, and credit card numbers
- **Data portability** - Export/Import encrypted backups

## Technical Details

| Component | Technology |
|-----------|------------|
| **Language** | TypeScript |
| **Platform** | Chrome Extension (Manifest V3) |
| **Encryption** | AES-256-GCM, PBKDF2 (100k iterations) |
| **Crypto API** | Web Crypto API |
| **Build Tool** | esbuild |

## How It Works

1. **Capture** - Parses DOM structure of supported AI chat interfaces
2. **Encrypt** - Secures conversation data locally using Web Crypto API
3. **Transfer** - Injects context into target platform's input field
4. **Prune** - Intelligently trims content to respect token limits
