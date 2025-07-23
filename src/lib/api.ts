import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
})

api.interceptors.request.use((config) => {
  return config
})

export async function getProductPage(slug: string) {
  try {
    const response = await api.get(`wella_professional?slug=${slug}`)
    return response.data?.[0] || null
  } catch (error) {
    console.error('Erro em getProductPage:', error)
    throw error
  }
}

export const getAllProducts = async (perPage: number, page: number) => {
  try {
    const { data: products } = await api.get(`/wella_professional`, {
      params: {
        per_page: perPage,
        page: page,
        orderby: 'date',
        order: 'desc',
        _embed: true
      }
    })

    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        let productImageUrl = null

        if (product.acf?.product_image) {
          try {
            const { data: media } = await api.get(
              `/media/${product.acf.product_image}`
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
