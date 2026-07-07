---
title: "Building authzscan: Agent-Driven IDOR Detection You Can Actually Measure"
description: "Why pattern-matching SAST misses broken access control, how a four-phase Claude agent pipeline finds it, and the seeded benchmark that keeps the whole thing honest."
date: 2026-07-07
tags: ["idor", "bola", "agents", "llm", "nextjs", "sast", "eval", "appsec"]
category: "appsec"
difficulty: "hard"
---

## TL;DR

Most access-control bugs aren't "no login." They're authenticated users reaching *other people's* data: `orders/[id]` fetched with the client-supplied `id` and no `WHERE userId = session.user`. That's [OWASP A01](https://owasp.org/Top10/A01_2021-Broken_Access_Control/), the #1 web risk, and Semgrep-style tools largely can't see it — deciding *whose* data a query returns requires reading the code, not matching its syntax.

authzscan is an autonomous IDOR/BOLA review for Next.js App Router repos: a deterministic inventory pass, a Claude agent that traces identifiers to queries, an adversarial verify pass, and SARIF output for GitHub code scanning — plus a seeded eval benchmark so the accuracy claim is a number, not a vibe.

Repo: [github.com/davidldv/authzscan](https://github.com/davidldv/authzscan)

## Why SAST misses this bug class

A rule engine can flag `eval(userInput)` because the vulnerability is *in the syntax*. But look at these two lines:

```ts
const order = await db.order.findUnique({ where: { id: params.id } });
const order = await db.order.findUnique({ where: { id: params.id, userId: session.user.id } });
```

The first is an IDOR if `params.id` is client-controlled and no ownership check happened upstream. The second is fine. Same shape, same API, same taint path — the difference is a *semantic* question about scoping, and the answer might live three files away in a middleware or a helper. That's a reasoning problem, so I pointed a reasoning engine at it.

## The pipeline

Four phases. Only two call the model.

1. **Inventory (deterministic, ts-morph).** Enumerate every route handler and Server Action, detect the auth library from `package.json` (next-auth, Clerk, Lucia, or custom), and extract the repo's own ownership idioms — every `where` clause mentioning `userId` / `tenantId` / `organizationId`-style keys. No LLM, byte-stable output.
2. **Trace (agent).** Per endpoint group, the agent gets read/grep/list tools and the auth profile from phase 1, follows each client-controlled identifier (route param, body field, query param) to the database query it reaches, and emits candidates where the query has no ownership scope. Evidence must cite file paths and line numbers it actually read.
3. **Verify (agent, adversarial).** A second pass whose only job is killing false positives: re-read the cited code, look for middleware that already scopes the request or checks earlier in the call chain, and confirm **only** with a concrete "user A's session reaches user B's resource" scenario.
4. **Render (deterministic).** Markdown, SARIF 2.1.0, or JSON, plus CI exit codes (`0` clean, `1` confirmed findings, `2` scan error).

Feeding the repo's *own* idioms into the trace prompt matters more than I expected. "Is this query scoped?" is unanswerable in the abstract; it's answerable against *how this codebase does scoping*.

## Degrade loudly, never silently

The scariest failure mode for a security tool is a silent gap that reads as a clean bill of health. Two rules:

- Endpoints the scanner can't analyze are reported as **not analyzed** — they never disappear into an implied "clean."
- Candidates the verify pass can't confirm surface as low-confidence `UNVERIFIED` instead of being dropped.

Same philosophy as jwt-scan's `skipped: needs --public-key`: make the gap visible, because the absence of findings is not proof of safety.

## The eval harness is the actual project

An AI scanner without a benchmark is a demo. The eval is what makes it a tool:

- **16 seeded vulnerabilities** in a realistic Next.js app, spanning ten bug shapes across a difficulty ladder — from "no auth at all" (easy) up to method asymmetry (GET scoped, sibling DELETE not), wrong-subject checks (ownership verified against the *recipient*, not the caller), check-after-write ordering bugs, indirect references through relations, and raw-SQL tenancy filtered by a client-supplied `accountId`.
- **6 hardened twins** — correctly-scoped versions of the same patterns — as false-positive tripwires. Recall without precision is just noise generation.
- **Zero label leakage.** No `// VULN` markers to grep for, and the live eval scans a temp copy with the answer-key manifest removed.
- **A `PerfectRunner` oracle** that answers from the manifest and must score 1.0/1.0 — proving the classifier and metrics are correct *independent of model quality*. If your harness can't recognize a perfect run, your numbers mean nothing.
- **Gates:** ≥80% recall, ≥70% precision, aggregated as mean ± stddev across runs.

Honest status: the committed report is the oracle sanity run (it passes). Live multi-run numbers on a real model cost real API spend and are the next milestone — the point of building the gates first is that when those numbers land, they're checkable, not curated.

## What I learned

- **Verification is a different skill than detection.** The trace pass wants to find things; left alone it over-reports. Giving a second pass the explicit adversarial goal of *rejecting* the first pass's work is what makes precision possible — same reason code review works better than self-review.
- **Framing is load-bearing when you build on a model.** An agent asked to "find exploitable IDORs" and one asked to "perform defensive code review of authorization logic" are doing the same work, but safety routing treats them differently. The defensive framing is the accurate one anyway — the output is a fix list, not an exploit.
- **Determinism is a budget feature.** Everything that can be AST analysis (inventory, grouping, rendering) is, so tokens are spent only where reasoning is needed. A budget guard halts the scan at a spend ceiling, and every phase checkpoints to `.authzscan/` artifacts so an interrupted scan resumes instead of re-billing.
- **Scope discipline beats coverage theater.** Object-level authorization only — no XSS, no SQLi, no authn, no Pages Router. One bug class done measurably beats ten done plausibly.

## Roadmap

- Live eval report (multi-run, mean ± stddev) committed to the repo.
- Function-level authorization (missing role checks) as a second, separately-gated bug class.
- GitHub Action wrapper — SARIF straight into code scanning on PRs.

## References

- [authzscan on GitHub](https://github.com/davidldv/authzscan)
- [OWASP A01:2021 — Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
- [SARIF support for code scanning — GitHub docs](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)
- [Building jwt-scan — prior writeup](/writeups/jwt-scan-cli/)
