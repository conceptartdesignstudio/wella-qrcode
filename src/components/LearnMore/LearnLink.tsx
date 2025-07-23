import Link from 'next/link'
import { Plus } from '../Icons/Others/Plus'

interface LearnLinkProps {
  isGroup?: boolean
  selectedColor: string
  link: string
}

export const LearnLink = ({ isGroup, selectedColor, link }: LearnLinkProps) => {
  const linkClasses = `flex items-center space-x-2 text-xs uppercase font-bold mt-2`

  return (
    <div className={linkClasses}>
      <Plus selectedColor={selectedColor} />
      <span>
        <Link href={link} target="_blank" rel="noreferrer">
          <span style={{ color: selectedColor }}>
            {isGroup ? 'Lista completa' : 'Saiba mais'}
          </span>
        </Link>
      </span>
    </div>
  )
}
