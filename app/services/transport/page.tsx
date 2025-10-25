import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Gauge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const vehicles = [
  {
    id: 1,
    name: "Toyota Hiace",
    type: "Minibus",
    capacity: "12-14 penumpang",
    image: "/toyota-hiace-minibus.jpg",
    features: ["AC Penuh", "WiFi", "USB Charger", "Kursi Empuk"],
  },
  {
    id: 2,
    name: "Mercedes Sprinter",
    type: "Minibus Premium",
    capacity: "16-18 penumpang",
    image: "/mercedes-sprinter-bus.jpg",
    features: ["AC Penuh", "WiFi", "Toilet", "Kursi Reclining"],
  },
  {
    id: 3,
    name: "Hino Bus",
    type: "Bus Standar",
    capacity: "45-50 penumpang",
    image: "/hino-bus.jpg",
    features: ["AC Penuh", "WiFi", "Toilet", "Kursi Nyaman"],
  },
  {
    id: 4,
    name: "Volvo Bus",
    type: "Bus Premium",
    capacity: "50-55 penumpang",
    image: "/volvo-bus-premium.jpg",
    features: ["AC Penuh", "WiFi", "Toilet", "Kursi Reclining", "Layar TV"],
  },
  {
    id: 5,
    name: "Toyota Avanza",
    type: "Mobil Keluarga",
    capacity: "6-7 penumpang",
    image: "/toyota-avanza.jpg",
    features: ["AC Penuh", "USB Charger", "Kursi Empuk", "Bagasi Luas"],
  },
  {
    id: 6,
    name: "Nissan Serena",
    type: "MPV Premium",
    capacity: "7-8 penumpang",
    image: "/nissan-serena-mpv.jpg",
    features: ["AC Penuh", "WiFi", "USB Charger", "Kursi Reclining"],
  },
]

export default function TransportPage() {
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
            Armada Transportasi
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Armada lengkap kendaraan modern dan terawat untuk kenyamanan perjalanan Anda
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                <div className="relative h-48 sm:h-56 w-full bg-muted">
                  <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-primary">{vehicle.name}</CardTitle>
                  <p className="text-sm text-accent font-semibold">{vehicle.type}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Users className="w-4 h-4 text-accent" />
                      {vehicle.capacity}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Fasilitas:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                            <Gauge className="w-3 h-3 text-primary" />
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
