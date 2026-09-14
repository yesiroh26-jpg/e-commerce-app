import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MenuItemRow from '../components/MenuItemRow'
import { menuItems, categories } from '../data/menu'

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlQuery = searchParams.get('q') || ''
  const activeCategory = searchParams.get('category') || ''
  const [searchInput, setSearchInput] = useState(urlQuery)

  function setCategory(cat) {
    const next = new URLSearchParams(searchParams)
    if (cat) next.set('category', cat)
    else next.delete('category')
    setSearchParams(next)
  }

  function handleSearch(e) {
    e.preventDefault()
    const next = new URLSearchParams(searchParams)
    if (searchInput.trim()) next.set('q', searchInput.trim())
    else next.delete('q')
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    let list = menuItems
    if (urlQuery) {
      const q = urlQuery.toLowerCase()
      list = list.filter((m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q))
    }
    if (activeCategory) {
      list = list.filter((m) => m.category === activeCategory)
    }
    return list
  }, [urlQuery, activeCategory])

  return (
    <div>
      {/* Hero banner */}
      <section className="bg-ink py-16 text-center text-white">
        <h1 className="font-display text-4xl">Our Menu</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
          Nigerian classics from across the country — pick a category or search for something specific.
        </p>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        {/* Search */}
        <form onSubmit={handleSearch} className="mx-auto flex max-w-md gap-2">
          <input
            type="text"
            placeholder="Search the menu"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 border-2 border-accent px-4 py-2 text-sm outline-none"
          />
          <button type="submit" className="bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
            Go
          </button>
        </form>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          <button
            onClick={() => setCategory('')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === '' ? 'bg-accent text-white' : 'text-ink-muted hover:text-accent'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat ? 'bg-accent text-white' : 'text-ink-muted hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-ink-muted">{filtered.length} items</p>

        {/* Item list */}
        {filtered.length === 0 ? (
          <div className="mt-4 border border-dashed border-border py-16 text-center text-ink-muted">
            <p className="font-display text-lg text-ink">Nothing here yet</p>
            <p className="mt-1 text-sm">Try a different search term or category.</p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {filtered.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
