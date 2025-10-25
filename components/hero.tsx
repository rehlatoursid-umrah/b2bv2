"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/kaaba-night-pilgrims.webp)",
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
          Mitra Terpercaya Layanan Umrah di Saudi Arabia
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 text-balance max-w-2xl mx-auto">
          Solusi lengkap B2B untuk travel umrah Indonesia dengan harga kompetitif dan pelayanan profesional
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition font-semibold text-sm sm:text-base"
          >
            Konsultasi Gratis
          </Link>
          <Link
            href="/services"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition font-semibold text-sm sm:text-base"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
