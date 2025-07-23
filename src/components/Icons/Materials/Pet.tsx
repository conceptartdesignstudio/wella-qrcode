import { IconProps } from '../IconProps'

export const PetSVG = ({
  selectedColor,
  width = 35,
  height = 35
}: IconProps) => {
  return (
    <svg
      version="1.1"
      id="pet"
      viewBox="0 0 300 300"
      xmlSpace="preserve"
      width={width}
      height={height}>
      <g>
        <defs>
          <rect id="SVGID_1_" x="0.12" y="-0.47" width="300" height="300" />
        </defs>
        <clipPath id="clipPath-pet">
          <use href="#SVGID_1_" />
        </clipPath>

        <path
          stroke={selectedColor}
          fill="none"
          d="M167.71,206.43h60.11c17.74,0,28.93-19.07,20.3-34.56L207.9,99.74
             M80.52,128.06l-24.42,43.81c-8.64,15.49,2.56,34.56,20.3,34.56
             H118 M186.24,60.89L172.4,36.06c-8.86-15.9-31.73-15.9-40.6,0l-27.58,49.48"
        />

        <polygon
          fill={selectedColor}
          points="167.56,206.43 167.41,182.76 139.38,206.61 167.71,230.09"
        />
        <polygon
          fill={selectedColor}
          points="78.72,131.15 100.55,142.41 92.13,105.16 56.9,119.89"
        />
        <polygon
          fill={selectedColor}
          points="182.24,56.09 160.59,68.63 197.17,81.87 203.89,43.55"
        />

        <text
          fill={selectedColor}
          transform="matrix(1 0 0 1 110.3895 281.1809)">
          PE
        </text>
        <text
          fill={selectedColor}
          transform="matrix(1 0 0 1 165.9989 281.1809)">
          T
        </text>
        <text fill={selectedColor} transform="matrix(1 0 0 1 127.241 164.5324)">
          1
        </text>
      </g>
    </svg>
  )
}
