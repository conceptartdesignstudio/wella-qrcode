import Image from 'next/image'
import { GroupColors } from '@/features/group/types'
import { LearnLink } from '@/components/LearnMore/LearnLink'

interface GroupProductProps {
  productImage?: string
  productName: string
  productResume: string
  productLink: string
  colors: GroupColors
}

export const GroupProduct = ({
  productImage,
  productName,
  productResume,
  productLink,
  colors
}: GroupProductProps) => {
  return (
    <div
      className="flex px-2 py-4 gap-2"
      style={{ backgroundColor: colors.backgroundColor }}>
      {productImage && (
        <Image
          src={productImage}
          alt={productName}
          width={150}
          height={150}
          priority
          className="h-auto w-auto max-w-full object-contain"
        />
      )}
      <div className="flex-1 flex flex-col justify-start">
        <h2
          className="text-left font-semibold"
          style={{ color: colors.titleColor }}
          dangerouslySetInnerHTML={{ __html: productName }}
        />
        <h4 className="mt-2 mb-1 text-sm" style={{ color: colors.textColor }}>
          INGREDIENTES (PORTUGUÊS):
        </h4>
        <div
          className="text-sm leading-4"
          style={{ color: colors.textColor }}
          dangerouslySetInnerHTML={{ __html: productResume }}
        />
        <LearnLink
          isGroup={true}
          selectedColor={colors.linkColor}
          link={productLink}
        />
      </div>
    </div>
  )
}
