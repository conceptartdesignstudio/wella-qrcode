'use client'

import React from 'react'
import { getAllProducts } from '@/lib/api'
import Image from 'next/image'

function Home() {
  interface Product {
    id: number
    productImage: string
    title: string
  }

  const [products, setProducts] = React.useState<Product[]>([])
  const [page, setPage] = React.useState(1)
  const perPage = 8

  React.useEffect(() => {
    getAllProducts(perPage, page).then((data) => setProducts(data))
  }, [page])

  return (
    <section>
      <div className="py-4">
        <h2 className="text-center text-2xl text-zinc-100">Hello, World!</h2>

        <div className="flex justify-center flex-wrap py-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="max-w-sm">
              {product.productImage && (
                <Image
                  src={product.productImage}
                  alt={product.title}
                  width={500}
                  height={500}
                  priority={product.id === products[0].id}
                />
              )}
              <h3 className="text-center text-lg mt-2">{product.title}</h3>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-gray-600 px-4 py-2 rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </button>
          <span className="text-white text-lg">Page {page}</span>
          <button
            className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-400 transition-colors"
            onClick={() => setPage((prev) => prev + 1)}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
