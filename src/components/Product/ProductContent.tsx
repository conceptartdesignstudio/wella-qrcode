import React from 'react'
import Image from 'next/image'

interface ProductContentProps {
  productImage: string
  productName: string
  productDescription: string
  colors: {
    backgroundColor: string
    titleColor: string
    textColor: string
  }
}

export const ProductContent: React.FC<ProductContentProps> = ({
  productImage,
  productName,
  productDescription,
  colors
}) => {
  return (
    <section
      className="productContainer"
      style={{ backgroundColor: colors.backgroundColor }}>
      <article className="productInfos">
        {productImage && (
          <Image
            src={productImage}
            alt="Product Image"
            width={150}
            height={150}
            priority
          />
        )}
        <h1
          className="productName"
          style={{ color: colors.titleColor }}
          dangerouslySetInnerHTML={{ __html: productName }}
        />
        <h4 style={{ color: colors.textColor }}>Ingredientes (português):</h4>
        <div
          className="productParagraph"
          style={{ color: colors.textColor }}
          dangerouslySetInnerHTML={{ __html: productDescription }}
        />
      </article>
    </section>
  )
}
