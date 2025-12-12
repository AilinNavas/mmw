"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface DynamicTextProps {
  text?: string
  texts?: string[]
  className?: string
}

export function DynamicText({ text, texts, className }: DynamicTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const textArray = texts || (text ? [text] : [])

  useEffect(() => {
    if (textArray.length <= 1) return

    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [textArray.length])

  return (
    <p className={cn("transition-opacity duration-300", isVisible ? "opacity-100" : "opacity-0", className)}>
      {textArray[currentTextIndex]}
    </p>
  )
}
