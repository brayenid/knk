import data from '@/data/base.json'
import { MdiInstagram } from './icons/ig'
import { MdiWhatsapp } from './icons/wa'

export default function About() {
  return (
    <div className="bg-rose-950 min-h-screen text-white flex flex-col justify-center items-center" id="about">
      <div className="container space-y-8">
        <div className="flex mb-6 gap-4">
          <h2 className="text-2xl md:text-5xl uppercase tracking-widest font-bold">Tentang</h2>
          <div className="flex w-full items-center">
            <div className="w-full h-2 bg-white"></div>
          </div>
        </div>
        <article className="font-extralight text-lg md:text-xl leading-loose">{data.page.about}</article>
        <ul className="flex gap-6 justify-end">
          <li>
            <a
              href="https://instagram.com/karyanusantarakreatif"
              target="_blank"
              className="p-4"
              rel="noopener noreferrer">
              <MdiInstagram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/6282251428140" target="_blank" className="p-4" rel="noopener noreferrer">
              <MdiWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
