"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">UT</span>
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold text-primary hidden sm:inline">Umrah Travel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition font-medium">
              Beranda
            </Link>
            <Link href="/services" className="text-sm text-foreground hover:text-primary transition font-medium">
              Layanan
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition font-medium">
              Tentang Kami
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition font-medium">
              Kontak
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary transition font-medium text-sm"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 mt-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Konsultasi Gratis
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
