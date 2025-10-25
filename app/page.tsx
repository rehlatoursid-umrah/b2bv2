import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Advantages from "@/components/advantages"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <HowItWorks />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
