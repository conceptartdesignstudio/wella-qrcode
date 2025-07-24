import { api } from '@/lib/api'

export const endpoint = `${process.env.NEXT_PUBLIC_WELLA_ENDPOINT}`

async function getProductData(productId: number, groupSlug: string) {
  const { data: product } = await api.get(`wp/v2/${endpoint}/${productId}`)

  return {
    id: product.id,
    title: product.title.rendered,
    ingredients: product.acf?.ingredients || '',
    slug: product.slug,
    productUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/grupo/${groupSlug}/${product.slug}`,
    image: product.acf?.product_group_image || product.acf?.product_image_url
  }
}

export async function getGroupData(slug: string) {
  const { data } = await api.get(
    `wp/v2/grupos?slug=${encodeURIComponent(slug)}`
  )
  if (!Array.isArray(data) || !data.length) {
    console.warn('Grupo não encontrado:', data)
    throw new Error('Grupo não encontrado')
  }

  const g = data[0]
  const relatedProducts = await Promise.all(
    (g.acf?.group_related_products || []).map((id: number) =>
      getProductData(id, slug)
    )
  )

  return {
    id: g.id,
    title: g.title.rendered,
    slug: g.slug,
    image: g.acf?.group_image_url,
    pageTitle: g.acf?.group_title || g.title.rendered,
    colors: {
      backgroundColor: g.acf?.group_background_color || '#fff',
      linkColor: g.acf?.group_link_color || '#000',
      textColor: g.acf?.group_text_color || '#000',
      titleColor: g.acf?.group_title_color || '#000'
    },
    relatedProducts
  }
}
