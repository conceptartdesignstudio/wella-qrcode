import { IconProps } from '../IconProps'

export const PaperSVG = ({
  selectedColor,
  width = 35,
  height = 35
}: IconProps) => {
  return (
    <>
      <svg
        version="1.1"
        id="paper"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        width={width}
        height={height}>
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="-0.25" y="0" width="300" height="300" />
            </defs>
            <clipPath id="SVGID_00000079482633657597706240000010451114554685012874_">
              <use className="visible" xlinkHref="#SVGID_1_" />
            </clipPath>

            <path
              stroke={selectedColor}
              className="st0"
              d="
			M141.39,83.26l48.17,7.54l17.09-45.66l-12.44,7.27l-16.25-28.59h-52.11l29.26,51.43L141.39,83.26L141.39,83.26z M254.89,154.55
			l-30.67-53.98l-39.11,22.56l20.86,36.41h48.87C255.76,158.01,255.78,156.1,254.89,154.55L254.89,154.55z M70.56,200.24
			c2.12,3.35,5.82,5.38,9.78,5.38h56.3v-45.43H95.12L70.56,200.24L70.56,200.24z M207.72,159.54h-12.51v-15.59l-30.81,37.79
			l30.81,37.79v-14.56h24.28c5.02,0,9.66-2.64,12.24-6.94l23.02-38.48h-43.77H207.72L207.72,159.54z M100.44,150.86l13.6,7.79
			l-17.46-45.52l-48.11,7.93l11.82,6.78l-12.83,21.77c-2.72,4.61-2.62,10.36,0.24,14.88l22.6,35.65l28.78-46.93L100.44,150.86
			L100.44,150.86z M150.08,66.24l-24.14-42.43c-2.11,0-4.06,1.12-5.14,2.93L90.44,78.28l38.68,24.55L150.08,66.24L150.08,66.24z"
            />
          </g>
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 82.9453 278.7422)"
            className="st1 st2 st3 st4">
            PA
          </text>
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 137.8047 278.7422)"
            className="st1 st2 st3 st5">
            PE
          </text>
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 193.4141 278.7422)"
            className="st1 st2 st3">
            L
          </text>
        </g>
      </svg>
    </>
  )
}
