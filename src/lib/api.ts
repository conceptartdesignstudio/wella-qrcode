import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
})

api.interceptors.request.use((config) => {
  return config
})

export const endpoint = `${process.env.NEXT_PUBLIC_WELLA_ENDPOINT}`

export async function getProductPage(slug: string) {
  try {
    const response = await api.get(`wp/v2/${endpoint}?slug=${slug}`)
    return response.data?.[0] || null
  } catch (error) {
    console.error('Erro em getProductPage:', error)
    throw error
  }
}

export const getAllProducts = async (perPage: number, page: number) => {
  try {
    const { data } = await api.get(`custom/v1/wella-products`, {
      params: {
        per_page: perPage,
        page: page
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const productsWithImages = data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      slug: product.slug,
      productImage: product.product_image || product.product_image_url || null
    }))

    return {
      page: data.page,
      perPage: data.per_page,
      total: data.total,
      totalPages: data.total_pages,
      products: productsWithImages
    }
  } catch (error) {
    console.error(error)
    return {
      page: page,
      perPage: perPage,
      total: 0,
      totalPages: 0,
      products: []
    }
  }
}
