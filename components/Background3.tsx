"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  opacityVelocity: number
  hue: number
}

export function Background3() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const dpr = window.devicePixelRatio || 1

    // 🔧 Canvas del alto TOTAL del documento
    const resizeCanvas = () => {
      const height = document.documentElement.scrollHeight
      canvas.width = window.innerWidth * dpr
      canvas.height = height * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // 🧠 TIP PRO: detectar cambios dinámicos de altura
    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(document.body)

    if (prefersReduced) {
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      return () => {
        window.removeEventListener("resize", resizeCanvas)
        resizeObserver.disconnect()
      }
    }

    // 🖱 Mouse en coordenadas globales
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY + window.scrollY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // ✨ Partículas distribuidas en TODA la landing
    const particles: Particle[] = []
    const particleCount = 40
    const totalHeight = document.documentElement.scrollHeight

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * totalHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 100 + Math.random() * 140,
        opacity: Math.random() * 0.25 + 0.1,
        opacityVelocity: (Math.random() - 0.5) * 0.0012,
        hue: 135 + Math.random() * 30,
      })
    }

    const animate = () => {
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      particles.forEach((p) => {
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.hypot(dx, dy)
        const influenceRadius = 240

        // 🧲 Repelido suave y controlado
        if (dist < influenceRadius && dist > 0.1) {
          const force = (1 - dist / influenceRadius) * 0.35
          const nx = dx / dist
          const ny = dy / dist
          p.vx += nx * force
          p.vy += ny * force
        }

        // Movimiento orgánico
        p.vx *= 0.985
        p.vy *= 0.985

        p.x += p.vx
        p.y += p.vy

        // Límites del documento
        if (p.x < -p.radius || p.x > window.innerWidth + p.radius) p.vx *= -1
        if (
          p.y < -p.radius ||
          p.y > document.documentElement.scrollHeight + p.radius
        )
          p.vy *= -1

        // Pulso de opacidad
        p.opacity += p.opacityVelocity
        if (p.opacity < 0.05 || p.opacity > 0.35) {
          p.opacityVelocity *= -1
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        )

        gradient.addColorStop(0, `hsla(${p.hue},70%,50%,${p.opacity})`)
        gradient.addColorStop(
          0.45,
          `hsla(${p.hue},70%,50%,${p.opacity * 0.35})`
        )
        gradient.addColorStop(1, `hsla(${p.hue},70%,50%,0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
