import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const muthowwifs = [
  {
    id: 1,
    name: "Ustadz Ahmad Hidayat",
    specialization: "Pemandu Umrah Berpengalaman",
    experience: "15+ tahun",
    image: "/muslim-man-professional-portrait.jpg",
    bio: "Pemandu umrah bersertifikat dengan pengalaman lebih dari 15 tahun melayani ribuan jamaah dari berbagai negara.",
    languages: ["Indonesia", "Arab", "Inggris"],
  },
  {
    id: 2,
    name: "Ustadz Muhammad Rizki",
    specialization: "Ahli Ibadah & Doa",
    experience: "12+ tahun",
    image: "/muslim-man-imam-portrait.jpg",
    bio: "Spesialis dalam membimbing ibadah umrah dengan pengetahuan mendalam tentang tata cara dan doa-doa khusus.",
    languages: ["Indonesia", "Arab", "Inggris"],
  },
  {
    id: 3,
    name: "Ustadz Salman Farisi",
    specialization: "Pemandu Wisata Religi",
    experience: "10+ tahun",
    image: "/muslim-man-guide-portrait.jpg",
    bio: "Pemandu wisata religi yang berpengalaman dalam menjelaskan sejarah dan makna setiap tempat ibadah.",
    languages: ["Indonesia", "Arab", "Inggris", "Mandarin"],
  },
  {
    id: 4,
    name: "Ustadz Bilal Habibi",
    specialization: "Koordinator Grup Besar",
    experience: "13+ tahun",
    image: "/muslim-man-coordinator-portrait.jpg",
    bio: "Ahli dalam mengelola dan mengkoordinasikan grup besar dengan sistem yang terstruktur dan profesional.",
    languages: ["Indonesia", "Arab", "Inggris"],
  },
  {
    id: 5,
    name: "Ustadz Hamzah Syaiful",
    specialization: "Pembimbing Spiritual",
    experience: "11+ tahun",
    image: "/muslim-man-spiritual-leader-portrait.jpg",
    bio: "Pembimbing spiritual yang membantu jamaah mendapatkan pengalaman umrah yang bermakna dan berkesan.",
    languages: ["Indonesia", "Arab", "Inggris"],
  },
  {
    id: 6,
    name: "Ustadz Faisal Abdurrahman",
    specialization: "Ahli Protokol Ibadah",
    experience: "14+ tahun",
    image: "/muslim-man-scholar-portrait.jpg",
    bio: "Ahli dalam protokol dan tata cara ibadah umrah sesuai dengan ajaran Islam yang benar dan sempurna.",
    languages: ["Indonesia", "Arab", "Inggris", "Urdu"],
  },
]

export default function MuthowwifPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="text-primary hover:text-accent font-semibold text-sm mb-4 inline-block">
            ← Kembali ke Layanan
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Tim Muthowwif Kami
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Pemandu ibadah profesional dan berpengalaman siap membimbing perjalanan spiritual Anda
          </p>
        </div>
      </section>

      {/* Muthowwif Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {muthowwifs.map((muthowwif) => (
              <Card key={muthowwif.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                <div className="relative h-64 sm:h-72 w-full bg-muted">
                  <Image
                    src={muthowwif.image || "/placeholder.svg"}
                    alt={muthowwif.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-primary">{muthowwif.name}</CardTitle>
                  <p className="text-sm text-accent font-semibold">{muthowwif.specialization}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <Award className="w-3 h-3" />
                    {muthowwif.experience}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">{muthowwif.bio}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground flex items-center gap-2">
                        <Globe className="w-3 h-3 text-accent" />
                        Bahasa:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {muthowwif.languages.map((lang, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
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
