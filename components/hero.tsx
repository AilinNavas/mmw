"use client"
import { DynamicText } from "@/components/dynamic-text"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 bg-black">
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">

        {/* Título */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-2">
          <span className="text-[#57b162]  block">Más conversaciones</span>
          <span className="block">terminan en ventas</span>
        </h1>

        {/* Subtítulo dinámico */}
        <DynamicText
          text="No dejes oportunidades sin responder"
          className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic"
        />

        {/* GIF / Video loop */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <video
              src="/images/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-2xl h-auto rounded-xl shadow-2xl"
            ></video>
          </div>
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
