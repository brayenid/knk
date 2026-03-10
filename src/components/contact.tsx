import { motion } from 'motion/react'
import { MessageCircle, Instagram, MapPin, ArrowRight } from 'lucide-react'
import data from '@/data/base.json'

export default function Contact() {
  const waLink = `https://wa.me/${data.contact.whatsapp}?text=${encodeURIComponent(data.contact.whatsappText)}`
  const igLink = `https://instagram.com/${data.contact.instagram}`

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(225,29,72,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.07) 0%, transparent 60%)'
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
        }}
      />

      <div className="container-sm relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <span className="section-label">{data.contact.subtitle}</span>
            <h2 className="section-title text-white mt-3">{data.contact.title}</h2>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">{data.contact.body}</p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-12 space-y-4 text-left">
            {/* WhatsApp */}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact-link group">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">WhatsApp</div>
                <div className="text-white font-semibold mt-0.5">Kirim Pesan Sekarang</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Instagram */}
            <a href={igLink} target="_blank" rel="noopener noreferrer" className="contact-link group">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Instagram</div>
                <div className="text-white font-semibold mt-0.5">@{data.contact.instagram}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Address */}
            <div className="contact-link">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-rose-400" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Alamat</div>
                <div className="text-gray-300 text-sm mt-0.5 leading-relaxed">{data.contact.address}</div>
              </div>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex">
              <MessageCircle className="w-5 h-5" />
              Mulai Diskusi via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
