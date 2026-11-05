# Progress — Prototype: gulf-resale-022118409754202576314

## Current State

- Built 2026-11-05 as **Thanya**, a buyer-first slice of the GCC peer-to-peer resale marketplace in the brief.
- Local review is running at **http://127.0.0.1:4187** (`node dev-server.mjs 4187`).
- Static HTML, CSS and JavaScript only. No dependencies, no backend, no auth. Deploy-ready for Vercel with `index.html` at the repository root.
- `proto-001` is **done**. Nothing is pushed or deployed; the next gate is the user's review and a repository URL.

## What was built

- **Browse**: seeded market of nine pre-owned pieces across Riyadh, Jeddah, Dubai, Doha, Kuwait City and Manama. Hero editor's pick, trust rail, search, category chips, city filter, sort, saved items, empty state.
- **Listing detail**: large product image, honest description, condition, seller rating and verification, buyer-protection panel, reviews and similar items.
- **Escrow checkout**: seeded Riyadh address, standard or express delivery, mada/Apple Pay/new card, live total, explicit "demo checkout, no card charged" note, success state naming the seller and the amount held.
- **Orders**: escrow-held order timeline for new purchases plus a seeded in-transit order with a working **Confirm delivery and release escrow** step; delivered orders move to past orders.
- **Sell**: listing composer with photo upload, live preview card, condition segmented control, price and 8% seller-fee calculation, ownership confirmation, and a published listing that appears first in the market with a **Just listed** badge.
- **Ops**: GMV/escrow/listing/verification KPIs, escrow transaction ledger, seller-verification queue with working Approve/Decline, delivery exceptions and a session-only note.
- **Responsive**: desktop, tablet and mobile layouts, mobile tab bar, full-screen checkout sheet on phones.
- **Design**: warm ivory surface, deep green trust colour, clay accent, Fraunces display serif plus DM Sans, light mode only.

## Verification Evidence

| Command | Result |
|---|---|
| `powershell -ExecutionPolicy Bypass -File .\init.ps1` | PASS: 34 static checks plus 11 render assertions. |
| `node check.mjs` | PASS: 34 checks passed, 0 failed. |
| `node smoke.mjs` | SMOKE PASS: detail, sell, ops, orders, checkout, success, new order, escrow release, filters and search all render against a DOM stub. |
| `node dev-server.mjs 4187` | Listening on `http://127.0.0.1:4187`; served `/` with HTTP 200, 8,253 bytes. |
| `Invoke-WebRequest /styles.css` | HTTP 200, 53,096 bytes. |
| `Invoke-WebRequest /app.js` | HTTP 200, 62,180 bytes. |

The checked contract covers: English-only UI, unique HTML ids, parseable JavaScript, seeded listings, search and filters, item route, escrow checkout, order release, seller publish flow, ops verification actions, light-mode-only styling, mobile layout, icon sizing, HTTPS photography and the local server excluded from deployment. The render smoke test boots `app.js` against a DOM stub and exercises every major view, so missing selectors and broken templates fail before handover.

## Current Objective

Hand the local build over for review. No push, no deploy and no proposal before the user approves it and shares a repository URL.

## Next

1. User opens **http://127.0.0.1:4187/#/browse** and walks the path in `DEMO.md`.
2. On approval: confirm the repository URL, add it to `github.json` -> `approved_remotes`, push, then `node .harness/deploy.mjs gulf-resale-022118409754202576314` from the workspace root.
3. Update `DEMO.md` with the live URL, then write the proposal only if asked.

## Blockers

- None. Deployment is intentionally waiting on user approval.
