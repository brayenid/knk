import data from '@/data/base.json'

interface CardProps {
  title: string
  description: string
  img: string
}

function Card({ title, description, img }: CardProps) {
  return (
    <div className=" border border-gray-300 text-gray-800 p-4 space-y-4 rounded-xl min-w-[80%] sm:min-w-0">
      <div className="rounded-xl overflow-hidden">
        <img src={img} alt={title} title={title} />
      </div>
      <div className="text-center">
        <h3
          className="mb-2 text-lg
        uppercase tracking-widest">
          {title}
        </h3>
        <article className="font-light text-sm">{description}</article>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="bg-gray-200 md:min-h-screen flex text-center w-full flex-col text-gray-900 gap-8" id="works">
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
