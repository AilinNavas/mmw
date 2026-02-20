
"use client"

import { motion } from "framer-motion"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function FirstSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl text-center">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
        >
          <span className="block bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent">
            Tus clientes están scrolleando
          </span>
          <span className="block text-[#65cf72]">
            Instagram y Facebook ahora mismo
          </span>
        </motion.h2>

        {/* TENSIÓN */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 mb-16"
        >
          Mientras tanto, tu competencia les está hablando.
        </motion.p>

        {/* VIDEO CLIMAX */}
        <div className="relative flex justify-center mb-20">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-130 h-130 rounded-full bg-[#65cf72]/20 blur-3xl" />
          </div>

          <motion.video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full max-w-lg pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <source src="/videos/web.webm" type="video/webm" />
          </motion.video>
        </div>

        {/* RESOLUCIÓN */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Nosotros creamos los anuncios que los detienen, los enganchan
          y los mandan directo a tu WhatsApp.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <WhatsAppCTA
            message="Empezar a captar clientes →"
            microtext="Usa las redes para vender, no solo para mostrar"
          />
        </motion.div>

      </div>
    </section>
  )
}