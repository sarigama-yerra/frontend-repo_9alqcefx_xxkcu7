export default function CTA() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-teal-400/20 p-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Issue your first virtual card today</h3>
            <p className="mt-4 text-white/80">Join finance teams moving faster with automated controls and real‑time visibility.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-950 font-medium shadow-sm hover:shadow-md transition">Get started</button>
              <button className="px-5 py-3 rounded-xl border border-white/25 text-white/90 hover:bg-white/10 transition">Talk to sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
