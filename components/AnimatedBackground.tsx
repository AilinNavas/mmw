// "use client"

// import { useEffect, useRef } from "react"

// interface Particle {
//     x: number
//     y: number
//     vx: number
//     vy: number
//     radius: number
//     opacity: number
//     opacityVelocity: number
//     hue: number
// }

// export function AnimatedBackground() {
//     const canvasRef = useRef<HTMLCanvasElement>(null)
//     const animationRef = useRef<number | null>(null)


//     useEffect(() => {
//         const canvas = canvasRef.current
//         if (!canvas) return

//         const ctx = canvas.getContext("2d")
//         if (!ctx) return

//         const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
//         if (mediaQuery.matches) {
//             ctx.fillStyle = "#000"
//             ctx.fillRect(0, 0, canvas.width, canvas.height)
//             return
//         }

//         const resizeCanvas = () => {
//             const dpr = window.devicePixelRatio || 1
//             canvas.width = window.innerWidth * dpr
//             canvas.height = document.documentElement.scrollHeight * dpr
//             canvas.style.height = `${document.documentElement.scrollHeight}px`
//             canvas.style.width = `${window.innerWidth}px`
       
//             ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
//         }

//         resizeCanvas()
//         window.addEventListener("resize", resizeCanvas)

//         const particles: Particle[] = []
//         const particleCount = 12

//         for (let i = 0; i < particleCount; i++) {
//             particles.push({
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//                 vx: (Math.random() - 0.5) * 0.25,
//                 vy: (Math.random() - 0.5) * 0.25,
//                 radius: 100 + Math.random() * 140,
//                 opacity: Math.random() * 0.25 + 0.1,
//                 opacityVelocity: (Math.random() - 0.5) * 0.0015,
//                 hue: 135 + Math.random() * 30,
//             })
//         }

//         const animate = () => {
//             ctx.fillStyle = "#000"
//             ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

//             particles.forEach((p) => {
//                 p.x += p.vx
//                 p.y += p.vy

//                 if (p.x < -p.radius || p.x > window.innerWidth + p.radius) p.vx *= -1
//                 if (p.y < -p.radius || p.y > window.innerHeight + p.radius) p.vy *= -1

//                 p.opacity += p.opacityVelocity
//                 if (p.opacity < 0.05 || p.opacity > 0.35) p.opacityVelocity *= -1

//                 const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)

//                 gradient.addColorStop(0, `hsla(${p.hue}, 70%, 50%, ${p.opacity})`)
//                 gradient.addColorStop(0.4, `hsla(${p.hue}, 70%, 50%, ${p.opacity * 0.4})`)
//                 gradient.addColorStop(0.7, `hsla(${p.hue}, 70%, 50%, ${p.opacity * 0.15})`)
//                 gradient.addColorStop(1, `hsla(${p.hue}, 70%, 50%, 0)`)

//                 ctx.fillStyle = gradient
//                 ctx.beginPath()
//                 ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
//                 ctx.fill()
//             })

//             animationRef.current = requestAnimationFrame(animate)
//         }

//         animate()

//         return () => {
//             if (animationRef.current) cancelAnimationFrame(animationRef.current)
//             window.removeEventListener("resize", resizeCanvas)
//         }
//     }, [])

//     return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
// }

"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  opacity: number
  opacityVelocity: number
  hue: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const isMobile = window.matchMedia("(pointer: coarse)").matches

    // ---------- Resize ----------
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = document.documentElement.scrollHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${document.documentElement.scrollHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // ---------- Fondo estático en mobile / reduced ----------
    if (prefersReduced || isMobile) {
      ctx.fillStyle = "rgb(6, 18, 12)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      return () => {
        window.removeEventListener("resize", resizeCanvas)
      }
    }

    // ---------- Mouse ----------
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    // ---------- Particles ----------
    const particles: Particle[] = []
    const particleCount = 12

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = 110 + Math.random() * 150

      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.28, // ⬆ un poco más de vida
        vy: (Math.random() - 0.5) * 0.28,
        radius: baseRadius,
        baseRadius,
        opacity: Math.random() * 0.22 + 0.12,
        opacityVelocity: (Math.random() - 0.5) * 0.0013,
        hue: 145 + Math.random() * 8,
      })
    }

    // ---------- Animate ----------
    const animate = () => {
      const t = Date.now() * 0.00045

      ctx.fillStyle = "rgb(6, 18, 12)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      ctx.globalCompositeOperation = "lighter"
      ctx.shadowColor = "rgba(87, 177, 98, 0.35)"
      ctx.shadowBlur = 40 + Math.sin(t * 1.6) * 8

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -p.radius || p.x > window.innerWidth + p.radius) p.vx *= -1
        if (p.y < -p.radius || p.y > window.innerHeight + p.radius) p.vy *= -1

        p.opacity += p.opacityVelocity
        if (p.opacity < 0.06 || p.opacity > 0.42) {
          p.opacityVelocity *= -1
        }

        // 🌬 respiración
        const breathe = Math.sin(t * 1.4 + p.y * 0.002) * 8

        // 🌀 deriva orgánica (más presente)
        p.x += Math.cos(t + p.y * 0.002) * 0.05
        p.y += Math.sin(t + p.x * 0.002) * 0.05

        // 🖱 interacción mouse
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x
          const dy = mouseRef.current.y - p.y
          const dist = Math.hypot(dx, dy) || 1
          const influence = 260

          if (dist < influence) {
            const f = (1 - dist / influence) * 0.25
            p.vx += dx * f * 0.00012
            p.vy += dy * f * 0.00012
            p.radius = p.baseRadius + f * 36 + breathe
          } else {
            p.radius += (p.baseRadius - p.radius + breathe) * 0.05
          }
        } else {
          p.radius += (p.baseRadius - p.radius + breathe) * 0.04
        }

        const hue = p.hue + Math.sin(t + p.x * 0.0015) * 5

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        )

        gradient.addColorStop(0, `hsla(${hue},70%,55%,${p.opacity})`)
        gradient.addColorStop(
          0.45,
          `hsla(${hue},70%,55%,${p.opacity * 0.32})`
        )
        gradient.addColorStop(1, `hsla(${hue},70%,55%,0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalCompositeOperation = "source-over"
      ctx.shadowBlur = 0

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
