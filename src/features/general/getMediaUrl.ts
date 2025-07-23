import { api } from '@/lib/api'

export async function getMediaUrl(mediaId?: number): Promise<string | null> {
  if (!mediaId) return null

  try {
    const { data } = await api.get(`/media/${mediaId}`)
    return data?.source_url || null
  } catch (error) {
    console.error(`Erro ao buscar mídia com ID ${mediaId}:`, error)
    return null
  }
}
