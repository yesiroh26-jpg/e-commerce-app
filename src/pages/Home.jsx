import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuItems, categories } from '../data/menu'
import { useOrderType } from '../context/OrderTypeContext'
import { useReviews } from '../context/ReviewsContext'
import { formatNaira } from '../utils/currency'

const ORDER_TYPES = [
  { value: 'pickup', label: 'Pickup' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'dine-in', label: 'Dine-in' },
]

const BRANCHES = [
  { name: 'Lekki Branch', address: '14 Admiralty Way, Lekki Phase 1, Lagos', phone: '+234 800 123 4567' },
  { name: 'Wuse Branch', address: '22 Aminu Kano Crescent, Wuse 2, Abuja', phone: '+234 800 123 4568' },
  { name: 'GRA Branch', address: '5 Ikwerre Road, GRA, Port Harcourt', phone: '+234 800 123 4569' },
]

export default function Home() {
  const { orderType, setOrderType } = useOrderType()
  const { getReviews } = useReviews()
  const [tableInput, setTableInput] = useState(orderType.tableNumber || '')
  const [activeTab, setActiveTab] = useState(categories[0])

  const popular = menuItems.filter((m) => m.popular)
  const featured = popular[0]
  const tabItems = menuItems.filter((m) => m.category === activeTab).slice(0, 5)

  // Pull a couple of real testimonials from a few different popular dishes,
  // rather than writing separate fake homepage testimonials.
  const testimonialSources = popular.slice(1, 4)
  const testimonials = testimonialSources.map((item) => ({ item, review: getReviews(item.id)[0] }))

  function selectType(value) {
    setOrderType({ type: value })
  }

  function confirmTable(e) {
    e.preventDefault()
    setOrderType({ tableNumber: tableInput })
  }

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_1fr] md:px-6 md:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Enjoy our</p>
            <h1 className="mt-1 font-display text-4xl leading-[1.05] md:text-5xl">
              Nigerian dishes,
              <br />
              made fresh daily.
            </h1>
            <p className="mt-4 max-w-sm text-ink-muted">
              From Jollof to Egusi, Suya to Zobo — plus pizza, steak, and other familiar
              favorites for everyone at the table. Order for pickup, delivery, or dine-in.
            </p>

            <div className="mt-6 flex gap-2">
              {ORDER_TYPES.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectType(opt.value)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
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
              <form onSubmit={confirmTable} className="mt-4 flex max-w-xs gap-2">
                <input
                  type="text"
                  placeholder="Table number"
                  value={tableInput}
                  onChange={(e) => setTableInput(e.target.value)}
                  className="flex-1 border border-border px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <button type="submit" className="bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-accent transition-colors">
                  Set
                </button>
              </form>
            )}
            {orderType.type === 'dine-in' && orderType.tableNumber && (
              <p className="mt-2 text-sm text-trust">Ordering for table {orderType.tableNumber}</p>
            )}

            <Link
              to="/menu"
              className="mt-6 inline-block w-fit bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              View full menu
            </Link>
          </div>

          {featured && (
            <Link to={`/menu/${featured.id}`} className="group block border border-border">
              <div className="relative overflow-hidden">
                <span className="absolute left-0 top-0 z-10 bg-sale px-2 py-1 text-xs font-bold text-ink">
                  Chef's pick
                </span>
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm">{featured.name}</p>
                <p className="mt-1 text-xl font-bold text-ink">{formatNaira(featured.price)}</p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Popular dishes rail */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-accent">Fan favorites</h2>
        <p className="text-center font-display text-2xl">Popular Dishes</p>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {popular.map((item) => (
            <Link key={item.id} to={`/menu/${item.id}`} className="group shrink-0 text-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-border sm:h-24 sm:w-24">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="mt-2 w-20 text-xs text-ink-muted group-hover:text-accent sm:w-24">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Different tribes highlight */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Rich & authentic</p>
            <h2 className="mt-1 font-display text-3xl">Nigerian at heart, open to everyone</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Our menu brings together Yoruba, Igbo, Hausa, Efik and Edo dishes side by side —
              from Ofada Rice and Amala to Nkwobi, Miyan Kuka, and Banga Soup — alongside pizza,
              pasta, grills, and other familiar favorites, so there's something for every guest.
            </p>
            <Link to="/menu" className="mt-4 inline-block w-fit text-sm font-semibold text-accent hover:underline">
              Explore the full menu →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {popular.slice(0, 4).map((item) => (
              <img key={item.id} src={item.image} alt={item.name} className="aspect-square w-full object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Menu preview tabs */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-accent">Specials</p>
        <h2 className="text-center font-display text-2xl">Check out our menu</h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === cat ? 'bg-accent text-white' : 'text-ink-muted hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-4 divide-y divide-border">
          {tabItems.map((item) => (
            <Link key={item.id} to={`/menu/${item.id}`} className="flex items-center justify-between gap-4 py-3 group">
              <div>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">{item.name}</p>
                <p className="text-xs text-ink-muted">{item.description}</p>
              </div>
              <span className="whitespace-nowrap text-sm font-bold text-ink">{formatNaira(item.price)}</span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link to={`/menu?category=${encodeURIComponent(activeTab)}`} className="inline-block bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
            View all menu
          </Link>
        </div>
      </section>

      {/* Testimonials — pulled from real review data */}
      {testimonials.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-accent">Testimonials</p>
            <h2 className="text-center font-display text-2xl">Reviews from our guests</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {testimonials.map(({ item, review }) => review && (
                <div key={item.id} className="border border-border p-4 text-center">
                  <p className="text-sale">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                  <p className="mt-2 text-sm text-ink-muted">"{review.comment}"</p>
                  <p className="mt-3 text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-ink-muted">on {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Branches */}
      <section className="bg-ink py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center font-display text-2xl">Our Branches</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="text-center">
                <p className="font-semibold">{branch.name}</p>
                <p className="mt-1 text-sm text-white/70">{branch.address}</p>
                <p className="mt-1 text-sm text-white/70">{branch.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
