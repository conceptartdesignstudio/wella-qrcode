import React from 'react'
import { Icons } from '@/components/Product/Icons'
import { LearnLink } from '@/components/LearnMore/LearnLink'

interface LearnMore {
  heading?: string
  link?: string
  text?: string
  video?: string
}

interface DisplayRules {
  learnLink: boolean
  learnVideo: boolean
  imageAsSlide: boolean
  imageAsBlock: boolean
  title: boolean
  text: boolean
  video: boolean
  mediaPosition: string
  videoPosition: string
}

interface Colors {
  backgroundColor: string
  titleColor: string
  textColor: string
  moreColor: string
}

interface ImageItem {
  id: string
  altText: string
  mediaItemUrl: string
}

interface ProductSectionProps {
  displayRules: DisplayRules
  learnMore: LearnMore
  colors: Colors
  icons: Record<string, boolean>
  slideImages?: ImageItem[]
  singleImage?: string
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  displayRules,
  learnMore,
  colors,
  icons
}) => {
  return (
    <>
      <section
        className="productSection"
        style={{ backgroundColor: colors.backgroundColor }}>
        {displayRules.learnLink && (
          <LearnLink selectedColor={colors.moreColor} link={learnMore.link} />
        )}

        <Icons icons={icons} colors={colors} key="informative-icons" />
      </section>
    </>
  )
}
