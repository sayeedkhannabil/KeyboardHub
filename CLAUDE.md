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

## Frontend Design Skills & Conventions

When working on UI, follow these conventions already present in the codebase:

- **Bootstrap 4** grid and utility classes are the primary layout mechanism. Avoid introducing a second CSS framework.
- Each page has a dedicated CSS file in `client/css/` — keep styles scoped to their page file.
- Assets (images) live in `client/assests/` (note the existing typo in the folder name — do not rename to avoid breaking references).
- Typed.js is already a dependency; use it for any animated text effects on the landing page.
- New pages follow the pattern: `pages/<name>.html` + `components/<name>.js` + `css/<name>.css`.
