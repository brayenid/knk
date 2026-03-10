import { motion } from 'motion/react'
import { CalendarCheck2, Ticket, Monitor, Globe, Camera, Music, Printer, SatelliteDish } from 'lucide-react'
import data from '@/data/base.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'calendar-check': CalendarCheck2,
  ticket: Ticket,
  monitor: Monitor,
  globe: Globe,
  camera: Camera,
  music: Music,
  printer: Printer,
  'satellite-dish': SatelliteDish
}

interface ServiceItem {
  icon: string
  title: string
  description: string
  color: string
}

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const Icon = iconMap[item.icon] || Monitor
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      className="glass-card p-6 group">
      {/* Icon box */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 service-icon-${item.color} transition-all duration-300`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

// Marquee ticker with service names
function ServiceMarquee() {
  const items = [...data.services, ...data.services]
  return (
    <div className="marquee-wrapper py-4 border-y border-white/5 my-20">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-3 text-gray-600 font-medium shrink-0">
            <span className="text-rose-500">✦</span>
            <span>{s.title}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(225,29,72,0.07) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.06) 0%, transparent 60%)'
        }}
      />

      <div className="container-sm relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="section-label">Apa yang Kami Tawarkan</span>
          <h2 className="section-title text-white mt-3">
            Layanan <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Berbagai solusi kreatif dan teknologi untuk mendukung pertumbuhan bisnis dan kegiatan Anda.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.services.map((service, i) => (
            <ServiceCard key={i} item={service} index={i} />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <ServiceMarquee />
    </section>
  )
}
