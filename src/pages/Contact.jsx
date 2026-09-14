export default function Contact() {
  return (
    <div>
      <section className="bg-ink py-16 text-center text-white">
        <h1 className="font-display text-4xl">Contact Us</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
          Questions, catering requests, or feedback — reach out any time.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-accent">Address</h2>
            <p className="mt-2 text-sm text-ink-muted">14 Admiralty Way, Lekki Phase 1, Lagos</p>

            <h2 className="mt-6 text-lg font-bold text-accent">Phone</h2>
            <p className="mt-2 text-sm text-ink-muted">+234 901 084 8063</p>

            <h2 className="mt-6 text-lg font-bold text-accent">Email</h2>
            <p className="mt-2 text-sm text-ink-muted">hello@naijatable.com</p>

            <h2 className="mt-6 text-lg font-bold text-accent">Working Hours</h2>
            <p className="mt-2 text-sm text-ink-muted">7:30 AM – 9:30 PM, every day</p>
          </div>

          <div className="flex aspect-square items-center justify-center border border-border bg-white text-sm text-ink-muted">
            Map placeholder — swap for a real embedded map when you have an address.
          </div>
        </div>
      </section>
    </div>
  )
}
