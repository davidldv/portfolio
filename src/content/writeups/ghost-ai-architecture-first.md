---
title: "Ghost AI: Architecture-First Engineering in the Age of AI Agents"
description: "A real-time collaborative workspace where you design systems instead of typing them — and the context-managed workflow that built it. Notes on what senior engineering looks like when implementation becomes a commodity."
date: 2026-05-04
tags: ["ai", "architecture", "next.js", "prisma", "postgres", "typescript", "tailwind", "liveblocks", "react-flow"]
category: "research"
---

## TL;DR

Built [Ghost AI](https://ghost-aildv.vercel.app/), a real-time collaborative workspace where teams describe a system in plain English, an AI agent maps it onto a shared canvas, the team refines the architecture together, and the final graph exports as a Markdown technical spec ready to hand to an implementation pipeline.

The product is interesting. The workflow that produced it is more interesting.

Repo: [github.com/davidldv/ghost-ai](https://github.com/davidldv/ghost-ai) · Live: [ghost-aildv.vercel.app](https://ghost-aildv.vercel.app/)

Huge thanks to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) — the tutorial that kicked this off crystallized the architecture-first mindset I've been circling for months.

## The premise

The job of a senior engineer is being quietly rewritten.

- Less *"writes the code."*
- More *"decides what code is worth writing, where it lives, and how its pieces talk."*

Three claims behind Ghost AI:

1. **Implementation is becoming a commodity.** Once a system is well-specified, AI produces a working first pass in minutes.
2. **Architecture is not.** Service boundaries, consistency models, failure domains, data ownership — these decisions compound for years.
3. **The expensive mistakes are structural.** A misplaced queue, a leaky abstraction, a coupling that should've been a contract. No autocomplete catches those.

The bet: the diagram, not the file tree, is the primary artifact.

## What it does

You open a workspace, type something like *"event-driven order pipeline with a payments service, an inventory service, and a notification fan-out"*, and an agent lays it onto a shared canvas — nodes for services, edges for contracts, grouped by failure domain. Your team joins the room, drags things around, refines, comments. When it looks right, you export a Markdown spec: services, responsibilities, data ownership, integration points. That spec is the handoff to the implementation pipeline.

Key pieces:

- **Real-time canvas.** Multiplayer cursors, presence, conflict-free edits via [Liveblocks](https://liveblocks.io/).
- **Graph model.** [React Flow](https://reactflow.dev/) for the canvas; nodes and edges are first-class entities, not pixels.
- **AI generation.** Vercel AI SDK + Gemini. Prompts produce structured graph mutations, not free-text.
- **Spec export.** The graph serializes to Markdown — readable for humans, parseable for downstream agents.
- **Templates.** Microservices, event-driven, CI/CD starting points so a new project is a fork of an opinionated baseline, not a blank canvas.

## Stack

Next.js 16 · React 19 · TypeScript · Prisma + Postgres · Liveblocks · React Flow · Vercel AI SDK + Gemini · Tailwind · shadcn/ui · NextAuth (Google/GitHub) · Vercel Blob.

Boring stack on purpose. The novelty is the workflow, not the dependencies.

## How it was built: context-first, not code-first

The interesting part for me wasn't the product. It was that the entire codebase is driven by a small set of living context files that the AI agents — and I — read before writing anything:

| File | Purpose |
|------|---------|
| `project-overview.md` | What we're building and why |
| `architecture-context.md` | Boundaries, invariants, storage model, data ownership |
| `code-standards.md` | Conventions — naming, error handling, file layout |
| `progress-tracker.md` | Current state, updated after every change |

Every feature was scoped, designed, and reviewed against those docs *before* a line of code was written. The AI agents working alongside me read the architecture before they implement. Drift is caught at the spec layer, not in code review.

That sounds like ceremony. In practice it's the opposite — it's how you get to skip the ceremony of unwinding a bad decision three weeks later.

## What changes when context is the artifact

A few things broke from how I used to work:

- **PRs got smaller and more obviously correct.** When the spec already said "the canvas store owns node positions; Liveblocks owns presence only," the implementation has nowhere to drift to.
- **Onboarding an agent is the same as onboarding a teammate.** Point them at the four files. Don't paste in code; paste in *intent*.
- **Refactors stopped being scary.** The contracts live in the docs. If a refactor preserves the contracts, it's safe by construction.
- **The model stopped being a faster keyboard.** It started being a junior architect who has actually read the design doc.

## Lessons

- **The leverage is upstream.** If you're prompting the model to write functions, you're using a Ferrari to deliver pizza. Prompt it to critique your boundaries.
- **A diagram is a contract, not a picture.** The reason Ghost AI exports Markdown and not PNG is that the next agent in the pipeline needs to *read* it.
- **Living docs > stale docs > no docs.** A `progress-tracker.md` that's wrong by Friday is worse than nothing. The discipline is updating it the same commit.
- **Templates beat blank canvases.** Most architecture mistakes happen because someone started from zero when they should have started from "boring microservices baseline" and deleted what they didn't need.

## Where this goes

Short list:

- **Multi-agent review.** A "principal engineer" agent that critiques the diagram against patterns before export.
- **Spec → implementation handoff.** Pipe the exported Markdown directly into a Claude Code / Codex workflow with the four context files pre-loaded.
- **Diff view for diagrams.** Treat architecture changes like code changes — what got added, what coupling tightened, what boundary moved.
- **Cost / failure annotation.** Each node tagged with blast radius and approximate cost so the diagram surfaces tradeoffs, not just topology.

## References

- [Ghost AI — live](https://ghost-aildv.vercel.app/)
- [Ghost AI — repo](https://github.com/davidldv/ghost-ai)
- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) — the tutorial that started it
- [Liveblocks docs](https://liveblocks.io/docs)
- [React Flow](https://reactflow.dev/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
