import React from 'react'
import { ProductCard } from './ProductCard'

interface Product {
  id: string
  brand: string
  productImage: string
  productName: string
  productDescription: string
  colors: {
    backgroundColor: string
    titleColor: string
    textColor: string
    informativeColor: string
  }
  icons?: Record<string, boolean>
  images?: {
    id: string
    altText: string
    mediaItemUrl: string
  }[]
}

interface ProductListProps {
  products: Product[]
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          brand={product.brand}
          productImage={product.productImage}
          productName={product.productName}
          productDescription={product.productDescription}
          colors={product.colors}
          icons={product.icons}
          images={product.images}
        />
      ))}
    </div>
  )
}
