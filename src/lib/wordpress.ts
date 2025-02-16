import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

if (!baseUrl) throw new Error('Wordpress URL is not set')

export const getAllProducts = async (perPage: number, page: number) => {
  try {
    const { data: products } = await axios.get(
      `${baseUrl}/wp-json/wp/v2/wella_professional`,
      {
        params: {
          per_page: perPage,
          page: page,
          orderby: 'date',
          order: 'desc',
          _embed: true
        }
      }
    )

    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        let productImageUrl = null

        if (product.acf?.product_image) {
          try {
            const { data: media } = await axios.get(
              `${baseUrl}/wp-json/wp/v2/media/${product.acf.product_image}`
            )
            productImageUrl = media.source_url
          } catch (error) {
            console.warn(
              `Failed to fetch image for product ${product.id}`,
              error
            )
          }
        }

        return {
          id: product.id,
          title: product.title.rendered,
          slug: product.slug,
          productImage: productImageUrl
        }
      })
    )

    return productsWithImages
  } catch (error) {
    console.error(error)
    return []
  }
}
