import React from 'react'
import Image from 'next/image'

interface Brand {
  name: string
  image: string
  width: string
  height: string
}

interface ProductBrandProps {
  brandName: string
}

export const ProductBrand: React.FC<ProductBrandProps> = ({ brandName }) => {
  const brands: Brand[] = [
    { name: 'wella', image: '/brands/wella.png', width: '100', height: '54' },
    {
      name: 'wellapro',
      image: '/brands/wellapro.png',
      width: '100',
      height: '62'
    },
    {
      name: 'sebastian',
      image: '/brands/sebastian-black.png',
      width: '200',
      height: '35'
    },
    {
      name: 'sebastian-white',
      image: '/brands/sebastian-white.png',
      width: '200',
      height: '35'
    },
    {
      name: 'sebastian-new',
      image: '/brands/sebastian-25-black.png',
      width: '200',
      height: '40'
    },
    {
      name: 'sebastian-new-white',
      image: '/brands/sebastian-25-white.png',
      width: '200',
      height: '40'
    },
    { name: 'nioxin', image: '/brands/nioxin.png', width: '200', height: '42' },
    {
      name: 'clinical',
      image: '/brands/clinical-black.png',
      width: '200',
      height: '80'
    },
    {
      name: 'clinical-white',
      image: '/brands/clinical-white.png',
      width: '200',
      height: '80'
    },
    { name: 'wedo', image: '/brands/wedo.png', width: '150', height: '53' },
    { name: 'opi', image: '/brands/opi.png', width: '150', height: '46' }
  ]

  const filteredBrand = brands.filter((brand) => brand.name === brandName)

  return (
    <>
      {filteredBrand.map((brand) => (
        <Image
          className="brand-logo"
          alt="Brand Logo"
          key={brand.image}
          src={brand.image}
          width={parseInt(brand.width)}
          height={parseInt(brand.height)}
          priority
        />
      ))}
    </>
  )
}
