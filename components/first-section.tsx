"use client"

import { motion } from "framer-motion"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function FirstSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">

        {/* TITULO */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent font-bold leading-tight mb-2">
          <span className="block">Donde tus clientes</span>
          <span className="block  text-[#65cf72]">te van a encontrar</span>
        </h2>

        {/* SUBTITULO */}
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic">
          Ciclos de venta más rápidos
        </p>

        {/* VIDEO CENTRAL */}
        <div className="flex justify-center mb-12">
          <video autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className=" pointer-events-none">
            <source src="/videos/web.webm" type="video/webm" />
          </video>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <WhatsAppCTA
            message="Quiero estar donde están mis clientes"
            microtext="Tus clientes ya están en WhatsApp. ¿Y tú?"
          />
        </motion.div>

      </div>
    </section>
  )
}
