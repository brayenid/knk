import { cn } from '@/lib/utils'
import { MdiWhatsapp } from './icons/wa'
import data from '@/data/base.json'

export default function CTA() {
  return (
    <div
      className="bg-gray-900 min-h-screen flex items-center justify-center text-center w-full flex-col text-white gap-8 relative"
      id="cta">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
          'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-900"></div>
      <div className="mb-6 gap-4 p-8 relative">
        <h2 className="text-3xl md:text-5xl uppercase tracking-widest font-bold mb-6">Hubungi Kami</h2>
        <div className="space-y-7">
          <a
            href="https://wa.me/6282251428140?text=Halo, saya ingin bertanya perihal jasa KNK."
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-lg items-center gap-4 justify-center border rounded-xl p-2 md:p-3 transition-all hover:bg-gray-950 hover:bg-opacity-20">
            <MdiWhatsapp className="w-5 h-5" /> Pesan WA
          </a>
          <div className="opacity-50 font-light">atau</div>
          <p className="leading-loose">
            <span className="font-extralight">Temui kami di :</span> {data.page.address}
          </p>
        </div>
      </div>
    </div>
  )
}
