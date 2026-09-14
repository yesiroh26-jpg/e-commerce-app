import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../utils/currency'

export default function MenuItemCard({ item }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      <Link to={`/menu/${item.id}`} className="relative block overflow-hidden bg-white border border-border">
        {item.popular && (
          <span className="absolute left-0 top-0 z-10 whitespace-nowrap bg-sale px-2 py-1 text-xs font-bold text-ink">
            Popular
          </span>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <Link to={`/menu/${item.id}`} className="mt-2 text-sm font-medium text-ink hover:text-accent transition-colors">
        {item.name}
      </Link>

      <p className="mt-0.5 text-xs text-ink-muted">{item.region}</p>
      <p className="mt-0.5 line-clamp-2 text-xs text-ink-muted">{item.description}</p>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-lg font-bold text-ink">{formatNaira(item.price)}</span>
        <span className="text-xs text-ink-muted">
          <span className="text-sale">★</span> {item.rating}
        </span>
      </div>

      <button
        onClick={() => addItem(item)}
        className="mt-2 border border-accent py-1.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
      >
        Add to order
      </button>
    </div>
  )
}
