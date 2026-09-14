# Trattoria — Front End (Home / Menu / Item Details / Search-Filter)

Restaurant ordering site. This covers the front-end portion of the project: Home,
Menu catalog, menu item details, search/filtering, and shared menu components.

This project is also referred to as the e-commerce app in the local workspace.

Supports both pickup/delivery and dine-in table ordering. The order type is
chosen on the Home page and shared via context.

## Setup

```bash
npm install
npm run dev
```

Requires Node 18+.

## What's here

- `src/pages/Home.jsx` — hero with pickup/delivery/dine-in selector and table
  number field for dine-in, plus category shortcuts and popular items grid
- `src/pages/Menu.jsx` — full menu with search (`?q=`), category filter,
  dietary filters, and sorting
- `src/pages/MenuItemDetails.jsx` — image gallery, dietary tags, special
  instructions field, quantity picker, and related items
- `src/components/MenuItemCard.jsx`, `MenuGrid.jsx`, `Header.jsx` — shared components
- `src/context/CartContext.jsx` — order items (add/remove/qty/notes), persisted
  to `localStorage` under `haul_cart`
- `src/context/OrderTypeContext.jsx` — `{ type: 'pickup' | 'delivery' | 'dine-in',
  tableNumber, address }`, persisted under `haul_order_type`
- `src/data/menu.js` — placeholder menu data used across the app

## Merging with your partner

- Their routes for login, register, checkout, tracking, and admin pages should be
  added alongside the existing routes in `App.jsx`.
- `useCart()` and `useOrderType()` are already exported and ready for shared use.
- Tailwind theme colors and fonts are defined in `tailwind.config.js` so the two
  halves of the app can match visually.
