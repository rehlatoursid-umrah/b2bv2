import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    company: "PT Travel Indonesia",
    name: "Budi Santoso",
    position: "Direktur Operasional",
    text: "Layanan Umrah Travel sangat profesional dan responsif. Harga kompetitif dengan kualitas terbaik.",
    rating: 5,
  },
  {
    company: "Wisata Nusantara",
    name: "Siti Nurhaliza",
    position: "Manager Umrah",
    text: "Kerjasama yang sangat memuaskan. Tim mereka selalu siap membantu setiap kebutuhan kami.",
    rating: 5,
  },
  {
    company: "Perjalanan Spiritual",
    name: "Ahmad Wijaya",
    position: "Pemilik Usaha",
    text: "Pengalaman bertahun-tahun mereka terbukti dalam setiap detail layanan yang diberikan.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Testimoni Partner
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan dari travel partner kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
