# Demo — Gulf Resale 022118409754202576314 (Thanya)

Thanya is a buyer-first slice of the GCC resale marketplace described in the brief: browse seeded
pre-owned pieces across the Gulf, open a listing, check out with escrow, then track and release the
order. Seller listing and an operations console sit behind the same header.

- **Live URL:** not deployed yet. Deployment waits for local review and a repository URL from the user.
- **Local review URL:** `http://127.0.0.1:4187`
- **Start locally:** `node dev-server.mjs 4187` from this directory
- **Deploy:** `node .harness/deploy.mjs gulf-resale-022118409754202576314` (from the workspace root)
- **Last verified:** 2026-11-05

## The 60-second path

| # | Do this | The visitor should see |
|---|---|---|
| 1 | Open `http://127.0.0.1:4187/#/browse` | A seeded market: hero with editor's pick, trust rail, nine listings with prices in SAR and ID-verified sellers. |
| 2 | Click the teak lounge chair (hero or first card) | Listing detail with condition, seller rating, buyer-protection panel and a sticky product image. |
| 3 | Click **Buy with escrow** | Checkout with the seeded Riyadh address, standard or express delivery, mada/Apple Pay, and a total that updates when delivery changes. |
| 4 | Click **Pay SAR 1,275 into escrow** | A clear success state: the amount is held, the seller is named, and the order gets a tracking timeline. |
| 5 | Click **Track this order** | Orders page with the new escrow-held order plus a seeded in-transit order. |
| 6 | On the seeded Sony order, click **Confirm delivery and release escrow** | The escrow is released, the order moves to past orders, and the toast confirms the release. |
| 7 | Open **Sell**, add a title and price, tick the ownership box, and publish | The new listing appears first in the market with a **Just listed** badge, using the uploaded photo or a designed fallback tile. |
| 8 | Open **Ops** | GMV, escrow exposure, a transaction ledger, a seller-verification queue with working Approve/Decline, and delivery exceptions. |

## The one sentence to say about it

> "This is the marketplace loop the brief asks for: a buyer finds a second-hand piece, pays into escrow, tracks delivery, and releases the money only after the item arrives, while the seller and the ops team get their own working views."

## What is deliberately fake

- All listings, sellers, buyers, ratings, reviews, transactions and GMV figures are seeded demo data.
- Product photography is stock imagery from Unsplash, not seller uploads. If an image cannot load, a
  designed category tile stands in.
- Checkout is simulated. No card is charged, no escrow provider is called, and the order exists only in
  browser memory.
- Identity verification, delivery booking and tracking are represented by seeded states. Aramex is
  named as the example carrier, but there is no carrier API connection.
- There is no signup or login. The demo opens as Layla A., an ID-verified buyer and seller.
- State resets on refresh. Published listings and new orders do not persist across reloads.
- Ops approve/decline and delivery-notification actions update the session only.
- The mobile app is not built. The web experience is responsive and has a mobile tab bar, which is the
  honest scope of this prototype.

## If something fails while they look

- Reload the entry route: `http://127.0.0.1:4187/#/browse`.
- If the local server stopped, restart it with `node dev-server.mjs 4187`.
- Open the market directly rather than a deep link: `http://127.0.0.1:4187/#/browse`.
- After deployment, redeploy with `node .harness/deploy.mjs gulf-resale-022118409754202576314`.

## Not built (next, if the user wants it)

- Real payments and escrow-provider integration, with webhooks and refund/dispute states.
- Identity-verification provider integration and a seller onboarding/KYC queue.
- Logistics partner API for rates, label booking and live tracking.
- Notifications, buyer-seller messaging, written reviews and a real admin back office with persistence.
- A shared API and data model for a native iOS/Android app.
