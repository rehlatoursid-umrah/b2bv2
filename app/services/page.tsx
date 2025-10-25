import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hotel, Users, Bus, Camera, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const serviceDetails = [
  {
    id: "hotel",
    icon: Hotel,
    title: "Hotel & Meals",
    description: "Akses langsung ke supplier hotel & catering terbaik di Makkah dan Madinah",
    features: [
      "Pilihan hotel bintang 3-5 di lokasi strategis",
      "Catering halal berkualitas tinggi",
      "Harga khusus B2B",
      "Fleksibilitas paket sesuai kebutuhan",
      "Dukungan 24/7 selama perjalanan",
    ],
    href: "/services/hotel",
  },
  {
    id: "muthowwif",
    icon: Users,
    title: "Muthowwif (Pemandu Ibadah)",
    description: "Pemandu ibadah profesional & berpengalaman untuk kelancaran perjalanan spiritual",
    features: [
      "Pemandu berpengalaman dan berlisensi",
      "Berbahasa Indonesia dengan fasih",
      "Pengetahuan mendalam tentang ibadah umrah",
      "Pendampingan penuh dari awal hingga akhir",
      "Layanan khusus untuk kelompok besar",
    ],
    href: "/services/muthowwif",
  },
  {
    id: "transport",
    icon: Bus,
    title: "Transportasi",
    description: "Armada lengkap dari sedan hingga bus untuk kenyamanan maksimal",
    features: [
      "Armada kendaraan modern dan terawat",
      "Driver profesional dan berpengalaman",
      "Rute optimal ke semua lokasi ibadah",
      "Kenyamanan AC dan fasilitas lengkap",
      "Asuransi perjalanan komprehensif",
    ],
    href: "/services/transport",
  },
  {
    id: "video",
    icon: Camera,
    title: "Videography & Dokumentasi",
    description: "Dokumentasi profesional perjalanan spiritual Anda dengan kualitas terbaik",
    features: [
      "Tim videografer profesional",
      "Peralatan kamera 4K terkini",
      "Editing profesional dan berkualitas",
      "Delivery dalam berbagai format",
      "Album digital dan cetak tersedia",
    ],
    href: "/services/videography",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Layanan Kami</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi lengkap dan terintegrasi untuk kebutuhan umrah Anda dengan standar internasional
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {serviceDetails.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="border-border hover:shadow-lg transition-all duration-300 hover:border-accent/50 group"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-primary text-xl sm:text-2xl">{service.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground text-sm">Fitur Unggulan:</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm mt-4 group/link"
                      >
                        Lihat Detail & Galeri
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tertarik dengan Layanan Kami?</h2>
          <p className="text-base sm:text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan penawaran khusus dan konsultasi gratis
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg transition font-semibold text-sm sm:text-base"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
