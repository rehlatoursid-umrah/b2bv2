import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactCTA from "@/components/contact-cta"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Hubungi Kami</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7 untuk konsultasi dan penawaran terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactCTA />

      <Footer />
    </main>
  )
}
