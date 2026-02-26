import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Raleway } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
 import "./globals.css"
// import { Background3 } from "@/components/Background3"
import { BackgroundApple } from "@/components/BackgroundApple"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mucho Marketing - WhatsApp Marketing que Convierte",
  description:
    "Más conversaciones que terminan en venta. Especialistas en WhatsApp Marketing con IA y automatizaciones.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={raleway.className}>

          <body className="min-h-screen  text-white">
            <BackgroundApple />

  <main className="relative z-10">
    {children}
    <Analytics />
  </main>
</body>

     
    </html>
  )
}

