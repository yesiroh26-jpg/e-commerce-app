import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useOrderType } from '../context/OrderTypeContext'

const ORDER_TYPES = [
  { value: 'pickup', label: 'Pickup' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'dine-in', label: 'Dine-in' },
]

function OrderTypeSwitcher() {
  const { orderType, setOrderType } = useOrderType()
  const [open, setOpen] = useState(false)
  const [tableInput, setTableInput] = useState(orderType.tableNumber || '')

  const currentLabel = ORDER_TYPES.find((o) => o.value === orderType.type)?.label || 'Order type'

  function selectType(value) {
    setOrderType({ type: value })
    if (value !== 'dine-in') setOpen(false)
  }

  function confirmTable(e) {
    e.preventDefault()
    setOrderType({ tableNumber: tableInput })
    setOpen(false)
  }

  return (
    <div className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="border border-accent px-3 py-1.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
      >
        {currentLabel}
        {orderType.type === 'dine-in' && orderType.tableNumber ? ` · Table ${orderType.tableNumber}` : ''}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-30 mt-2 w-56 border border-border bg-white p-3 shadow-lg">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">Order type</p>
          <div className="flex flex-col gap-1">
            {ORDER_TYPES.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectType(opt.value)}
                className={`px-3 py-2 text-left text-sm border transition-colors ${
                  orderType.type === opt.value
                    ? 'bg-accent border-accent text-white'
                    : 'border-border text-ink hover:border-accent hover:text-accent'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {orderType.type === 'dine-in' && (
            <form onSubmit={confirmTable} className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Table number"
                value={tableInput}
                onChange={(e) => setTableInput(e.target.value)}
                className="flex-1 border border-border px-2 py-1.5 text-sm outline-none focus:border-accent"
              />
              <button type="submit" className="bg-ink px-3 py-1.5 text-sm font-medium text-white hover:bg-accent transition-colors">
                Set
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-20">
      {/* Top utility bar */}
      <div className="bg-accent text-white font-bold">
        <div className="mx-auto flex max-w-6xlxl items-center justify-between px-4 py-1.5 text-xs md:px-6">
          <div className="flex items-center gap-4 ">
            <span>7:30 AM – 9:30 PM</span>
            <span className="hidden sm:inline">+234 901 084 8063</span>
          </div>
          <span className="hidden sm:inline">Dine-in, pickup & delivery available</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="font-display text-2xl font-semibold shrink-0">
            Naija Table
          </Link>

          <nav className="ml-2 hidden flex-1 items-center gap-6 text-sm font-medium md:flex">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/menu" className="hover:text-accent transition-colors">Menu</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <OrderTypeSwitcher />
            <Link to="/cart" className="relative border border-border p-2 hover:border-accent hover:text-accent transition-colors" aria-label="View order">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
