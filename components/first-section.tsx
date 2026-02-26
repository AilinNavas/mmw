
"use client"

import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function FirstSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl text-center">

        {/* HEADLINE */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
        >
          <span className="block bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent">
            Tus clientes están scrolleando
          </span>
          <span className="block text-[#65cf72]">
            Instagram y Facebook ahora mismo
          </span>
        </h2>

        {/* TENSIÓN */}
        <p
          className="text-xl md:text-2xl text-gray-300 mb-16"
        >
          Mientras tanto, tu competencia les está hablando.
        </p>

        {/* VIDEO CLIMAX */}
        <div className="relative flex justify-center mb-20">
        
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full max-w-lg pointer-events-none"
          >
            <source src="/videos/web.webm" type="video/webm" />
          </video>
        </div>

        {/* RESOLUCIÓN */}
        <p
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Nosotros creamos los anuncios que los detienen, los enganchan
          y los mandan directo a tu WhatsApp.
        </p>

        {/* CTA */}
        <div

        >
          <WhatsAppCTA
            message="Empezar a captar clientes →"
            microtext="Usa las redes para vender, no solo para mostrar"
          />
        </div>

      </div>
    </section>
  )
}