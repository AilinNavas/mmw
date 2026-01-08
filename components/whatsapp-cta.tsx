"use client"

import { cn } from "@/lib/utils"

interface WhatsAppCTAProps {
  message: string
  microtext: string
  className?: string
}

export function WhatsAppCTA({ message, microtext, className }: WhatsAppCTAProps) {
  const whatsappUrl = `https://wa.me/5493519046945?text=${encodeURIComponent(message)}`

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative inline-flex items-center gap-2
          bg-[#65cf72] 
          bg-linear-to-br from-[#65cf72] to-[#4fb85f]
          text-black font-semibold 
          px-6 py-4 rounded-full text-lg
          transition-all duration-300 
          hover:scale-[1.06]
          shadow-lg hover:shadow-[0_0_25px_#65cf72aa]
          border border-[#65cf72]/40 hover:border-[#65cf72]
        "
      >
        {/* Ícono oficial de WhatsApp con animación suave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6"
          fill="currentColor"
        >
          <path d="M16.01 2.003c-7.732 0-14 6.268-14 14 0 2.47.643 4.884 1.865 7.012L2 30l7.17-1.842A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14s-6.268-14-13.99-14Zm0 25.5c-2.2 0-4.356-.586-6.238-1.694l-.446-.263-4.255 1.093 1.137-4.15-.29-.468A11.46 11.46 0 0 1 4.51 16c0-6.33 5.16-11.49 11.49-11.49 6.33 0 11.49 5.16 11.49 11.49 0 6.33-5.16 11.503-11.49 11.503Zm6.327-8.643c-.347-.174-2.053-1.014-2.37-1.13-.317-.116-.548-.174-.78.174-.23.347-.898 1.13-1.102 1.36-.203.232-.406.26-.754.086-.347-.174-1.469-.542-2.798-1.727-1.035-.923-1.735-2.064-1.938-2.41-.203-.347-.022-.534.152-.708.157-.156.347-.406.52-.61.174-.203.232-.348.347-.58.116-.232.058-.435-.029-.61-.086-.174-.78-1.88-1.07-2.574-.28-.674-.568-.58-.78-.59l-.665-.012c-.232 0-.61.087-.93.435-.318.348-1.217 1.19-1.217 2.9 0 1.71 1.247 3.362 1.42 3.594.174.232 2.454 3.75 5.943 5.252.832.358 1.48.572 1.986.732.834.265 1.594.228 2.194.138.668-.1 2.053-.84 2.343-1.65.29-.81.29-1.503.203-1.65-.087-.145-.318-.23-.665-.405Z"/>
        </svg>

        <span>Empezar hoy</span>
      </a>

      <p className="text-gray-400 text-sm italic max-w-md">{microtext}</p>
    </div>
  )
}
