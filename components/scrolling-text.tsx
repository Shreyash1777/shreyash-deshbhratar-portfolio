"use client"

import { useEffect, useRef } from "react"

interface ScrollingTextProps {
  text: string
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function ScrollingText({ text, direction = "left", speed = 40, className = "" }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    const container = containerRef.current
    const textElement = textRef.current

    // Calculate how many times we need to repeat the text to fill the screen
    const containerWidth = container.offsetWidth
    const textWidth = textElement.offsetWidth

    // We need at least 2 copies to create the infinite scroll effect
    // Add more if needed to ensure we cover the entire container width
    let repeats = Math.ceil((containerWidth * 2) / textWidth) + 1
    repeats = Math.max(repeats, 3) // Ensure at least 3 copies for smooth scrolling

    // Create the repeated text
    const repeatedText = text.repeat(repeats)
    textElement.textContent = repeatedText

    // Set the animation duration based on text length and speed
    const duration = textWidth * 0.05 * (100 / speed)

    // Apply the animation
    textElement.style.animationDuration = `${duration}s`
    textElement.style.animationDirection = direction === "left" ? "normal" : "reverse"
  }, [text, direction, speed])

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        ref={textRef}
        className="inline-block animate-marquee"
        style={{
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {text}
      </div>
    </div>
  )
}
