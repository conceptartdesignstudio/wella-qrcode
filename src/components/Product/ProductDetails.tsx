import React from 'react'
import { ProductBrand } from './ProductBrand'
import { ProductContent } from './ProductContent'
// import { Slider } from './Slider'
import { Icons } from './Icons'

interface ProductDetailsProps {
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

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  brand,
  productImage,
  productName,
  productDescription,
  colors,
  icons
}) => {
  return (
    <div className="product-details max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Marca */}
      <div className="flex justify-center mb-6">
        <ProductBrand brandName={brand} />
      </div>

      {/* Conteúdo Principal */}
      <ProductContent
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        colors={colors}
      />

      {/* Ícones */}
      {icons && (
        <div className="mt-6">
          <Icons colors={colors} icons={icons} />
        </div>
      )}
    </div>
  )
}
