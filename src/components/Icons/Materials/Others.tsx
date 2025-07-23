import { IconProps } from '../IconProps'

export const OthersSVG = ({
  selectedColor,
  width = 35,
  height = 35
}: IconProps) => {
  return (
    <>
      <svg
        version="1.1"
        id="others"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        width={width}
        height={height}>
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="-0.32" y="0" width="300" height="300" />
            </defs>
            <clipPath id="SVGID_00000011021960408860289350000010086379232425434035_">
              <use className="visible" xlinkHref="#SVGID_1_" />
            </clipPath>

            <path
              className="st0"
              stroke={selectedColor}
              d="
			M167.27,206.9h60.11c17.74,0,28.93-19.07,20.3-34.56l-40.21-72.13 M80.08,128.53l-24.42,43.81c-8.64,15.49,2.56,34.56,20.3,34.56
			h41.61 M185.81,61.36l-13.84-24.83c-8.86-15.9-31.73-15.9-40.6,0l-27.58,49.48"
            />
          </g>
          <polygon
            fill={selectedColor}
            className="st1"
            points="167.12,206.9 166.97,183.23 138.94,207.08 167.27,230.56 167.12,206.9 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="78.29,131.62 100.11,142.88 91.69,105.62 56.46,120.36 78.29,131.62 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="181.8,56.56 160.16,69.09 196.73,82.34 203.45,44.02 181.8,56.56 	"
          />
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 61.6624 281.6485)"
            className="st1 st2 st3 st4">
            OUTROS
          </text>
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 128.1858 165.25)"
            className="st1 st2 st5">
            7
          </text>
        </g>
      </svg>
    </>
  )
}
