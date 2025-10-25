import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Film } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const packages = [
  {
    id: 1,
    name: "Paket Basic",
    price: "Rp 5.000.000",
    duration: "2-3 hari",
    image: "/placeholder.svg?height=300&width=400",
    description: "Dokumentasi dasar untuk momen-momen penting perjalanan umrah Anda",
    features: [
      "Dokumentasi 2-3 hari",
      "1 videografer profesional",
      "Kamera Full HD",
      "Editing standar",
      "Video 30 menit",
      "Delivery USB & Cloud",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Paket Menengah",
    price: "Rp 10.000.000",
    duration: "Seluruh perjalanan",
    image: "/placeholder.svg?height=300&width=400",
    description: "Dokumentasi lengkap dengan kualitas sinematik untuk kenangan abadi",
    features: [
      "Dokumentasi seluruh perjalanan",
      "2 videografer profesional",
      "Kamera 4K",
      "Editing profesional",
      "Video 60 menit",
      "Drone footage",
      "Delivery USB, Cloud & Cetak",
      "Album digital interaktif",
    ],
    highlight: true,
  },
  {
    id: 3,
    name: "Paket Lengkap",
    price: "Rp 15.000.000",
    duration: "Seluruh perjalanan",
    image: "/placeholder.svg?height=300&width=400",
    description: "Paket premium dengan dokumentasi sinematik dan layanan lengkap",
    features: [
      "Dokumentasi seluruh perjalanan",
      "3 videografer profesional",
      "Kamera 4K & Drone",
      "Editing sinematik premium",
      "Video 90 menit",
      "Drone footage ekstensif",
      "Highlight reel 5 menit",
      "Delivery semua format",
      "Album digital & Cetak premium",
      "Live streaming acara khusus",
    ],
    highlight: false,
  },
]

export default function VideographyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="text-primary hover:text-accent font-semibold text-sm mb-4 inline-block">
            ← Kembali ke Layanan
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Paket Videography</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Dokumentasi profesional perjalanan spiritual Anda dengan kualitas sinematik
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`overflow-hidden transition-all duration-300 ${
                  pkg.highlight
                    ? "border-accent border-2 shadow-lg scale-105 md:scale-100 lg:scale-105"
                    : "border-border hover:shadow-lg"
                }`}
              >
                <div className="relative h-48 sm:h-56 w-full bg-muted">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  {pkg.highlight && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Paling Populer
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-primary">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  <div className="mt-4">
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{pkg.price}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                      <Film className="w-3 h-3" />
                      {pkg.duration}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-colors ${
                        pkg.highlight
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
