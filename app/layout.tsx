import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="es" className={inter.className}>
     <body className="relative font-inter">
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}

