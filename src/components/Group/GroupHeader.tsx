import Image from 'next/image'
import { GroupColors } from '@/features/group/types'

interface GroupHeaderProps {
  groupImage?: string
  groupName?: string
  colors: GroupColors
}

export const GroupHeader = ({ groupImage, colors }: GroupHeaderProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      style={{ backgroundColor: colors.backgroundColor }}>
      <div className="text-center max-w-4xl mx-4">
        {groupImage && (
          <Image
            src={groupImage}
            alt="Product Image"
            width={150}
            height={150}
            priority
            className="mb-4"
          />
        )}
      </div>
    </div>
  )
}
