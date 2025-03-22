import data from '@/data/base.json'
import { motion } from 'motion/react'

interface CardProps {
  title: string
  description: string
  img: string
}

function Card({ title, description, img }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.96 }}
      className="bg-gradient-to-bl from-gray-900 to-slate-800 border border-gray-700 text-gray-100 p-4 space-y-4 rounded-xl min-w-[80%] sm:min-w-0">
      <div className="rounded-xl overflow-hidden min-h-96">
        <img src={img} alt={title} title={title} />
      </div>
      <div className="text-center">
        <h3
          className="mb-2 text-base sm:text-lg
        uppercase tracking-widest font-semibold">
          {title}
        </h3>
        <article className="font-light text-sm">{description}</article>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <div className="bg-gray-900 md:min-h-screen flex text-center w-full flex-col text-gray-100 gap-8" id="gallery">
      <div className="container !py-16 !pr-0 sm:!pr-8">
        <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-bold mb-8">Galeri</h2>
        <main className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 xl:grid-cols-3 text-left scrollbar-hidden">
          {data.page.gallery.map((d, i) => (
            <Card title={d.title} description={d.description} img={d.img} key={i} />
          ))}
        </main>
      </div>
    </div>
  )
}
