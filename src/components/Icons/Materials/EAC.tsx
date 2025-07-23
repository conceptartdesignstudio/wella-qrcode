import { IconProps } from '../IconProps'

export const EacSVG = ({
  selectedColor,
  width = 35,
  height = 35
}: IconProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      viewBox="0 0 425.2 425.2"
      enableBackground="new 0 0 425.2 425.2"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet">
      <path
        fill={selectedColor}
        d="M132.1,211.2h20.8v20.8h-20.8v62.5h20.8v20.8h-41.7V127.8h41.7v20.9h-20.8V211.2z M215.5,232.1v83.4h20.9
	V127.8h-62.5v187.6h20.8v-83.4H215.5z M215.5,211.2h-20.8v-62.5h20.8V211.2z M278,148.7h20.8v-20.9h-41.7v187.6h41.7v-20.8H278
	V148.7z"
      />
    </svg>
  )
}
