---
layout: post
title: "Building Context Bridge"
date: 2026-01-31
description: "How a simple frustration became my first published Chrome extension"
tags: chrome-extension typescript privacy
categories: projects
featured: false
---

## How a Simple Frustration Became My First Published Chrome Extension

---

## The Spark

It started a few days ago. I was deep into a research problem, bouncing between different AI assistants trying to get the best answer. You know how it goes — you build up this rich conversation with one AI, get some great insights, and then think "I wonder what Claude would say about this" or "Let me check how GPT approaches this."

But then you switch platforms and... you're starting from scratch. All that context, gone.

I found myself copying and pasting conversations into text files, trying to maintain some continuity. It was messy. There had to be a better way.

---

## The Idea

What if I could just capture a conversation and inject it into another platform? Simple, right?

That night, I started sketching out what would become Context Bridge — a browser extension that does exactly that. Save your AI conversation, switch platforms, inject the context, and continue where you left off.

---

## The Hurdles

Building it was... humbling.

**The first wall:** Chrome extensions have changed a lot. Manifest V3 is a different beast from V2. Half the tutorials online were outdated. I spent hours debugging why my background script wasn't working, only to realize service workers behave completely differently now.

**The DOM nightmare:** Every AI platform structures their chat differently. What works on one site breaks on another. I wrote and rewrote the content extraction logic more times than I'd like to admit. Some platforms load content dynamically, some use shadow DOM, some change their structure without warning.

**The "it works on my machine" moments:** Testing was painful. The extension would work perfectly, then I'd reload the page and everything would break. Race conditions, timing issues, content scripts not injecting properly — the usual suspects.

**The rejection:** My first Chrome Web Store submission got rejected. "Keyword spam" — apparently listing the platforms the extension works with was considered excessive. Back to the drawing board for the description.

---

## Small Wins

But there were wins too.

The first time the capture button actually grabbed a full conversation — that felt good.

Getting the encryption working properly with the Web Crypto API — a small victory.

When the inject function successfully pasted context into a different platform and I could actually continue the conversation — that was the moment it felt real.

---

## What I Learned

1. **Read the docs. Then read them again.** Chrome's extension documentation is actually pretty good once you stop skimming.

2. **Privacy matters.** I made a conscious decision early on: no servers, no analytics, no tracking. Everything stays local. It's more limiting, but it's the right call.

3. **Ship it.** The extension isn't perfect. There are features I want to add, edge cases I haven't handled. But it works, it's useful, and it's out there now.

4. **The Chrome Web Store review process is strict.** And honestly, that's a good thing. It forced me to think carefully about permissions, descriptions, and user privacy.

---

## What's Next

Context Bridge is live on the Chrome Web Store now. It does what I needed it to do — save conversations, encrypt them locally, and transfer them between platforms.

Will I keep improving it? Probably. There's a list of things I want to add. But for now, I'm just happy it exists.

If you spend time working with multiple AI assistants, maybe give it a try. And if something breaks, well... that's what feedback is for.

---

**Try it:** [Context Bridge on Chrome Web Store](https://chromewebstore.google.com/detail/context-bridge/aomkcodnddognjdihieojjijaficemde)

---

*Thanks for reading. If you're building your own extension and hitting walls, keep going. The walls are part of it.*
