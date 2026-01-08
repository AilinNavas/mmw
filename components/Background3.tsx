"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function Background3() {
  const dots = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 1.5,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
      {/* 🌑 Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-black to-emerald-950/30" />

      {/* ✨ Central glow (muy sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-130 h-130 rounded-full bg-linear-to-r from-emerald-500/20 via-green-500/25 to-teal-500/20 blur-3xl"
        />
      </div>

      {/* ✨ Secondary glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-90 h-90 rounded-full bg-emerald-400/20 blur-2xl"
        />
      </div>

      {/* 🌌 Floating dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
