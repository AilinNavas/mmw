// "use client"


// import { DynamicText } from "@/components/dynamic-text"
// import { WhatsAppCTA } from "@/components/whatsapp-cta"

// const opportunities = ["Multiplica tus oportunidades", "Magnifica tu reputación", "Maximiza tu crecimiento"]

// export function ThirdSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center  pt-24 pb-20">
//       <div className="container mx-auto px-4 text-center max-w-3xl">


//         {/* Contenido */}
//         <div className="relative z-10 container mx-auto px-4 text-center pb-20">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2">
//             <span className="block mb-2">Tu empresa</span>
//             <span className="block text-[#65cf72]">te necesita</span>
//           </h2>

//           <DynamicText texts={opportunities} className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic" />

//           {/* VIDEO CENTRAL */}
//           <div className="flex justify-center mb-12">
//             <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             aria-hidden="true"
//             className="max-w-xs md:max-w-sm w-full aspect-9/19 pointer-events-none"
//           >
//             <source src="/videos/Third-Section.webm" type="video/webm" />
//           </video>
//           </div>

//           <WhatsAppCTA message="¡Estoy listo para crecer!" microtext="El momento es ahora. El lugar es aquí." />


//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DynamicText } from "@/components/dynamic-text"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

const opportunities = [
  "Multiplica tus oportunidades",
  "Magnifica tu reputación",
  "Maximiza tu crecimiento",
]

// ⏱ tiempo visible de cada mockup (ms)
const SWAP_INTERVAL = 4000

export function ThirdSection() {
  const [active, setActive] = useState<"a" | "b">("a")

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev === "a" ? "b" : "a"))
    }, SWAP_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">

        <div className="relative z-10 container mx-auto px-4 text-center pb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2">
            <span className="block mb-2">Tu empresa</span>
            <span className="block text-[#65cf72]">te necesita</span>
          </h2>

          <DynamicText
            texts={opportunities}
            className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic"
          />

          {/* MOCKUP SWAP */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-sm aspect-9/19 overflow-hidden">

              <AnimatePresence mode="wait">
                {active === "a" && (
                  <motion.video
                    key="video-a"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <source src="/videos/Third-Section-1.webm" type="video/webm" />
                  </motion.video>
                )}

                {active === "b" && (
                  <motion.video
                    key="video-b"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <source src="/videos/Third-Section-2.webm" type="video/webm" />
                  </motion.video>
                )}
              </AnimatePresence>

            </div>
          </div>

          <WhatsAppCTA
            message="¡Estoy listo para crecer!"
            microtext="El momento es ahora. El lugar es aquí."
          />
        </div>
      </div>
    </section>
  )
}

