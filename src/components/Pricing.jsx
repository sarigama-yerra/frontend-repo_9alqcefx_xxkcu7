export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-white/70">Start free, then scale with usage-based plans.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            name: 'Starter', price: 'Free', perks: ['Up to 5 virtual cards', 'Basic controls', 'Community support']
          }, {
            name: 'Growth', price: '$79/mo', perks: ['Unlimited cards', 'Advanced controls', 'Priority support']
          }, {
            name: 'Scale', price: 'Custom', perks: ['Dedicated limits', 'Enterprise features', 'White‑glove onboarding']
          }].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white/70 text-sm">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                {t.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white text-slate-950 py-3 font-medium">Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
