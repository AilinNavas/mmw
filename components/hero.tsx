
"use client"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="text-center lg:text-left">

            {/* Título */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-[#57b162] block">
                Cada mensaje sin respuesta
              </span>
              <span className="block italic bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent">
                se va a la competencia
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Publicidad en Meta + WhatsApp con IA y automatizaciones.
              Para que tu negocio venda aunque no estés mirando el teléfono.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <WhatsAppCTA
                message="Probar 14 días gratis"
                microtext=" Sin contrato · Cancelás cuando querés"
              />
            </div>
          </div>

          {/* VIDEO */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">

              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="w-full max-w-xs md:max-w-sm aspect-9/19  pointer-events-none"
              >
                <source src="/videos/Hero-video.webm" type="video/webm" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}