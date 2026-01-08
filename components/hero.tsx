"use client"
import { DynamicText } from "@/components/dynamic-text"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20">
      <div className="relative container mx-auto px-4 text-center max-w-4xl">

        {/* Título */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl bg-linear-to-b from-white to-white/90 bg-clip-text text-transparent font-bold leading-tight mb-2">
          <span className="text-[#57b162]  block">Más conversaciones</span>
          <span className="block">terminan en ventas</span>
        </h1>

        {/* Subtítulo dinámico */}
        <DynamicText
          text="No dejes oportunidades sin responder"
          className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic
             drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
             md:drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]"
        />

        {/* GIF / Video loop */}
        <div className="flex justify-center mb-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="max-w-xs md:max-w-sm w-full aspect-9/19 pointer-events-none"
          >
            <source src="/videos/Hero-video.webm" type="video/webm" />
          </video>

        </div>


        {/* Call To Action */}
        <div className="mb-6">
          <WhatsAppCTA
            message="¡Quiero convertir más conversaciones en ventas!"
            microtext="Empezar tarde &gt; Dudar = Procrastinar"
          />
        </div>


      </div>
    </section>
  )
}
