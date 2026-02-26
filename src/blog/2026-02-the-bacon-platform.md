---
title: The Bacon Platform — Building Edge AI for the People Who Need It Most
date: 2026-02-26
author: Jaime Bacon
description: How I built offline, private AI tools in a hospital waiting room — no cloud, no subscriptions, fully auditable sources. Introducing Bacon-Buddy Medical and The Good Book.
tags:
  - edge-ai
  - offline-ai
  - rag
  - local-llm
  - ollama
  - faith-tech
  - prepper-tech
  - public-domain
slug: the-bacon-platform
---

# The Bacon Platform  
Building Edge AI for the People Who Need It Most  
Jaime Bacon | February 2026  
[github.com/jaimebaconx](https://github.com/jaimebaconx)

## 1. The Origin Story

### The Revelation in the Waiting Room

It started on a Monday morning in a hospital waiting room in Springfield, Missouri. My son was getting his IVIG infusion. I had my laptop, a Smash Bros controller within arm's reach, and a question nagging at me: could I actually run AI locally, offline, on my own hardware?

By noon I had installed Ollama, pulled Llama 3.2, built my first RAG pipeline in Python, fed *Where There Is No Doctor* into ChromaDB, and watched an offline AI answer a medical question from a local knowledge base for the first time. Zero internet. Zero cloud. Zero cost per query.

**“WHY DIDN’T ANYONE TELL ME IT WAS THIS EASY”**

That was the moment. Not a boardroom. Not a pitch deck. A hospital waiting room, a sick kid, and a laptop. The Bacon Platform was conceived between IVIG drip cycles and Smash Bros matches.

### What I Built in 48 Hours

**Monday (Hospital):**

- Installed Ollama and pulled Llama 3.2
- Built first RAG pipeline in Python
- Fed *Where There Is No Doctor* into ChromaDB
- Bacon-Buddy answered its first medical question from a local knowledge base
- Validated edge AI thesis against MIT/Stanford funded startup Tiiny AI
- Conceptually founded the Bacon Platform
- Bacon-Buddy code pushed to GitHub

**Tuesday (Day Job + Hospital Follow-Up):**

- ITsec meeting — now own Jira data classification project
- Spun up Azure DevOps org under ODOC banner
- Pivoted to Campfire — old time radio AI curation platform
- Installed CUDA, PyTorch cu118, Whisper — got GPU acceleration working on 1660 Ti

### The Personal Context

All of this was built while present at my son’s IVIG appointment, playing Smash Bros in a hospital, leading worship with family on Sunday, watching my oldest son come home from his first dance to tell his dad he held a girl’s hand, hanging library shelves on Friday evening, filing taxes on Saturday morning, and launching Gov’t Dev Chronicles Episode 1 on LinkedIn and X.

AI doesn’t replace builders. It removes the barrier between vision and manifestation.

## 2. What We’ve Built

### 2.1 Bacon-Buddy Medical v0.1

An offline medical AI assistant that answers medical questions grounded in trusted public domain field guides. No internet. No subscription. No cloud. Every answer cites its source.

**Knowledge Base:**

- *Where There Is No Doctor* — Hesperian Health Guides
- *Where There Is No Dentist* — Hesperian Health Guides
- FM 4-25.11 — US Army First Aid Field Manual (Public Domain)
- Special Forces Medical Handbook ST 31-91B (Public Domain)
- Ship’s Medicine Chest and Medical Aid at Sea — US Coast Guard (Public Domain)
- Emergency Childbirth — US Government (Public Domain)

**Sample Output:**  
**Q:** How do I splint an arm?  
**A:** To splint an arm, pad the splints where they touch bony parts... use at least four ties (two above and two below the fracture)... check distal pulses before and after applying the splint.  
**Source:** FM 4-25.11/NTRP 4-02.1/AFMAN 44-163(I)

**Tech Stack:**

- Python + LangChain RAG pipeline
- Ollama + Llama 3.2 3B (local inference)
- ChromaDB vector database (persistent, local)
- HuggingFace sentence-transformers (embedding)
- PyMuPDF (PDF ingestion)

GitHub: [github.com/jaimebaconx/Bacon-Buddy](https://github.com/jaimebaconx/Bacon-Buddy)

### 2.2 The Good Book v0.1

An offline Bible study assistant that answers theological questions, finds relevant passages, and synthesizes across scripture and trusted commentaries. Built on the same RAG pipeline as Bacon-Buddy with Bible-optimized chunking.

**Knowledge Base:**

- King James Bible (Public Domain)
- World English Bible (Explicitly Public Domain)
- Matthew Henry’s Complete Commentary (1706, Public Domain)
- Easton’s Bible Dictionary (1893, Public Domain)
- Nave’s Topical Bible (Public Domain)

**Sample Output:**  
**Q:** What does the Bible say about anxiety and fear?  
**A:** The Bible says that a holy fear is enjoined as a preventive of carelessness in religion... This fear is not a slavish dread, but rather filial reverence (Easton’s Dictionary)... ‘The fear of the LORD is the beginning of wisdom’ (Psalm 111:10, KJV)

GitHub: [github.com/jaimebaconx/good_book](https://github.com/jaimebaconx/good_book)

## 3. The Vision — Connect by Disconnecting

The Bacon Platform isn’t just about offline AI. It’s about a specific worldview: technology should increase autonomy, not dependency. The through line across every product is simple — you don’t need permission, connectivity, or a corporation’s continued goodwill to use this.

**“Connect by Disconnecting”** — edge AI as a tool for building tighter community bonds offline, not looser ones online.

### 3.1 Target Markets

- Prepper and Survival Communities — offline knowledge for grid-down scenarios
- Faith Communities — missionaries, rural churches, home Bible study groups
- Rural and Agricultural Communities — farmers, homesteaders, small ranchers
- Homeschool Families — offline AI tutors grounded in parent-chosen materials
- Small Businesses — tired of paying $500/month in AI subscriptions
- Regulated Industries — healthcare, legal, government — data that can’t go to the cloud

## 4. Technical Architecture

(You can keep or trim sections 4–6 if your blog prefers shorter posts. They’re already well-structured.)

[... paste the rest of sections 4, 5, and 6 here if you want the full length ...]

## 6. What’s Next

Immediate (This Week)

- Gumroad listings for Bacon-Buddy Medical and The Good Book
- Reddit posts: r/preppers, r/homestead, r/TrueChristian, r/LocalLLaMA
- Gov’t Dev Chronicles Episode 2 — document the build publicly

I find the people that Big Tech forgot and build AI that actually works for them.

Built in a hospital waiting room. For the people who need it most.

[github.com/jaimebaconx](https://github.com/jaimebaconx) | February 2026
