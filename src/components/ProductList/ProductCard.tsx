import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  image: string
  title: string
  slug: string
}

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function ProductCard({ id, image, title, slug }: ProductCardProps) {
  return (
    <div className="bg-white rounded-sm shadow-none hover:shadow-lg transition p-6 flex flex-col items-center w-64">
      {/* Imagem */}
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={id === 1}
        />
      </div>

      {/* Contêiner para título e espaçamento flexível */}
      <div className="flex flex-col flex-grow justify-between w-full">
        <h3
          className="text-center text-[#29241f] font-semibold text-[16px] line-clamp-2 capitalize mb-4"
          dangerouslySetInnerHTML={{ __html: toTitleCase(title) }}></h3>

        {/* Botão Ver Detalhes */}
        <Link
          href={`/${slug}`}
          className="productBtn border border-[#E41E46] text-[#E41E46] px-8 py-3 text-sm font-medium hover:bg-[#E41E46] hover:text-white transition rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg uppercase tracking-wide w-full text-center">
          Detalhes
        </Link>
      </div>
    </div>
  )
}
