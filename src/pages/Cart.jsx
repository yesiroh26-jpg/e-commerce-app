import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useOrderType } from '../context/OrderTypeContext'
import { formatNaira } from '../utils/currency'

const ORDER_TYPES = [
  { value: 'pickup', label: 'Pickup' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'dine-in', label: 'Dine-in' },
]

const DELIVERY_FEE = 1000

function generateOrderNumber() {
  return `NG-${Math.floor(1000 + Math.random() * 9000)}`
}

export default function Cart() {
  const { items, setQty, removeItem, subtotal, clearCart } = useCart()
  const { orderType, setOrderType } = useOrderType()

  const [tableInput, setTableInput] = useState(orderType.tableNumber || '')
  const [addressInput, setAddressInput] = useState(orderType.address || '')
  const [confirmedOrder, setConfirmedOrder] = useState(null)
  const [error, setError] = useState('')

  const deliveryFee = orderType.type === 'delivery' ? DELIVERY_FEE : 0
  const total = subtotal + deliveryFee

  function canPlaceOrder() {
    if (items.length === 0) return false
    if (!orderType.type) return false
    if (orderType.type === 'dine-in' && !tableInput.trim()) return false
    if (orderType.type === 'delivery' && !addressInput.trim()) return false
    return true
  }

  function handlePlaceOrder() {
    if (!orderType.type) {
      setError('Choose pickup, delivery, or dine-in first.')
      return
    }
    if (orderType.type === 'dine-in' && !tableInput.trim()) {
      setError('Enter your table number.')
      return
    }
    if (orderType.type === 'delivery' && !addressInput.trim()) {
      setError('Enter a delivery address.')
      return
    }
    setError('')
    setOrderType({ tableNumber: tableInput, address: addressInput })

    setConfirmedOrder({
      number: generateOrderNumber(),
      type: orderType.type,
      tableNumber: tableInput,
      address: addressInput,
      items,
      total,
    })
    clearCart()
  }

  if (confirmedOrder) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center md:px-6">
        <p className="font-display text-2xl">Order placed! 🎉</p>
        <p className="mt-2 text-ink-muted">
          Order <span className="font-semibold text-ink">{confirmedOrder.number}</span>
          {confirmedOrder.type === 'dine-in' && ` — Table ${confirmedOrder.tableNumber}`}
          {confirmedOrder.type === 'delivery' && ` — delivering to ${confirmedOrder.address}`}
          {confirmedOrder.type === 'pickup' && ' — ready for pickup'}
        </p>

        <div className="mt-6 border border-border p-4 text-left">
          {confirmedOrder.items.map((item) => (
            <div key={item.id} className="flex justify-between py-1 text-sm">
              <span>{item.qty}× {item.name}</span>
              <span>{formatNaira(item.price * item.qty)}</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between border-t border-border pt-2 text-sm font-semibold">
            <span>Total</span>
            <span>{formatNaira(confirmedOrder.total)}</span>
          </div>
        </div>

        <Link
          to="/menu"
          className="mt-6 inline-block bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
        >
          Order more
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      <h1 className="text-2xl">Your order</h1>

      {items.length === 0 ? (
        <div className="mt-8 border border-dashed border-border py-16 text-center text-ink-muted">
          <p className="font-display text-lg text-ink">Your order is empty</p>
          <Link to="/menu" className="mt-2 inline-block text-accent hover:underline">
            Browse the menu
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_320px]">
          {/* Items */}
          <div className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 shrink-0 object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  {item.notes && <p className="mt-0.5 text-xs text-ink-muted">Note: {item.notes}</p>}
                  <p className="mt-1 text-sm font-bold text-ink">{formatNaira(item.price)}</p>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="px-2 py-1 hover:bg-bg"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="px-2 py-1 hover:bg-bg"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-xs text-ink-muted hover:text-accent">
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-sm font-semibold">{formatNaira(item.price * item.qty)}</p>
              </div>
            ))}
          </div>

          {/* Summary + order type */}
          <div>
            <h2 className="text-sm font-semibold">Order type</h2>
            <div className="mt-2 flex gap-2">
              {ORDER_TYPES.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setOrderType({ type: opt.value })}
                  className={`flex-1 border px-2 py-2 text-xs font-medium transition-colors ${
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
              <input
                type="text"
                placeholder="Table number"
                value={tableInput}
                onChange={(e) => setTableInput(e.target.value)}
                className="mt-3 w-full border border-border px-3 py-2 text-sm outline-none focus:border-accent"
              />
            )}
            {orderType.type === 'delivery' && (
              <input
                type="text"
                placeholder="Delivery address"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                className="mt-3 w-full border border-border px-3 py-2 text-sm outline-none focus:border-accent"
              />
            )}

            <div className="mt-6 space-y-1 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-ink-muted">
                <span>Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-ink-muted">
                  <span>Delivery fee</span>
                  <span>{formatNaira(deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between pt-1 text-base font-bold text-ink">
                <span>Total</span>
                <span>{formatNaira(total)}</span>
              </div>
            </div>

            {error && <p className="mt-3 text-sm text-accent">{error}</p>}

            <button
              onClick={handlePlaceOrder}
              disabled={!canPlaceOrder()}
              className="mt-4 w-full bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
