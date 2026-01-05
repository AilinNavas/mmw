export function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-white/10 py-10 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4">

        {/* LINKS */}
        <nav className="flex gap-6 text-gray-400 text-sm">
          <a
            href="#"
            className="hover:text-[#65cf72] transition-colors"
          >
            Política de privacidad
          </a>
          <a
            href="#"
            className="hover:text-[#65cf72] transition-colors"
          >
            Términos
          </a>
          <a
            href="#"
            className="hover:text-[#65cf72] transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs mt-2">
          © 2025 Mucho Marketing — Transformando conversaciones en ventas.
        </p>
      </div>
    </footer>
  )
}
