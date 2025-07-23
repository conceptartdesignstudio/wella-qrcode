import React from 'react'
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
import { EacSVG } from '../Icons/Materials/EAC'
import { TrashCanSVG } from '../Icons/Materials/TrashCan'
import { PeadSVG } from '../Icons/Materials/PEAD'
import { DozeMSVG } from '../Icons/Materials/DozeM'
import { DescartavelSVG } from '../Icons/Materials/Descartavel'
import { BookSVG } from '../Icons/Materials/Book'
import { RetornavelSVG } from '../Icons/Materials/Retornavel'
import { ReciclagemSVG } from '../Icons/Materials/Reciclage'

interface Colors {
  informativeColor: string
}

interface IconsProps {
  colors: Colors
  icons: Record<string, boolean>
}

export const Icons: React.FC<IconsProps> = ({ colors, icons }) => {
  return (
    <div className="productIcons">
      <ul>
        {icons.eac && (
          <li key="eac">
            <EacSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.reciclagem && (
          <li key="reciclagem">
            <ReciclagemSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.retornavel && (
          <li key="retornavel">
            <RetornavelSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.book && (
          <li key="book">
            <BookSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.descartavel && (
          <li key="descartavel">
            <DescartavelSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.dozeM && (
          <li key="12m">
            <DozeMSVG selectedColor={colors.informativeColor} />
          </li>
        )}
        {icons.lixeira && (
          <li key="lixeira">
            <TrashCanSVG selectedColor={colors.informativeColor} />
          </li>
        )}
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
        {icons.pead && (
          <li key="pead">
            <PeadSVG selectedColor={colors.informativeColor} />
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
