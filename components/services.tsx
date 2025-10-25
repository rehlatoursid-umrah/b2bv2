import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hotel, Users, Bus, Camera } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Hotel,
    title: "Hotel & Meals",
    description: "Akses langsung ke supplier hotel & catering terbaik di Makkah dan Madinah dengan harga kompetitif",
    href: "/services#hotel",
  },
  {
    icon: Users,
    title: "Muthowwif",
    description: "Pemandu ibadah profesional & berpengalaman untuk kelancaran perjalanan spiritual Anda",
    href: "/services#muthowwif",
  },
  {
    icon: Bus,
    title: "Transportasi",
    description: "Armada lengkap dari sedan hingga bus untuk kenyamanan maksimal perjalanan Anda",
    href: "/services#transport",
  },
  {
    icon: Camera,
    title: "Videography",
    description: "Dokumentasi profesional perjalanan spiritual Anda dengan kualitas terbaik",
    href: "/services#video",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Layanan Kami
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap dan terintegrasi untuk kebutuhan umrah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className="border-border hover:shadow-lg hover:border-primary transition-all h-full cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
