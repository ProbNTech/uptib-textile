"use client"

import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface RainbowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  showArrow?: boolean
}

export function RainbowButton({ children, onClick, href, className = "", showArrow = false }: RainbowButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`rainbow-border group ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button className={`rainbow-border group ${className}`} onClick={onClick}>
      {content}
    </button>
  )
}
