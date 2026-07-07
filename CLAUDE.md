# Context for Claude

## Who I am

- **David Londoño** (`davidldv` on GitHub, dlondon.dev@gmail.com). Currently living in **Bogotá, Colombia** (relocated from Pereira).
- Full-Stack Engineer pivoting into **Application Security**. ~2 years professional experience.
- Languages: Spanish native, English C1, German B1.
- Two years of Systems & Computing Engineering at Universidad Tecnológica de Pereira (not completed). Self-directed continuing study in OS, networks, algorithms, applied ML.

## Where I am now

- Actively job-searching: Software Engineer / junior AppSec / Full-Stack roles. Interviewing locally in Bogotá; open to remote and relocation.
- **Tambora** (Frontend, Jul–Sep 2025) — jQuery→React migration, Atomic Design, Azure CI/CD pipeline.
- **EliteStack Bootcamp** (Jun–Jul 2024) — full-stack foundations.
- NOTE: **Materiales La Bodega** is a family business — moved OUT of work experience and listed under **projects** (not paid/formal employment). Do not present it as a job. It's a production retail platform (~$1.5M COP/day) where I own auth, session security, RBAC, OWASP hardening.

## Goals

- Land a **Software Engineer or junior AppSec** role — full-time preferred, remote or relocation.
- End goal: **relocate to Germany** (EU Blue Card) or US. Interviewing locally in Colombia meanwhile.
- Pass **CompTIA Security+** (target 2026 Q3). Working through PortSwigger Web Security Academy.
- Build credible security pivot via shipped projects, not just certifications.

## Stack I work in

- **Languages:** TypeScript, JavaScript, Python, C, SQL, Bash.
- **Frontend:** React, Next.js (App Router, RSC, Server Actions), Astro, Tailwind, Framer Motion. Comfortable, not expert, with three.js / react-three-fiber.
- **Backend:** Node.js, Express, Next.js API, custom WebSocket servers. Prisma + PostgreSQL primary. MongoDB / Redis as needed.
- **Security:** OWASP Top 10, OAuth2 / OIDC, JWT (EdDSA / RS256), RBAC, Argon2id / scrypt, CSRF/XSS/SQLi defenses, STRIDE threat modeling, secure code review.
- **Tooling:** Burp Suite, nmap, Wireshark, Semgrep, Trivy, Docker, Linux/UNIX console, Jira, GitHub Actions, Azure Pipelines.
- **AI workflow:** Claude Code daily. Architecture-first / context-file-driven development (see Ghost AI writeup).
- **Not professional in:** Vue, Angular, .NET / C# (have a personal C# repo `titan`), SQL Server (dialect only). Willing to ramp fast.

## Flagship projects

- **PairCode** — secure real-time collaborative workspace. Node.js + Express + PostgreSQL. In-house auth (EdDSA JWTs, rotating refresh tokens with reuse detection, Argon2id, CSRF), custom WebSocket server with single-use ticket handshake + server-side RBAC.
- **Materiales La Bodega** — production retail platform (family business). Auth, session security, RBAC, OWASP hardening.
- **authzscan** — autonomous IDOR/BOLA review for Next.js App Router repos, driven by Claude agents. Deterministic ts-morph inventory + agent trace/verify passes, SARIF output, seeded 16-vuln eval benchmark. Repo currently PRIVATE (github.com/davidldv/authzscan).
- **LLM/RAG Security Lab** (`llmseclab`) — offense/defense lab for RAG systems: vulnerable + hardened FastAPI pair, 5 OWASP LLM Top 10 attacks as pytest suite (cross-tenant retrieval, indirect injection, poisoning, MCP excessive agency, output XSS).
- **JWT Security Lab** — offense/defense lab. From-scratch JWT sign/verify in TypeScript reproducing 5 production-grade flaws (`alg=none`, HS/RS confusion, weak-secret brute-force, `kid` injection, missing claim validation) against a hardened mirror.
- **jwt-scan** — npm CLI scanner derived from the lab. Token + live-endpoint modes, CI-friendly exit codes.
- **Ghost AI** — collaborative architecture-first canvas (Next.js, Liveblocks, React Flow, Vercel AI SDK + Gemini). Exports Markdown specs.
- **This portfolio** — Astro 6.1 + React 19 + Tailwind 4.2, i18n (EN/ES/DE), writeups section.

## This repo

- **Portfolio site** — Astro + React, Bun-managed, deployed on Vercel.
- Source: `src/` (components, pages, content/writeups, i18n/ui.ts, layouts, lib).
- Content is i18n via `src/i18n/ui.ts` (EN/ES/DE). Writeups in `src/content/writeups/*.md`.
- Live: https://davidlondon.dev · Repo: https://github.com/davidldv/portfolio

## How I like to work

- Direct, technical, no fluff. Honest disagreement preferred over false agreement.
- Security framing welcome on any decision — remind me of attack surface, validation, secrets handling.
- Pivoting careers and applying actively — when I share a JD, I want a clear read on fit, transferable angles, and honest gaps, not blanket optimism.
