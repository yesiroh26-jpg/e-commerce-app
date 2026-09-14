import { createContext, useContext, useEffect, useState } from 'react'

const OrderTypeContext = createContext(null)
const KEY = 'haul_order_type'

// Shape: { type: 'pickup' | 'delivery' | 'dine-in', tableNumber?: string, address?: string }
const DEFAULT_STATE = { type: null, tableNumber: '', address: '' }

export function OrderTypeProvider({ children }) {
  const [orderType, setOrderTypeState] = useState(() => {
    try {
      return { ...DEFAULT_STATE, ...JSON.parse(localStorage.getItem(KEY)) }
    } catch {
      return DEFAULT_STATE
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(orderType))
  }, [orderType])

  function setOrderType(next) {
    setOrderTypeState((prev) => ({ ...prev, ...next }))
  }

  return (
    <OrderTypeContext.Provider value={{ orderType, setOrderType }}>
      {children}
    </OrderTypeContext.Provider>
  )
}

export function useOrderType() {
  const ctx = useContext(OrderTypeContext)
  if (!ctx) throw new Error('useOrderType must be used within OrderTypeProvider')
  return ctx
}
