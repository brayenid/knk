import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Shield, Zap, MapPin } from 'lucide-react'
import data from '@/data/base.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  zap: Zap,
  'map-pin': MapPin
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: '-80px' }
  }
}

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null)
  const inView = useInView(imgRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="container-sm relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div ref={imgRef} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative rounded-3xl overflow-hidden">
              <img src={data.about.image} alt="Karya Nusantara Kreatif" className="w-full h-[420px] object-cover" />
              {/* Image overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(225,29,72,0.15) 0%, transparent 60%)' }}
              />
            </motion.div>

            {/* Floating badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl">
              <div className="font-display text-3xl font-bold text-rose-500">5+</div>
              <div className="text-sm text-gray-400">Tahun Berpengalaman</div>
            </motion.div> */}

            {/* Decorative ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-rose-500/20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-rose-500/10"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0)}>
              <span className="section-label">{data.about.subtitle}</span>
              <h2 className="section-title mt-3 text-white">{data.about.title}</h2>
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="text-gray-400 text-lg leading-relaxed">
              {data.about.body}
            </motion.p>

            {/* Highlights */}
            <motion.div {...fadeUp(0.2)} className="space-y-4">
              {data.about.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] || Shield
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-rose-400" />
                    </div>
                    <span className="text-gray-200 font-medium">{h.label}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.3)} className="flex items-center gap-4 pt-2">
              <a
                href={`https://instagram.com/${data.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2.5">
                Instagram
              </a>
              <a
                href={`https://wa.me/${data.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2.5">
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
