# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KeyboardHub is a mechanical keyboard e-commerce prototype with a client-server monorepo structure. The frontend uses vanilla JavaScript bundled with Parcel; the backend uses Express + Supabase (PostgreSQL).

---

## Commands

### Client (frontend)

```bash
cd client
npm install
npm run dev      # Parcel dev server (hot reload)
npm run build    # Production build → ./dist
```

### Server (backend)

```bash
cd server
npm install
node app.js      # Start API server on port 3000
```

### Environment setup

Create `server/.env` before starting the server:

```
SUPABASE_URL=<your_supabase_project_url>
SUPABASE_KEY=<your_supabase_anon_key>
```

---

## Architecture

### Frontend (client/)

- **Bundler:** Parcel 2 — no framework, plain ES modules
- **UI library:** Bootstrap 4.3.1 via CDN
- **HTTP client:** Axios — all API calls point to `http://localhost:3000`
- **Routing:** File-based (separate `.html` pages); product ID is passed via URL hash (`details.html#<id>`)

**Page → component mapping** (each page imports exactly one JS module):

| Page | Component | Data fetcher |
|------|-----------|--------------|
| `products.html` | `components/products.js` | `components/productData.js` |
| `details.html` | `components/details.js` | `components/detailsData.js` |
| `cart.html` | `components/cart.js` | — (DOM-only state) |

**Key patterns:**
- DOM state only — no client-side store or session persistence.
- Pagination is hardcoded at 6 items/page; the products component slices the full API response client-side.
- The details page reads `location.hash` on load to fetch the correct product.
- Cart quantity is managed with inline `+`/`−` button listeners; no backend cart service exists yet.

**Incomplete features** (UI scaffolded, logic missing):
- Login / Signup pages — HTML and CSS exist, no auth integration.
- Sidebar filter — rendered but not wired to any filtering logic.
- Search input — Typed.js animates the placeholder; no actual search implemented.

### Backend (server/)

- **Framework:** Express 4 with ES module syntax (`"type": "module"` in package.json)
- **Database:** Supabase PostgreSQL via `@supabase/supabase-js`
- **Entry point:** `app.js` — mounts CORS middleware, JSON body parser, and the products router
- **Routes:** `routes/products.js` — full CRUD on `products` table

```
GET    /api/products        → list all products (ordered by id)
GET    /api/products/:id    → single product
POST   /api/products        → create product
PUT    /api/products/:id    → update product
DELETE /api/products/:id    → delete product
```

**Note:** `server.js` and `abc.js` are legacy files and not the active entry point. The Supabase client is instantiated directly inside `routes/products.js`; the `config/supabase.js` module exists but is unused — if adding new route files, create the client in that config and import from there.

### Data flow

```
Browser (Parcel bundle)
  │  Axios HTTP requests
  ▼
Express on :3000
  │  @supabase/supabase-js
  ▼
Supabase PostgreSQL
  └─ tables: products, users
```

---

## Frontend Design System — Neobrutalism

The site uses a neobrutalism visual style. All pages import `client/css/neo.css` first (CSS variables and Google Font), then Bootstrap, then the page-specific CSS.

**Design tokens** (defined in `neo.css` as CSS custom properties):

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#f5f0e8` | Page background (warm cream) |
| `--black` | `#0d0d0d` | Borders, text, shadows |
| `--yellow` | `#ffe566` | Primary accent, navbar, CTAs |
| `--pink` | `#ff6b9d` | Secondary accent (close button, badges) |
| `--teal` | `#06d6a0` | Signup accent |
| `--border` | `3px solid #0d0d0d` | All borders |
| `--shadow` | `4px 4px 0 #0d0d0d` | Hard offset shadow (no blur) |
| `--shadow-lg` | `6px 6px 0 #0d0d0d` | Large cards |

**Rules:**
- `border-radius: 0` everywhere — no rounded corners.
- Shadows are hard/flat (no `blur` value). Hover state shifts by `translate(2px, 2px)` and reduces shadow to simulate a press.
- Typography: **Space Grotesk** (weight 400/500/700/800). Headings are uppercase with tight letter-spacing.
- No background images or gradients on any page. All pages use solid `--bg` cream.
- Bootstrap 4 is still used for the product grid layout only. Its `card`, `btn-primary`, and `pagination` classes are overridden with `!important` to match neobrutalism.

**Shared font import:** `neo.css` imports Space Grotesk from Google Fonts. All `<link>` tags must be ordered: `neo.css` → Bootstrap → page CSS.

**Per-page CSS files:**

| File | Page | Notes |
|------|------|-------|
| `neo.css` | All | Variables + font only |
| `index.css` | Landing | Hero section, feature strip |
| `products.css` | Products + Details | Also imported by `details.html` for shared navbar styles |
| `details.css` | Details | Product layout, cart button |
| `cart.css` | Cart | Cart item cards, quantity counter |
| `login.css` | Login | Form card with yellow heading badge |
| `signup.css` | Signup | Same structure, teal accent instead of yellow |

**Adding new pages:** follow the pattern `pages/<name>.html` + `components/<name>.js` + `css/<name>.css`. Import `neo.css` before Bootstrap in the `<head>`.

Assets (images) live in `client/assests/` (existing typo — do not rename).
