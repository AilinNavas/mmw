
// "use client"
// import { WhatsAppCTA } from "@/components/whatsapp-cta"

// const features = ["Sin leads fríos.", "Sin oportunidades perdidas.", "Sin caos en WhatsApp."]

// export function SecondSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
//       <div className="container mx-auto px-4 text-center max-w-7xl">

//         {/* HEADLINE */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//           <span className="block mb-2">Automatizá tus respuestas.</span>
//           <span className="block text-[#65cf72]">Multiplicá tus cierres.</span>
//         </h2>

//         {/* DESCRIPCIÓN */}
//         <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//           Integramos Kommo CRM con IA para que cada lead reciba una respuesta en segundos, se califique solo y avance en tu embudo — sin que muevas un dedo.
//         </p>

//         {/* FEATURES DYNAMIC TEXT */}
//         {/* <DynamicText
//           texts={features}
//           className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-12 italic"
//         /> */}

//         {/* VIDEO CENTRAL */}

//         {/* VIDEO CENTRAL */}
//         <div className="flex justify-center mb-12">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             aria-hidden="true"
//             className="max-w-xs md:max-w-sm w-full aspect-9/19 pointer-events-none"
//           >
//             <source src="/videos/hero2.webm" type="video/webm" />
//           </video>
//         </div>

//         {/* CTA */}
//         <WhatsAppCTA
//           message="Activar mi prueba gratuita"
//           microtext="
// Tu competencia ya responde en segundos. ¿Qué esperás?"
//         />
//       </div>
//     </section>
//   )
// }
"use client"

import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function SecondSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* VIDEO */}
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="max-w-xs md:max-w-sm w-full aspect-9/19 pointer-events-none"
            >
              <source src="/videos/hero2.webm" type="video/webm" />
            </video>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block mb-2 text-white">
                Automatizá tus respuestas.
              </span>
              <span className="block text-[#65cf72]">
                Multiplicá tus cierres.
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Integramos Kommo CRM con IA para que cada lead reciba una respuesta
              en segundos, se califique solo y avance en tu embudo —
              sin que muevas un dedo.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <WhatsAppCTA
                message="Activar mi prueba gratuita"
                microtext="Tu competencia ya responde en segundos. ¿Qué esperás?"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}