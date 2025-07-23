import React from 'react'
import { ProductBrand } from './ProductBrand'
import { ProductContent } from './ProductContent'
import { Icons } from './Icons'

interface ProductCardProps {
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

export const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  productImage,
  productName,
  productDescription,
  colors,
  icons
}) => {
  return (
    <div className="product-card p-4 bg-white rounded-lg shadow-md max-w-[500px]">
      {/* Logo da Marca */}
      <div className="flex justify-center mb-4">
        <ProductBrand brandName={brand} />
      </div>

      {/* Conteúdo do Produto */}
      <ProductContent
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        colors={colors}
      />

      {/* Ícones */}
      {icons && (
        <div className="mt-4">
          <Icons colors={colors} icons={icons} />
        </div>
      )}
    </div>
  )
}
