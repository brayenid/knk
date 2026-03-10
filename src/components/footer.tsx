import data from '@/data/base.json'
import { Instagram, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030305] pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-500/5 blur-[120px] pointer-events-none" />

      <div className="container-sm relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="inline-block mb-6">
              <img src={data.site.logo} alt={data.site.name} className="h-12 w-auto" />
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-8">{data.site.description}</p>
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${data.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-rose-500 hover:border-rose-500 transition-all"
                aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              {/* Add more social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h3 className="text-white font-display font-bold mb-6">Tautan</h3>
            <ul className="space-y-4">
              {data.nav.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-gray-400 hover:text-rose-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-white font-display font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{data.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                <span>+{data.contact.whatsapp}</span>
              </li>
              {data.contact.email && (
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                  <span>{data.contact.email}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-sm text-gray-500">
          <p>{data.footer.copyright}</p>
          <p className="flex items-center gap-1">
            {data.footer.credit.split('❤')[0]}
            <span className="text-rose-500 animate-pulse">❤</span>
            {data.footer.credit.split('❤')[1]}
          </p>
        </div>
      </div>
    </footer>
  )
}
