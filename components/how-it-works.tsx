import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description: "Diskusi kebutuhan dan preferensi umrah Anda",
  },
  {
    number: "02",
    title: "Penawaran",
    description: "Kami menyiapkan paket dan harga terbaik",
  },
  {
    number: "03",
    title: "Konfirmasi",
    description: "Finalisasi detail dan jadwal keberangkatan",
  },
  {
    number: "04",
    title: "Eksekusi",
    description: "Pelaksanaan perjalanan umrah dengan sempurna",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Cara Kerja
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses sederhana untuk kerjasama yang lancar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-primary/20 mb-2">{step.number}</div>
                <CardTitle className="text-primary text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
