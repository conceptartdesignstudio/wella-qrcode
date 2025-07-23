import React from 'react'
import styles from '@/styles/Product.module.css'
import { PetSVG } from '@/components/Icons/Materials/Pet'
import { OthersSVG } from '@/components/Icons/Materials/Others'
import { IronSVG } from '@/components/Icons/Materials/Iron'
import { GlassSVG } from '@/components/Icons/Materials/Glass'
import { PaperSVG } from '@/components/Icons/Materials/Paper'
import { PebdSVG } from '@/components/Icons/Materials/PEBD'
import { AluminumSVG } from '@/components/Icons/Materials/Aluminum'
import { PpTampaSVG } from '@/components/Icons/Materials/PPTampa'
import { PpPoteSVG } from '@/components/Icons/Materials/PPPote'
import { PpPoteTampaSVG } from '@/components/Icons/Materials/PPPoteTampa'

interface Colors {
  informativeColor: string
}

interface IconsProps {
  colors: Colors
  icons: Record<string, boolean>
}

export const Icons: React.FC<IconsProps> = ({ colors, icons }) => {
  return (
    <div className={styles.productIcons}>
      <ul>
        {/* Todos os ícones originais */}
        {icons.eac && (
          <li key="eac">
            {/* SVG do eac */}
            <svg
              version="1.1"
              viewBox="0 0 425.2 425.2"
              width="35px"
              height="35px"
              preserveAspectRatio="xMidYMid meet">
              <path
                fill={colors.informativeColor}
                d="M132.1,211.2h20.8v20.8h-20.8v62.5h20.8v20.8h-41.7V127.8h41.7v20.9h-20.8V211.2z M215.5,232.1v83.4h20.9
              V127.8h-62.5v187.6h20.8v-83.4H215.5z M215.5,211.2h-20.8v-62.5h20.8V211.2z M278,148.7h20.8v-20.9h-41.7v187.6h41.7v-20.8H278
              V148.7z"
              />
            </svg>
          </li>
        )}

        {/* Restante dos ícones ... */}
        {icons.aluminum && (
          <li key="aluminum">
            <AluminumSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.glass && (
          <li key="glass">
            <GlassSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.iron && (
          <li key="iron">
            <IronSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.paper && (
          <li key="paper">
            <PaperSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.pet && (
          <li key="pet">
            <PetSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.pebd && (
          <li key="pebd">
            <PebdSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.ppTampa && (
          <li key="ppTampa">
            <PpTampaSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.ppPote && (
          <li key="ppPote">
            <PpPoteSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.ppPoteTampa && (
          <li key="ppPoteTampa">
            <PpPoteTampaSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.others && (
          <li key="others">
            <OthersSVG selectedColor={colors.informativeColor} />
          </li>
        )}
      </ul>
    </div>
  )
}
