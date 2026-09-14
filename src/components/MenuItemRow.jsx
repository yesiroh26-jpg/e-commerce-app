import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../utils/currency'

// Horizontal list-style card (image + details side by side) — matches the
// reference template's menu-list layout. Shows description, region, rating,
// price, and add-to-cart.
export default function MenuItemRow({ item }) {
  const { addItem } = useCart()

  return (
    <div className="flex gap-4 border border-border bg-white p-3">
      <Link to={`/menu/${item.id}`} className="relative block h-32 w-32 shrink-0 overflow-hidden sm:h-40 sm:w-40">
        {item.popular && (
          <span className="absolute left-0 top-0 z-10 whitespace-nowrap bg-sale px-1.5 py-0.5 text-[10px] font-bold text-ink">
            Popular
          </span>
        )}
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link to={`/menu/${item.id}`} className="text-sm font-semibold hover:text-accent transition-colors">
              {item.name}
            </Link>
            <p className="text-xs text-ink-muted">{item.region}</p>
          </div>
          <span className="whitespace-nowrap text-sm font-bold text-ink">{formatNaira(item.price)}</span>
        </div>

        <p className="mt-1 line-clamp-2 text-xs text-ink-muted">{item.description}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs text-ink-muted"><span className="text-sale">★</span> {item.rating}</span>
          <button
            onClick={() => addItem(item)}
            className="border border-accent px-3 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-white transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
