"use client"


import { DynamicText } from "@/components/dynamic-text"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

const opportunities = ["Multiplica tus oportunidades", "Magnifica tu reputación", "Maximiza tu crecimiento"]

export function ThirdSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center  pt-24 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">


        {/* Contenido */}
        <div className="relative z-10 container mx-auto px-4 text-center pb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2">
            <span className="block mb-2">Tu empresa</span>
            <span className="block text-[#65cf72]">te necesita</span>
          </h2>

          <DynamicText texts={opportunities} className="text-xl md:text-2xl font-light text-gray-300 mb-12 italic" />

          {/* VIDEO CENTRAL */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/Third-Section.gif"
              alt="Demo del producto"
              className="max-w-xs md:max-w-sm h-auto rounded-xl shadow-2xl border-2 border-green-500"
            />
      
          </div>

          <WhatsAppCTA message="¡Estoy listo para crecer!" microtext="El momento es ahora. El lugar es aquí." />


        </div>
      </div>
    </section>
  )
}
