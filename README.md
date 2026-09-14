# Trattoria — Front End (Home / Menu / Item Details / Search-Filter)

Restaurant ordering site. This covers your half of the project: **Home, Menu
(catalog), Menu item details, Search/filter, and shared menu components**.
Your partner's pages (login, cart/order, checkout, order tracking, admin) are
not included — `src/pages/Cart.jsx` is a placeholder so the header's "Order"
link doesn't 404 during dev.

Supports both **pickup/delivery** and **dine-in table ordering** — the order
type is chosen on the Home page and shared via context (see below).

## Setup

```bash
npm install
npm run dev
```

Requires Node 18+.

## What's here

- `src/pages/Home.jsx` — hero with pickup/delivery/dine-in selector (+ table
  number field for dine-in), category shortcuts, popular items grid
- `src/pages/Menu.jsx` — full menu with search (`?q=`), category filter,
  dietary filters (vegetarian/vegan/gluten-free/seafood), and sort
- `src/pages/MenuItemDetails.jsx` — image gallery, dietary tags, special
  instructions field, quantity picker, related items
- `src/components/MenuItemCard.jsx`, `MenuGrid.jsx`, `Header.jsx` — shared components
- `src/context/CartContext.jsx` — order items (add/remove/qty/notes),
  persisted to `localStorage` under `haul_cart`
- `src/context/OrderTypeContext.jsx` — `{ type: 'pickup' | 'delivery' | 'dine-in',
  tableNumber, address }`, persisted under `haul_order_type`. Your partner's
  checkout reads/writes this so the order type carries through.
- `src/data/menu.js` — placeholder menu (10 items across 4 categories).
  Every page reads from this one file — swap it for a real API later.

## Merging with your partner

- Their routes (`/login`, `/register`, `/checkout`, `/track`, `/admin`)
  aren't in `App.jsx` yet — add them alongside the existing ones.
- `useCart()` and `useOrderType()` are already exported and ready for their
  Cart/Checkout pages — no need to rebuild either.
- Tailwind theme colors/fonts are in `tailwind.config.js` — reuse those
  tokens (`accent`, `trust`, `sale`, `ink`, etc.) so both halves match.
