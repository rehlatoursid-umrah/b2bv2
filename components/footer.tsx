import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">UT</span>
              </div>
              <span className="font-serif font-bold text-lg">Umrah Travel</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Mitra terpercaya layanan umrah B2B di Saudi Arabia dengan pengalaman bertahun-tahun
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Layanan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services#hotel" className="hover:text-primary-foreground transition">
                  Hotel & Meals
                </Link>
              </li>
              <li>
                <Link href="/services#muthowwif" className="hover:text-primary-foreground transition">
                  Muthowwif
                </Link>
              </li>
              <li>
                <Link href="/services#transport" className="hover:text-primary-foreground transition">
                  Transportasi
                </Link>
              </li>
              <li>
                <Link href="/services#video" className="hover:text-primary-foreground transition">
                  Videography
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Tautan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-primary-foreground transition">
                  Cara Kerja
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-primary-foreground transition">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Hubungi Kami</h3>
            <div className="space-y-3 text-sm mb-4">
              <a
                href="tel:+62212345678"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition"
              >
                <Phone size={16} />
                +62 21 2345 678
              </a>
              <a
                href="mailto:info@umrahtravel.com"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition"
              >
                <Mail size={16} />
                info@umrahtravel.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">© 2025 Umrah Travel. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
