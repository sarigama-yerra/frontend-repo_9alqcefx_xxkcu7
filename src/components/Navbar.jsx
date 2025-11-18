import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/10 border border-white/15 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 shadow-inner" />
              <span className="text-white/90 font-semibold tracking-tight text-lg">FlowCard</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-white/80 hover:text-white transition">Sign in</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition">Get started</button>
            </div>

            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 text-white/80">
              <div className="flex flex-col gap-4">
                <a href="#features" className="hover:text-white transition">Features</a>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
                <button className="mt-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow-sm">Get started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
