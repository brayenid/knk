import { motion, useDragControls } from 'motion/react'

export default function Header() {
  const dragControls = useDragControls()
  return (
    <header className="bg-gray-900 min-h-screen flex items-center justify-center text-center w-full flex-col text-white gap-8 relative">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute w-64 h-64">
        <div className="absolute w-36 h-36 rounded-full bg-red-500 opacity-80 blur-3xl top-5 left-8"></div>
        <div className="absolute w-36 h-36 rounded-full bg-blue-500 opacity-80 blur-3xl bottom-5 right-8"></div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{ top: 5, right: 5, bottom: 0, left: 5 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragElastic={0.2}
        whileDrag={{ cursor: 'grabbing', scale: 0.97 }}
        dragControls={dragControls}
        className="md:w-96 w-64 mx-auto relative">
        <img
          src="/knk.png"
          alt="knk"
          draggable={false}
          className="drop-shadow-[0_0_0px_rgba(244,63,94,0.8)] hover:drop-shadow-[0_0_80px_rgba(244,63,94,0.5)] transition-all cursor-grab"
        />
      </motion.div>
      <ul className="flex gap-4 tracking-widest uppercase flex-wrap justify-center text-xs md:text-base p-4 text-gray-200 items-center flex-col sm:flex-row">
        <li>
          <a className="styled" href="#about">
            Tentang
          </a>
        </li>
        <div className="divider"></div>
        <li>
          <a className="styled" href="#works">
            Yang Kami Kerjakan
          </a>
        </li>
        <div className="divider"></div>
        <li>
          <a className="styled" href="#gallery">
            Galeri
          </a>
        </li>
        <div className="divider"></div>
        <li>
          <a className="styled" href="#cta">
            Kontak
          </a>
        </li>
      </ul>
    </header>
  )
}
