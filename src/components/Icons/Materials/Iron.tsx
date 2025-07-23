import { IconProps } from '../IconProps'

export const IronSVG = ({
  selectedColor,
  width = 35,
  height = 35
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 300 300"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <g>
          <defs>
            <rect id="SVGID_1_" x="-0.5" y="0" width="300" height="300" />
          </defs>
          <clipPath id="SVGID_00000078019515672734227030000017263364786685297296_">
            <use xlinkHref="#SVGID_1_" className="visible" />
          </clipPath>
          <path
            fill={selectedColor}
            clipPath="url(#SVGID_00000078019515672734227030000017263364786685297296_)"
            d="M236.07,104.84
			c-67.93,0-101.89,5.23-101.89,5.23v26.23c0,0,27-2.39,81-2.39s47.77,48.98,0,48.98c-39.46,0-81-3.58-81-3.58v24.82
			c0,0,52.25,7.84,101.89,7.84C296.16,211.95,304,104.84,236.07,104.84L236.07,104.84z M163.57,185.22l-0.9,17.74l-22.99-1.2
			l0.12-17.74L163.57,185.22L163.57,185.22z M163.57,130.18l-23.77,1.21l-0.12-17.74l22.99-1.2L163.57,130.18L163.57,130.18z"
          />
        </g>
        <polygon
          fill={selectedColor}
          className="st1"
          points="113.29,112.67 113.29,136.19 121.12,136.19 121.12,112.67 113.29,112.67 	"
        />
        <polygon
          fill={selectedColor}
          className="st1"
          points="96.09,112.67 96.09,136.19 103.93,136.19 103.93,112.67 96.09,112.67 	"
        />
        <polygon
          fill={selectedColor}
          className="st1"
          points="113.29,177.99 113.29,201.5 121.12,201.5 121.12,177.99 113.29,177.99 	"
        />
        <polygon
          fill={selectedColor}
          className="st1"
          points="96.09,177.99 96.09,201.5 103.93,201.5 103.93,177.99 96.09,177.99 	"
        />
        <polygon
          fill={selectedColor}
          className="st1"
          points="78.89,177.99 78.89,201.5 86.73,201.5 86.73,177.99 78.89,177.99 	"
        />
        <path
          fill={selectedColor}
          className="st1"
          d="M84.27,123.8c2.78-9.71-2.83-19.84-12.54-22.62l-13.04-3.74c-9.71-2.78-19.84,2.83-22.62,12.54l-1.71,5.95
		c8.74,4.08,18.65,8.16,27.76,10.57c7.44,1.97,14.36,3.04,20.34,3.59L84.27,123.8L84.27,123.8z M15.94,180.16
		c-2.78,9.71,2.83,19.84,12.54,22.62l13.04,3.74c9.71,2.78,19.84-2.83,22.62-12.54l16.58-57.82c-8.21-0.86-17.22-2.23-23.82-4.44
		c-6.3-2.1-15.5-5.93-24.27-9.77L15.94,180.16L15.94,180.16z"
        />
        <text
          fill={selectedColor}
          transform="matrix(1 0 0 1 51.7916 81.3672)"
          className="st1 st2 st3 st4">
          AÇO
        </text>
        <text
          fill={selectedColor}
          transform="matrix(1 0 0 1 106.5494 275.2735)"
          className="st1 st5 st6 st7">
          AÇO
        </text>
      </g>
    </svg>
  )
}
