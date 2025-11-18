import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Now accepting beta signups
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            The modern way to issue and manage virtual cards
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            A minimalist fintech platform for digital banking, e‑commerce, and subscription payments. Automate spend controls, get real‑time visibility, and scale globally.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-950 font-medium shadow-sm hover:shadow-md transition">
              Start free trial
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/25 text-white/90 hover:bg-white/10 transition">
              View live demo
            </button>
          </div>

          <div className="mt-10 text-white/60 text-sm">
            No credit card required • Cancel anytime • PCI compliant
          </div>
        </div>
      </div>
    </section>
  )
}
