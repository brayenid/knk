export default function Header() {
  return (
    <header className="bg-[url(/headerbg.svg)] bg-cover min-h-screen flex items-center justify-center text-center w-full flex-col text-white gap-8">
      <div className="">
        <div className="md:w-96 w-64 mx-auto">
          <img
            src="/knk.png"
            alt="knk"
            className="drop-shadow-[0_0_0px_rgba(244,63,94,0.8)] hover:drop-shadow-[0_0_80px_rgba(244,63,94,0.5)] transition-all"
          />
        </div>
      </div>
      <ul className="flex gap-4 tracking-widest uppercase flex-wrap justify-center text-xs md:text-base p-4 text-gray-200 items-center flex-col md:flex-row">
        <li>
          <a href="#about">Tentang</a>
        </li>
        <div className="divider"></div>
        <li>
          <a href="#works">Yang Kami Kerjakan</a>
        </li>
        <div className="divider"></div>
        <li>
          <a href="#cta">Kontak</a>
        </li>
      </ul>
    </header>
  )
}
