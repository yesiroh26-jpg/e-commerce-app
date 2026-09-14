import MenuItemCard from './MenuItemCard'

export default function MenuGrid({ items }) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-border py-16 text-center text-ink-muted">
        <p className="font-display text-lg text-ink">Nothing here yet</p>
        <p className="mt-1 text-sm">Try a different search term or clear your filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
