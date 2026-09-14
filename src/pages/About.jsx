import { Link } from 'react-router-dom'

const TEAM = [
  { name: 'Chef Sophie', role: 'Head Chef' },
  { name: 'Chef iyiola', role: 'Sous Chef' },
  { name: 'Amaka Bello', role: 'Front of House' },
]

export default function About() {
  return (
    <div>
      <section className="bg-ink py-16 text-center text-white">
        <h1 className="font-display text-4xl">About Us</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
          Read our story, how we started, and the team behind the food.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <h2 className="text-center font-display text-2xl">Our Story</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
          We started with one goal: bring the real taste of home-cooked Nigerian food to more
          tables, whether you're eating in, picking up on your way home, or having it delivered.
          Every dish on our menu is made fresh, drawing from recipes across Yoruba, Igbo, Hausa,
          Efik and Edo kitchens — because Nigerian food was never just one thing. And because
          every table is different, we've added pizza, pasta, grills, and other familiar
          favorites too — so no one has to compromise on what they're in the mood for.
        </p>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Tasty and crunchy</p>
          <h2 className="mt-1 font-display text-2xl">Our Chef</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
            Our kitchen is led by chefs who grew up cooking these dishes at home first,
            restaurants second — that's where the flavor comes from.
          </p>
          <Link to="/menu" className="mt-4 inline-block bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
            View our full menu
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <h2 className="text-center font-display text-2xl">Our Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {TEAM.map((person) => (
            <div key={person.name} className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full border border-border bg-bg" />
              <p className="mt-3 text-sm font-semibold">{person.name}</p>
              <p className="text-xs text-ink-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
