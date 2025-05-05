"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create particles
    const createParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    createParticles()

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        connectParticles(particle, index)
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = (particle: Particle, index: number) => {
      const mouseDistance = Math.hypot(mousePosition.current.x - particle.x, mousePosition.current.y - particle.y)

      // Connect to mouse if close enough
      if (mouseDistance < 150) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - mouseDistance / 150)})`
        ctx.lineWidth = 0.5
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
        ctx.stroke()
      }

      // Connect to other particles
      for (let i = index + 1; i < particles.current.length; i++) {
        const otherParticle = particles.current[i]
        const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y)

        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - distance / 100)})`
          ctx.lineWidth = 0.3
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
