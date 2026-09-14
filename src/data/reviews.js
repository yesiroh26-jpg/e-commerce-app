// Seed reviews so every dish shows some write-ups out of the box, without
// anyone having to type them in by hand. These are generated from a small
// pool of names + comment templates, not written per-dish — real reviews
// added through the site (see ReviewsContext) get merged on top of these.
const REVIEWERS = [
  'Ada O.', 'Chinedu M.', 'Bisi A.', 'Tunde K.', 'Ngozi E.',
  'Yusuf B.', 'Funke S.', 'Emeka N.', 'Halima I.', 'Segun T.',
]

const TEMPLATES = [
  { rating: 5, text: (dish) => `The ${dish} here is honestly the best I've had in a while. Will be ordering again.` },
  { rating: 4, text: (dish) => `Really enjoyed the ${dish} — good portion size and arrived warm.` },
  { rating: 5, text: (dish) => `${dish} tasted just like home. Well seasoned, nothing bland about it.` },
  { rating: 4, text: (dish) => `Solid ${dish}. Took a bit longer than expected but worth the wait.` },
  { rating: 3, text: (dish) => `${dish} was decent, though I've had spicier versions elsewhere.` },
  { rating: 5, text: (dish) => `Ordered the ${dish} for the whole table, everyone cleaned their plates.` },
]

function seedForItem(item, index) {
  const first = TEMPLATES[index % TEMPLATES.length]
  const second = TEMPLATES[(index + 3) % TEMPLATES.length]
  return [
    { id: `${item.id}-seed-1`, name: REVIEWERS[index % REVIEWERS.length], rating: first.rating, comment: first.text(item.name) },
    { id: `${item.id}-seed-2`, name: REVIEWERS[(index + 5) % REVIEWERS.length], rating: second.rating, comment: second.text(item.name) },
  ]
}

export function getSeedReviews(menuItems) {
  const map = {}
  menuItems.forEach((item, index) => {
    map[item.id] = seedForItem(item, index)
  })
  return map
}
