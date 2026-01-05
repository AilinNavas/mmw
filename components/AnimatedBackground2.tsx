"use client"

import { useEffect, useRef } from "react"

type SymbolType = "whatsapp" | "peso" | "growth" | "notification"

interface FloatingSymbol {
  x: number
  y: number
  speed: number
  baseSize: number
  size: number
  opacity: number
  type: SymbolType
  drift: number
  phase: number
}

export function AnimatedBackground2() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  const images = useRef<Record<SymbolType, HTMLImageElement | null>>({
    whatsapp: null,
    peso: null,
    growth: null,
    notification: null,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    /* ================= SVGs ================= */

    const whatsappOutlineSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="none" stroke="#57b162" stroke-width="2"
          d="M16 2C8.3 2 2 8.3 2 16c0 2.7.8 5.2 2.1 7.4L2 30l6.8-2.1
          C11 29.2 13.4 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2z"/>
        <path fill="none" stroke="#57b162" stroke-width="2"
          d="M11.5 9.5c.3-.5.6-.6 1-.6h.7c.3 0 .6.1.8.6l1 2.4
          c.1.2.1.5 0 .7-.1.3-.4.6-.6.8-.3.3-.5.5-.2 1
          .3.5 1.3 2 2.9 3.3 1.5 1.2 2.1 1.4 2.6 1.6.4.1.8 0 1.1-.3
          .3-.4.9-1.1 1.2-1.4"/>
      </svg>
    `

    const pesoSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-size="20" font-weight="700" fill="#57b162">$</text>
      </svg>
    `

    const growthSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" stroke="#57b162" stroke-width="2"
          d="M4 16l6-6 4 4 6-6"/>
      </svg>
    `

    const notificationSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" stroke="#57b162" stroke-width="2"
          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM18 16V11
          c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7
          C7.6 5.4 6 7.9 6 11v5l-2 2h16l-2-2z"/>
      </svg>
    `

    const createImg = (svg: string) => {
      const img = new Image()
      img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
      return img
    }

    images.current.whatsapp = createImg(whatsappOutlineSVG)
    images.current.peso = createImg(pesoSVG)
    images.current.growth = createImg(growthSVG)
    images.current.notification = createImg(notificationSVG)

    /* ================= Canvas ================= */

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    /* ================= Symbols ================= */

    const symbols: FloatingSymbol[] = []
    const types: SymbolType[] = ["whatsapp", "peso", "growth", "notification"]
    const count = 28

    for (let i = 0; i < count; i++) {
      const baseSize = 18 + Math.random() * 18
      symbols.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 0.06 + Math.random() * 0.12,
        baseSize,
        size: baseSize,
        opacity: 0.04 + Math.random() * 0.08,
        type: types[Math.floor(Math.random() * types.length)],
        drift: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
      })
    }

    /* ================= Animate ================= */

    const animate = () => {
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      symbols.forEach((s) => {
        s.y -= s.speed
        s.x += s.drift

        // respiración de tamaño (muy suave)
        s.phase += 0.01
        s.size = s.baseSize + Math.sin(s.phase) * 3

        if (s.y < -60) {
          s.y = window.innerHeight + 60
          s.x = Math.random() * window.innerWidth
        }

        if (s.x < -60) s.x = window.innerWidth + 60
        if (s.x > window.innerWidth + 60) s.x = -60

        const img = images.current[s.type]
        if (!img) return

        ctx.save()
        ctx.globalAlpha = s.opacity
        ctx.drawImage(img, s.x, s.y, s.size, s.size)
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
