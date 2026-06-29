---
title: "JWT alg=none Bypass: When the Token Trusts Itself"
description: "How a one-line algorithm header turns authentication into security theater, and why allowlisting is the only fix."
date: 2026-04-15
tags: ["jwt", "auth", "owasp", "appsec"]
category: "appsec"
difficulty: "easy"
---

## TL;DR

If a JWT verifier honors the `alg` field from the token header, an attacker swaps `alg` to `none`, drops the signature, and forges arbitrary claims. Fix: pin algorithm server-side, never trust header `alg`.

## The vulnerable pattern

```ts
// DO NOT DO THIS
const decoded = jwt.verify(token, secretOrKey);
```

Most libraries default to honoring the `alg` claim in the token header. Send `{"alg":"none","typ":"JWT"}`, base64url it, attach an empty signature, and many verifiers will accept the token as valid.

## Exploit walkthrough

1. Capture a valid JWT from `/login`.
2. Decode header: `{"alg":"HS256","typ":"JWT"}`.
3. Rewrite header: `{"alg":"none","typ":"JWT"}`.
4. Rewrite payload: change `sub` or `role` to admin.
5. Strip the signature segment, leave trailing dot.
6. Replay the token. Server returns the protected resource.

```bash
HEADER=$(echo -n '{"alg":"none","typ":"JWT"}' | base64url)
PAYLOAD=$(echo -n '{"sub":"admin","role":"admin","exp":9999999999}' | base64url)
TOKEN="${HEADER}.${PAYLOAD}."
curl -H "Authorization: Bearer ${TOKEN}" https://target/api/admin
```

## The fix

Allowlist a single algorithm, server-side, before verification.

```ts
const decoded = jwt.verify(token, publicKey, {
  algorithms: ['RS256'], // hard pin
  issuer: 'https://issuer.example',
  audience: 'api.example',
});
```

Better: use a library that requires explicit algorithm at construction time and rejects token-supplied `alg` entirely.

## Lessons learned

- **Never trust attacker-controlled metadata.** The `alg` header is attacker-controlled.
- **Allowlist, don't denylist.** Blocking `none` misses HS/RS confusion. Pin the exact algorithm you expect.
- **Validate `iss`, `aud`, `exp` server-side.** Signature alone is not enough.
- **Audit your auth library defaults.** Some still honor header `alg` in 2026.

## References

- [JWT Lab — repo](https://github.com/davidldv/jwtsecuritylab)
- [RFC 7518 §3.6 — `none` algorithm](https://www.rfc-editor.org/rfc/rfc7518#section-3.6)
- [PortSwigger — JWT attacks](https://portswigger.net/web-security/jwt)
