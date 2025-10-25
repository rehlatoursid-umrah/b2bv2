"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Siap Bermitra?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan penawaran terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Telepon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+62212345678" className="text-primary hover:underline font-semibold text-sm sm:text-base">
                  +62 21 2345 678
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/62812345678"
                  className="text-primary hover:underline font-semibold text-sm sm:text-base"
                >
                  +62 812 345 678
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@umrahtravel.com"
                  className="text-primary hover:underline font-semibold text-sm sm:text-base"
                >
                  info@umrahtravel.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-primary">Form Konsultasi</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Nama Depan"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nama Belakang"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Nama Perusahaan"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2 sm:py-3 bg-primary hover:bg-secondary text-primary-foreground rounded-lg transition font-semibold text-sm sm:text-base"
                >
                  Kirim Konsultasi
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
