import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Tentang Kami</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Mitra terpercaya dalam perjalanan spiritual Anda ke Tanah Suci
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">Visi & Misi Kami</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Visi</h3>
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                    Menjadi mitra B2B terdepan dalam industri umrah Indonesia dengan memberikan layanan berkualitas
                    tinggi dan harga kompetitif.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Misi</h3>
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                    Menyediakan solusi lengkap dan terintegrasi untuk kebutuhan umrah dengan standar internasional,
                    profesionalisme tinggi, dan komitmen penuh terhadap kepuasan pelanggan.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/masjid-nabawi-madinah-interior.jpg"
                alt="Masjid Nabawi"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Award, title: "Profesional", desc: "Standar layanan internasional" },
                { icon: Users, title: "Terpercaya", desc: "Komitmen penuh kepada klien" },
                { icon: Globe, title: "Berpengalaman", desc: "Lebih dari 15 tahun melayani" },
                { icon: Heart, title: "Berdedikasi", desc: "Fokus pada kepuasan pelanggan" },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <Card key={idx} className="border-border text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-foreground/70">{value.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold mb-2">15+</div>
                <p className="text-sm sm:text-base text-primary-foreground/90">Tahun Pengalaman</p>
              </div>
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold mb-2">500+</div>
                <p className="text-sm sm:text-base text-primary-foreground/90">Partner Travel</p>
              </div>
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold mb-2">10K+</div>
                <p className="text-sm sm:text-base text-primary-foreground/90">Jamaah Terlayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
