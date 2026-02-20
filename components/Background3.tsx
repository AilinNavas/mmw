// "use client"

// import { motion } from "framer-motion"
// import { useMemo } from "react"

// export function Background3() {
//   const dots = useMemo(
//     () =>
//       Array.from({ length: 200 }, (_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size: 0.5 + Math.random() * 1.5,
//         delay: Math.random() * 4,
//         duration: 4 + Math.random() * 4,
//       })),
//     [],
//   )

//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
//       {/* 🌑 Base gradient */}
//       <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-black to-emerald-950/30" />

//       {/* ✨ Central glow (muy sutil) */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <motion.div
//           animate={{
//             scale: [1, 1.15, 1],
//             opacity: [0.25, 0.45, 0.25],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="w-500 h-500 rounded-full bg-linear-to-r from-emerald-500/20 via-green-500/50 to-teal-500/20 blur-3xl"
//         />
//       </div>

//       {/* ✨ Secondary glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.15, 0.3, 0.15],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="w-90 h-90 rounded-full bg-emerald-400/20 blur-2xl"
//         />
//       </div>

//       {/* 🌌 Floating dots */}
//       <div className="absolute inset-0">
//         {dots.map((dot) => (
//           <motion.div
//             key={dot.id}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{
//               opacity: [0, 0.6, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: dot.duration,
//               repeat: Infinity,
//               delay: dot.delay,
//               ease: "easeInOut",
//             }}
//             className="absolute rounded-full bg-white"
//             style={{
//               left: `${dot.x}%`,
//               top: `${dot.y}%`,
//               width: `${dot.size}px`,
//               height: `${dot.size}px`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Dot = {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function Background3() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const generatedDots = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.6 + Math.random() * 1.2,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 6,
    }))

    setDots(generatedDots)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-black to-emerald-950/30" />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.35, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-200 h-200 rounded-full bg-linear-to-r from-emerald-500/20 via-green-500/40 to-teal-500/20 blur-3xl"
        />
      </div>

      {/* Secondary glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-360 h-360 rounded-full bg-emerald-400/20 blur-2xl"
        />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
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
    </motion.div>
  )
}