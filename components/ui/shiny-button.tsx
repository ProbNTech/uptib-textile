"use client"

import type React from "react"
import Link from "next/link"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export function ShinyButton({ children, onClick, href, className = "" }: ShinyButtonProps) {
  const inner = <span>{children}</span>

  if (href) {
    return (
      <Link href={href} className={`shiny-cta ${className}`}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      {inner}
    </button>
  )
}
