import { Shield, Globe, Zap, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Advanced controls',
    desc: 'Set spend limits, merchant locks, and real-time rules for every card.'
  },
  {
    icon: Globe,
    title: 'Global-ready',
    desc: 'Multi-currency support with best‑in‑class FX rates and coverage.'
  },
  {
    icon: Zap,
    title: 'Instant issuance',
    desc: 'Create virtual cards in seconds with webhooks for lifecycle events.'
  },
  {
    icon: Wallet,
    title: 'Seamless wallets',
    desc: 'Tokenized payments for e‑commerce, billing, and recurring subscriptions.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Everything you need to run modern cards
          </h2>
          <p className="mt-4 text-white/70">
            Built for finance teams, operators, and developers — with enterprise‑grade security.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 p-2 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
