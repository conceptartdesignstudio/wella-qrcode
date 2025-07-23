import Image from 'next/image'

export const Header = () => {
  const image = '/wella.png'
  return (
    <div className="relative text-center flex flex-col">
      <div className="relative h-20 mb-5 w-full">
        <Image
          src={image}
          alt="Wella Logo"
          fill
          sizes="200px"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 className="font-medium text-2xl uppercase text-neutral-400">
        Bem-vindo ao mundo de Wella
      </h1>
    </div>
  )
}
