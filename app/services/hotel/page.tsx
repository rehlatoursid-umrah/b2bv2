import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, Users, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const hotels = [
  {
    id: 1,
    name: "Hilton Makkah Convention Hotel",
    location: "Makkah",
    rating: 5,
    capacity: "500+ tamu",
    image: "/luxury-hotel-makkah.png",
    features: ["WiFi Gratis", "Restoran Halal", "Kolam Renang", "Gym 24/7"],
  },
  {
    id: 2,
    name: "Jabal Omar Marriott Hotel",
    location: "Makkah",
    rating: 5,
    capacity: "400+ tamu",
    image: "/marriott-hotel-makkah.jpg",
    features: ["WiFi Gratis", "Restoran Halal", "Spa", "Business Center"],
  },
  {
    id: 3,
    name: "Dar Al Eiman Al Waha Hotel",
    location: "Makkah",
    rating: 4,
    capacity: "300+ tamu",
    image: "/dar-al-eiman-hotel-makkah.jpg",
    features: ["WiFi Gratis", "Restoran Halal", "Ruang Sholat", "Layanan Kamar"],
  },
  {
    id: 4,
    name: "Al Noor Taibah Hotel",
    location: "Madinah",
    rating: 4,
    capacity: "250+ tamu",
    image: "/hotel-madinah.jpg",
    features: ["WiFi Gratis", "Restoran Halal", "Pemandangan Masjid", "Layanan Kamar"],
  },
  {
    id: 5,
    name: "Dar Al Hijra Hotel",
    location: "Madinah",
    rating: 4,
    capacity: "200+ tamu",
    image: "/dar-al-hijra-madinah.jpg",
    features: ["WiFi Gratis", "Restoran Halal", "Ruang Sholat", "Taman"],
  },
  {
    id: 6,
    name: "Anwar Al Madinah Movenpick",
    location: "Madinah",
    rating: 5,
    capacity: "350+ tamu",
    image: "/movenpick-hotel-madinah.jpg",
    features: ["WiFi Gratis", "Restoran Halal", "Kolam Renang", "Spa"],
  },
]

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="text-primary hover:text-accent font-semibold text-sm mb-4 inline-block">
            ← Kembali ke Layanan
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Hotel & Akomodasi</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Pilihan hotel bintang 3-5 terbaik di Makkah dan Madinah dengan harga khusus B2B
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                <div className="relative h-48 sm:h-56 w-full bg-muted">
                  <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg sm:text-xl text-primary">{hotel.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Users className="w-4 h-4 text-accent" />
                      {hotel.capacity}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Fasilitas:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {hotel.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                            <Wifi className="w-3 h-3 text-primary" />
                            {feature}
                          </div>
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
