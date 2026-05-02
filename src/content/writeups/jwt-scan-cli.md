---
title: "Building jwt-scan: A CLI That Hunts the Five JWT Bugs From My Lab"
description: "Turning a vulnerability lab into a shippable scanner. From research artifact to npm package, with token-only and live-endpoint modes, in one weekend."
date: 2026-04-28
tags: ["jwt", "cli", "tooling", "appsec", "node", "typescript"]
category: "appsec"
difficulty: "medium"
---

## TL;DR

Took the five JWT vulnerabilities I reproduced from scratch in [jwt-lab](https://github.com/davidldv/jwt-lab) and packaged the detection logic as a CLI. One command checks a static token, probes a live endpoint, or both.

```bash
npx jwt-scan --token "$TOKEN" --url "GET https://api.example.com/me"
```

Repo: [github.com/davidldv/jwt-scan](https://github.com/davidldv/jwt-scan) · [npm](https://www.npmjs.com/package/jwt-scan)

## Why build it

The lab proved I understood the bugs. A scanner proves the understanding generalizes. Same five flaws, but now I had to:

- Detect each issue without seeing the source code.
- Decide what's a static-token check vs. a live-endpoint probe.
- Produce output a CI pipeline can gate on.

Lab teaches the offense. CLI teaches the operationalization.

## What it checks

| ID      | Issue                              | Mode             |
|---------|------------------------------------|------------------|
| JWT-001 | `alg=none` accepted (case variants)| token + http     |
| JWT-002 | HS256/RS256 key confusion          | http + pubkey    |
| JWT-003 | Weak HS256 secret (dictionary)     | token            |
| JWT-004 | `kid` header injection             | http             |
| JWT-005 | Missing/invalid `exp`/`iss`/`aud`  | token            |

Mapping back to the lab: each row was an exploit script there. Here it's a check function with a severity, a finding ID, and a remediation pointer.

## Design choices

**Two modes, one binary.** Token-only mode runs cryptographic and structural checks offline (weak secret brute-force, claim validation). HTTP mode replays mutated tokens against the target and inspects the response. Some checks need both — `alg=none` is theoretical from a token alone, but proven only when the server accepts a forged copy.

**Case variants matter.** `alg=none` filters often check the literal string. `None`, `NONE`, `nOnE` slip past naive denylists. JWT-001 walks the casing.

**Key confusion needs the public key.** JWT-002 takes the RS256 public key, treats it as an HS256 secret, signs a forged token, and checks if the server accepts it. Without the pubkey, the check is skipped (not a false negative — flagged as `skipped: needs --public-key`).

**Weak secret check is bounded.** JWT-003 runs a small wordlist (jwt-secrets top-N) plus common patterns. Not a cracker. The point is "is your secret embarrassingly short" — `secret`, `password`, `changeme`. Real cracking belongs in hashcat.

**`kid` injection.** JWT-004 tries path traversal (`../../dev/null`), command injection patterns, and SQLi-style payloads in the `kid` header. Detection: differential responses between a baseline request and the mutated one.

**Claim hygiene.** JWT-005 is the boring but most-failed one. Tokens missing `exp` get accepted forever. Missing `iss`/`aud` mean tokens cross service boundaries. Static check, no network needed.

## CI integration

```bash
npx jwt-scan --token "$T" --json
# exit code 1 if any high/critical findings
```

Drop into a pipeline step. Token from a test login, scanner blocks merge if a regression reintroduces a finding. Output is structured so the SARIF converter is the obvious next step.

## What I learned

- **Detection is harder than exploitation.** Knowing the bug exists is one thing. Detecting it without source access, without false positives, against a live target you don't want to DoS — that's the engineering.
- **Skipped checks are findings.** A scanner that silently skips JWT-002 because no public key was supplied is worse than one that flags `skipped: configuration incomplete`. Make the gap visible.
- **Severity is opinionated.** `alg=none` accepted: critical. Missing `aud`: medium. The CLI ships defaults; consumers can override per finding.
- **Packaging is the long tail.** The detection code took a weekend. `npx`-able binary, npm publish workflow, semver, README that recruiters can scan in 10 seconds — that took longer.

## Roadmap (v0.2+)

- `jku` and `x5u` URL trust checks — fetch keys from attacker-controlled URLs and forge.
- JWKS endpoint probing — list keys, find rotation gaps, detect weak ones.
- Blind-target heuristics — when the response body changes nothing, infer success from latency, status code patterns, or set-cookie deltas.
- SARIF output for GitHub Code Scanning.
- Burp extension wrapper.

## References

- [jwt-scan on GitHub](https://github.com/davidldv/jwt-scan)
- [jwt-scan on npm](https://www.npmjs.com/package/jwt-scan)
- [jwt-lab — the vulnerability research it grew from](https://github.com/davidldv/jwt-lab)
- [JWT alg=none Bypass — prior writeup](/writeups/jwt-alg-none-bypass/)
- [PortSwigger — JWT attacks](https://portswigger.net/web-security/jwt)
