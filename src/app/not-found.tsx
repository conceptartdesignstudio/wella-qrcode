import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      {/* Fundo com transparência */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/404-bg.png')",
          backgroundSize: '1200 1200px'
        }}></div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <h1 className="text-[8rem] font-bold text-[#E41E46]">404</h1>
        <p className="text-lg text-zinc-700 mt-2">
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-[#E41E46] text-white font-semibold px-6 py-3 rounded hover:bg-[#c51b3d] transition">
          Voltar para Home
        </Link>
      </div>
    </main>
  )
}
