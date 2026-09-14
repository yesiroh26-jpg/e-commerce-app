import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { OrderTypeProvider } from './context/OrderTypeContext'
import { ReviewsProvider } from './context/ReviewsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderTypeProvider>
        <CartProvider>
          <ReviewsProvider>
            <App />
          </ReviewsProvider>
        </CartProvider>
      </OrderTypeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
