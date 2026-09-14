import { createContext, useContext, useEffect, useState } from 'react'
import { menuItems } from '../data/menu'
import { getSeedReviews } from '../data/reviews'

const ReviewsContext = createContext(null)
const KEY = 'haul_user_reviews'
const SEED = getSeedReviews(menuItems)

export function ReviewsProvider({ children }) {
  // Shape: { [itemId]: [{ id, name, rating, comment }] } — only reviews people
  // add through the site live here; the seed set above is not duplicated into
  // storage, just merged in at read time.
  const [userReviews, setUserReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(userReviews))
  }, [userReviews])

  function getReviews(itemId) {
    const seeded = SEED[itemId] || []
    const added = userReviews[itemId] || []
    return [...added, ...seeded]
  }

  function addReview(itemId, { name, rating, comment }) {
    const review = { id: `${itemId}-${Date.now()}`, name: name.trim() || 'Anonymous', rating, comment: comment.trim() }
    setUserReviews((prev) => ({
      ...prev,
      [itemId]: [review, ...(prev[itemId] || [])],
    }))
  }

  return (
    <ReviewsContext.Provider value={{ getReviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  )
}

export function useReviews() {
  const ctx = useContext(ReviewsContext)
  if (!ctx) throw new Error('useReviews must be used within ReviewsProvider')
  return ctx
}
