import { api } from '@/lib/api'
import { getMediaUrl } from '@/features/general/getMediaUrl'

async function getProductData(productId: number, groupSlug: string) {
  const { data: product } = await api.get(`/wella_professional/${productId}`)

  return {
    id: product.id,
    title: product.title.rendered,
    ingredients: product.acf?.ingredients || '',
    slug: product.slug,
    productUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/grupo/${groupSlug}/${product.slug}`,
    image:
      (await getMediaUrl(product.acf?.product_group_image)) ||
      (await getMediaUrl(product.acf?.product_image))
  }
}

export async function getGroupData(slug: string) {
  const { data } = await api.get(`/grupos?slug=${encodeURIComponent(slug)}`)
  if (!Array.isArray(data) || !data.length) {
    console.warn('Grupo não encontrado:', data)
    throw new Error('Grupo não encontrado')
  }

  const g = data[0]
  const groupImageUrl = await getMediaUrl(g.acf.group_image)
  const relatedProducts = await Promise.all(
    (g.acf?.group_related_products || []).map((id: number) =>
      getProductData(id, slug)
    )
  )

  return {
    id: g.id,
    title: g.title.rendered,
    slug: g.slug,
    image: groupImageUrl,
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
