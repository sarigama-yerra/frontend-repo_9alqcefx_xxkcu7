import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="py-12 text-center text-white/50 text-sm">© 2025 FlowCard. All rights reserved.</footer>
    </div>
  )
}

export default App
