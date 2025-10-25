import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const advantages = [
  {
    title: "Network Luas",
    description: "Kerjasama dengan supplier langsung di Saudi Arabia",
  },
  {
    title: "Harga Kompetitif",
    description: "Harga B2B terbaik dengan kualitas premium",
  },
  {
    title: "Profesional & Terpercaya",
    description: "Tim berpengalaman siap melayani 24/7",
  },
  {
    title: "Pengalaman Bertahun-tahun",
    description: "Lebih dari 15 tahun melayani travel umrah",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengapa memilih kami sebagai partner umrah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{advantage.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
