// "use client"

// export function BackgroundApple() {
//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
//       {/* Base gradient */}
//       <div className="absolute inset-0 bg-linear-to-br from-black via-gray-950 to-emerald-950/30" />

//       {/* Main glow */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="glow glow-primary" />
//       </div>

//       {/* Secondary ambient glow */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="glow glow-secondary" />
//       </div>

//       {/* Subtle noise / texture */}
//       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
//     </div>
//   )
// }
"use client"

export function BackgroundApple() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-apple-green.webp')" }}
      />

      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-black/80 to-emerald-950/40" />

      {/* Main glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glow glow-primary" />
      </div>

      {/* Secondary ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glow glow-secondary" />
      </div>

      {/* Subtle noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
    </div>
  )
}