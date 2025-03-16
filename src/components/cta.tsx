import { MdiWhatsapp } from './icons/wa'
import data from '@/data/base.json'

export default function CTA() {
  return (
    <div
      className="bg-[url(/ctabgred.svg)] bg-cover min-h-screen flex items-center justify-center text-center w-full flex-col text-white gap-8"
      id="cta">
      <div className="mb-6 gap-4 p-8">
        <h2 className="text-3xl md:text-5xl uppercase tracking-widest font-bold mb-6">Hubungi Kami</h2>
        <div className="space-y-7">
          <a
            href="https://wa.me/6282251428140?text=Halo, saya ingin bertanya perihal jasa KNK."
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-lg items-center gap-4 justify-center border rounded-xl p-2 md:p-3 transition-all hover:bg-rose-800 hover:bg-opacity-20">
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
