import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getMenuItemById, menuItems } from '../data/menu'
import { useCart } from '../context/CartContext'
import { useReviews } from '../context/ReviewsContext'
import MenuGrid from '../components/MenuGrid'
import { formatNaira } from '../utils/currency'

export default function MenuItemDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = getMenuItemById(id)
  const { addItem } = useCart()
  const { getReviews, addReview } = useReviews()
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [notes, setNotes] = useState('')
  const [justAdded, setJustAdded] = useState(false)
  const [reviewName, setReviewName] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState('')

  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <p className="font-display text-xl">We couldn't find that item.</p>
        <Link to="/menu" className="mt-3 inline-block text-accent hover:underline">
          Back to menu
        </Link>
      </div>
    )
  }

  const related = menuItems.filter((m) => m.category === item.category && m.id !== item.id).slice(0, 4)
  const reviews = getReviews(item.id)

  function handleAdd() {
    addItem({ ...item, notes: notes.trim() || undefined }, qty)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1800)
  }

  function handleReviewSubmit(e) {
    e.preventDefault()
    if (!reviewComment.trim()) return
    addReview(item.id, { name: reviewName, rating: reviewRating, comment: reviewComment })
    setReviewName('')
    setReviewRating(5)
    setReviewComment('')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <button onClick={() => navigate(-1)} className="mb-6 text-sm text-ink-muted hover:text-ink">
        ← Back
      </button>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden border border-border">
            {item.popular && (
              <span className="absolute left-0 top-0 z-10 whitespace-nowrap bg-sale px-2 py-1 text-xs font-bold text-ink">
                Popular
              </span>
            )}
            <img src={item.images[activeImage]} alt={item.name} className="aspect-square w-full object-cover" />
          </div>
          {item.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {item.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 border ${i === activeImage ? 'border-accent' : 'border-border'}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-muted">{item.category}</p>
          <h1 className="mt-1 font-display text-2xl">{item.name}</h1>
          <p className="mt-0.5 text-sm text-ink-muted">{item.region}</p>

          <div className="mt-2 text-sm text-ink-muted">
            <span className="text-sale">★</span> {item.rating} from {item.reviews} reviews
          </div>

          <div className="mt-4 text-3xl font-bold text-ink">{formatNaira(item.price)}</div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">{item.description}</p>

          <label className="mt-6 block text-sm font-semibold">Special instructions</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. no onions, extra sauce on the side"
            rows={2}
            className="mt-1 w-full max-w-md border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg hover:bg-bg"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 text-lg hover:bg-bg"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              {justAdded ? 'Added ✓' : 'Add to order'}
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16 max-w-2xl">
        <h2 className="mb-4 text-2xl">Reviews</h2>

        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{r.name}</span>
                <span className="text-sm text-sale">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{r.comment}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleReviewSubmit} className="mt-6 border border-border p-4">
          <h3 className="text-sm font-semibold">Leave a review</h3>
          <input
            type="text"
            placeholder="Your name (optional)"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            className="mt-3 w-full border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-ink-muted">Rating:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                onClick={() => setReviewRating(n)}
                className={`text-lg ${n <= reviewRating ? 'text-sale' : 'text-border'}`}
                aria-label={`${n} star${n > 1 ? 's' : ''}`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            placeholder="What did you think?"
            rows={3}
            required
            className="mt-3 w-full border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="mt-3 bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Submit review
          </button>
        </form>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-4 text-2xl">You might also like</h2>
          <MenuGrid items={related} />
        </section>
      )}
    </div>
  )
}
