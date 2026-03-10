import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import data from '@/data/base.json'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 60% 0%, rgba(225,29,72,0.12) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(124,58,237,0.1) 0%, transparent 60%), #050508'
      }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Animated falling lines */}
      <div className="hero-lines">
        <div className="hero-line" />
        <div className="hero-line" />
        <div className="hero-line" />
        <div className="hero-line" />
      </div>

      {/* Glow Orbs */}
      <div className="orb orb-rose w-[500px] h-[500px] top-[-100px] right-[-150px] opacity-60" />
      <div className="orb orb-violet w-[400px] h-[400px] bottom-[-80px] left-[-100px] opacity-50" />
      <div className="orb orb-sky w-[300px] h-[300px] top-[40%] left-[10%] opacity-30" />

      {/* Content */}
      <div className="container-sm relative z-10 text-center pt-24">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {data.hero.badge}
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
          {data.hero.headline}
          <br />
          <span className="gradient-text">{data.hero.headlineAccent}</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
          {data.hero.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href={data.hero.cta.primary.href}
            onClick={(e) => {
              e.preventDefault()
              handleScroll(data.hero.cta.primary.href)
            }}
            className="btn-primary text-base">
            {data.hero.cta.primary.label}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={data.hero.cta.secondary.href}
            onClick={(e) => {
              e.preventDefault()
              handleScroll(data.hero.cta.secondary.href)
            }}
            className="btn-outline text-base">
            {data.hero.cta.secondary.label}
          </a>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-12 mt-16 pt-12 border-t border-white/5">
          {data.hero.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll Hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
        aria-label="Scroll down">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  )
}
