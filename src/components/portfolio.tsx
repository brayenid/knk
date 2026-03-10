import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink } from 'lucide-react'
import data from '@/data/base.json'

interface PortfolioItem {
  title: string
  category: string
  description: string
  img: string
  tags: string[]
}

// Get unique categories
const allCategories = ['Semua', ...Array.from(new Set(data.portfolio.map((p) => p.category)))]

function PortfolioCard({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="portfolio-card"
      onClick={onClick}>
      <img src={item.img} alt={item.title} />
      <div className="portfolio-overlay">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1 block">{item.category}</span>
          <h3 className="font-display font-bold text-white text-lg leading-tight">{item.title}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.tags.map((t, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Modal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 w-full max-w-2xl glass-card overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.8) 0%, transparent 60%)' }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="section-label text-xs">{item.category}</span>
          <h3 className="font-display text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
          <p className="text-gray-400 leading-relaxed">{item.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((t, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all"
          aria-label="Close">
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  const filtered =
    activeCategory === 'Semua' ? data.portfolio : data.portfolio.filter((p) => p.category === activeCategory)

  return (
    <>
      <section id="portfolio" className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 60%)' }}
        />

        <div className="container-sm relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <span className="section-label">Karya Kami</span>
            <h2 className="section-title text-white mt-3">
              Portofolio <span className="gradient-text">Terpilih</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Sebagian dari proyek dan karya yang telah kami selesaikan bersama klien.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <PortfolioCard key={item.title + item.img} item={item} index={i} onClick={() => setSelected(item)} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View more hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <ExternalLink className="w-4 h-4" />
              Klik kartu untuk melihat detail
            </span>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>{selected && <Modal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </>
  )
}
