import React from 'react'

interface LoadingSpinnerProps {
  size?: string
  color?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'h-12 w-12',
  color = 'border-red-500'
}) => {
  return (
    <div
      className={`${size} animate-spin rounded-full border-4 ${color} border-t-transparent`}
      role="status"
    />
  )
}
