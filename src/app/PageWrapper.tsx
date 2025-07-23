'use client'
import { useEffect } from 'react'

export default function PageWrapper({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const page = Array.isArray(children) ? children[0] : children
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bgColor = (page as any)?.type?.backgroundColor || '#f9f9f9'
    document.body.style.background = bgColor
  }, [children])

  return <>{children}</>
}
