'use client'

import React from 'react'
import Image from 'next/image'
import { getAllProducts } from '@/lib/api'
import { ProductCard } from '@/components/ProductList/ProductCard'
import { LoadingSpinner } from '@/components/LoadingSpinner'

function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = React.useState<any[]>([])
  const [page, setPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  const perPage = 8

  const fetchProducts = async (currentPage: number) => {
    setLoading(true)
    const data = await getAllProducts(perPage, currentPage)
    setProducts(data.products || [])
    setTotalPages(data.totalPages || 1)
    setLoading(false)
  }

  React.useEffect(() => {
    fetchProducts(page)
  }, [page])

  return (
    <section className="bg-[#f9f9f9] h-full py-10">
      <div className="max-w-6xl mx-auto px-2 pb-10">
        {/* Wella Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/wella-logo-black.png"
            alt="Wella Logo"
            width={180}
            height={60}
            priority
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-[#E41E46] mb-8 tracking-wide">
          Produtos
        </h2>

        {loading ? (
          <div className="flex justify-center py-10">
            <LoadingSpinner size="h-12 w-12" color="border-red-500" />
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.productImage}
                  title={product.title}
                  slug={product.slug}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                Nenhum produto disponível.
              </p>
            )}
          </div>
        )}

        {/* Paginação */}
        <div className="flex justify-center gap-4 mt-10">
          {/* Ir para a primeira página */}
          <button
            className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
            disabled={page === 1 || loading}
            onClick={() => setPage(1)}>
            Primeira
          </button>

          {/* Página anterior */}
          <button
            className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
            disabled={page === 1 || loading}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
            Anterior
          </button>

          {/* Indicador de página */}
          <span className="text-gray-800 text-lg self-center">
            Página {page} de {totalPages}
          </span>

          {/* Próxima página */}
          <button
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-500 transition disabled:opacity-50"
            disabled={page >= totalPages || loading}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>
            Próxima
          </button>

          {/* Ir para a última página */}
          <button
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-500 transition disabled:opacity-50"
            disabled={page >= totalPages || loading}
            onClick={() => setPage(totalPages)}>
            Última
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
