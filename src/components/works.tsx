import { CalendarCheck2, CameraIcon, ComputerIcon, MusicIcon, Network, Ticket } from 'lucide-react'
import { JSX } from 'react'

interface CardProps {
  title: string
  description: string
  icon: JSX.Element
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-gray-900 p-4 space-y-8 rounded-xl min-w-[80%] sm:min-w-0">
      <div className="flex w-full justify-center bg-slate-800 p-8 text-slate-400">{icon}</div>
      <div className="">
        <h3
          className="mb-4 font-bold text-lg
         md:text-xl">
          {title}
        </h3>
        <article className="font-light">{description}</article>
      </div>
    </div>
  )
}

export default function Works() {
  const data: CardProps[] = [
    {
      title: 'Event Organizer (EO)',
      description: 'Menjadi rekan anda dalam membangun sebuah acara yang sesuai dengan apa yang anda inginkan',
      icon: <CalendarCheck2 className="w-24 h-24" />
    },
    {
      title: 'Pengadaan Piranti Keras',
      description: 'Menyediakan kebutuhan usaha hingga kantor anda.',
      icon: <ComputerIcon className="w-24 h-24" />
    },
    {
      title: 'Pengadaan Piranti Lunak',
      description: 'Mengembangkan perangkat lunak seperti website untuk usaha dan kantor anda.',
      icon: <Network className="w-24 h-24" />
    },
    {
      title: 'Fotografi dan Videografi',
      description: 'Menjadi rekan anda dalam menangkap momen terbaik dalam kegiatan.',
      icon: <CameraIcon className="w-24 h-24" />
    },
    {
      title: 'Produksi Musik',
      description: 'Usaha anda membutuhkan lagu seperti jingle? anda di tempat yang tepat.',
      icon: <MusicIcon className="w-24 h-24" />
    },
    {
      title: 'Ticketing',
      description:
        'Ingin menyelenggarakan acara namun tidak ingin direpotkan dengan penjualan tiket, online-kan saja bersama kami',
      icon: <Ticket className="w-24 h-24" />
    },
    {
      title: 'Percetakan Digital',
      description: 'Ingin mencetak sesuatu, mungkin anda bisa menghubungi kami.',
      icon: <CalendarCheck2 className="w-24 h-24" />
    }
  ]
  return (
    <div
      className="bg-[url(/ctabg.svg)] bg-cover md:min-h-screen flex text-center w-full flex-col text-white gap-8"
      id="works">
      <div className="container !py-16">
        <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-bold mb-8">Yang Kami Kerjakan</h2>
        <main className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 xl:grid-cols-3 text-left scrollbar-hidden">
          {data.map((d, i) => (
            <Card title={d.title} description={d.description} icon={d.icon} key={i} />
          ))}
        </main>
      </div>
    </div>
  )
}
