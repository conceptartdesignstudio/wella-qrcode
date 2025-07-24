import { getProductPage } from '@/lib/api'
import { ProductContent } from '@/components/Product/ProductContent'
import { ProductSection } from '@/components/Product/ProductSection'
import { ProductBrand } from '@/components/Product/ProductBrand'
import { Facebook } from '@/components/Icons/Social/Facebook'
import { Instagram } from '@/components/Icons/Social/Instagram'
import { Youtube } from '@/components/Icons/Social/Youtube'
import { transformProductDataFromRest } from '@/utils/transformProduct'
import Head from 'next/head'
import { notFound } from 'next/navigation'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params

  const data = await getProductPage(slug)
  const product = await transformProductDataFromRest(data)

  return {
    title: product.title
      ? `${product.title} - Wella Professional`
      : 'Wella Professional',
    icons: {
      icon: '/wella.ico'
    }
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default async function SingleGroupProductPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params

  const data = await getProductPage(slug)
  if (!data) {
    notFound()
  }

  const product = await transformProductDataFromRest(data)
  const isLoading = false

  return (
    <div>
      {isLoading ? (
        <div className={`flex justify-center items-center`}>
          <div className="w-[200px]">
            {/* <LottieView animationData={loadingData} /> */}
          </div>
        </div>
      ) : (
        <div
          className="productWrapper"
          style={{ backgroundColor: product.colors.backgroundColor }}>
          <Head>
            <title>
              {product.title ? product.title : 'Wella Professional'}
            </title>
            <link rel="icon" href="/wella.ico" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="productContent">
            <ProductContent
              productName={product.content.productName}
              productImage={product.productImg}
              productDescription={product.content.ingredients}
              colors={product.colors}
            />
            <ProductSection
              displayRules={product.displayRules}
              learnMore={product.content.learnMore}
              colors={product.colors}
              singleImage={product.singleImage}
              slideImages={product.slideImages}
              icons={product.icons}
              key="ProductSection"
            />
            <section
              className="productFooter"
              style={{ backgroundColor: product.colors.backgroundColor }}>
              <ProductBrand
                brandName={product.brandName}
                key={product.brandName}
              />
              <div className="socialMedias">
                <div className="wrapper">
                  {product.displayRules.instagram && (
                    <Instagram
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                  {product.displayRules.facebook && (
                    <Facebook
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                  {product.displayRules.youtube && (
                    <Youtube
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}
