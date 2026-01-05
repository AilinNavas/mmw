import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Mucho Marketing"
            width={200}
            height={60}
            className="h-24 w-auto"
            priority
          />
        </div>
      </div>
    </header>
  )
}

