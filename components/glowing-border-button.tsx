"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"

interface GlowingBorderButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function GlowingBorderButton({ href, className = "", children }: GlowingBorderButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    let position = 0
    let animationId: number

    const animateBorder = () => {
      if (!button) return

      position = (position + 1) % 400

      // Calculate the gradient position for the snake-like effect
      const gradientPosition = `${position / 4}%`

      button.style.backgroundImage = `
        linear-gradient(
          90deg, 
          rgba(56, 189, 248, 0) 0%, 
          rgba(56, 189, 248, 0) ${gradientPosition}, 
          rgba(56, 189, 248, 0.6) ${Number.parseInt(gradientPosition) + 2}%, 
          rgba(56, 189, 248, 0) ${Number.parseInt(gradientPosition) + 10}%, 
          rgba(56, 189, 248, 0) 100%
        )
      `

      animationId = requestAnimationFrame(animateBorder)
    }

    animationId = requestAnimationFrame(animateBorder)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`relative overflow-hidden ${className}`}
      style={{
        boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)",
        backgroundSize: "400% 100%",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat-x",
      }}
    >
      {children}
    </Link>
  )
}
