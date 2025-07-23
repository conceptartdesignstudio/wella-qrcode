export interface GroupColors {
  backgroundColor: string
  linkColor: string
  textColor: string
  titleColor: string
}

export interface GroupData {
  id: number
  title: string
  slug: string
  image?: string
  pageTitle: string
  colors: GroupColors
  relatedProducts: number[]
}
