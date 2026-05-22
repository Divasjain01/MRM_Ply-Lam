import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, Headphones, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team for product guidance, dealer enquiries, and support.",
    contact: "+91 96290 15535",
    hours: "Mon-Sat: 9AM-6PM IST",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Share project details or documentation requests and we will respond within one business day.",
    contact: "info@mrmplylam.com",
    hours: "24 hour response",
    action: "Send email",
  },
]

const storeHighlights = [
  { id: 1, name: "MRM PLY LAM LLP", image: "/modern-plywood-store-exterior-downtown.jpg", city: "Coimbatore" },
  { id: 2, name: "MAHAVIR LAMINATES", image: "/large-plywood-showroom-midtown-storefront.jpg", city: "Coimbatore" },
  { id: 3, name: "M CUBE SPACES LLP", image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg", city: "Bengaluru" },
  { id: 4, name: "MAHAVIR WOODS N VENEER", image: "/modern-wood-materials-store-queens-storefront.jpg", city: "Chennai" },
]

const faqs = [
  {
    question: "What are your response times?",
    answer:
      "Phone calls are handled during business hours, and email enquiries are typically answered within 24 hours.",
  },
  {
    question: "Can I get product or technical guidance?",
    answer:
      "Yes. We can help with product shortlisting, catalog guidance, and material-related support before purchase.",
  },
  {
    question: "Do you support dealership enquiries?",
    answer:
      "Yes. Use the contact form or call us directly and our team will guide you through the next steps.",
  },
  {
    question: "Can I visit a store instead?",
    answer:
      "Yes. You can browse our store network and visit the nearest location for a more in-person consultation.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="overflow-hidden border-b border-black/5 bg-[#f7f1e7]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Contact</div>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
              Reach MRM through the same clear, premium experience as the rest of the platform.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6e6e6e] sm:mt-5 sm:text-lg sm:leading-8">
              Connect for product enquiries, dealership conversations, support requests, or store visits through a
              more refined and structured contact journey.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8">
            <section className="grid gap-5 sm:gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <Card className="rounded-[26px] border-black/6 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px]">
                <CardContent className="p-5 sm:p-8">
                  <div className="mb-6">
                    <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Send A Message</div>
                    <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">Tell us what you need</h2>
                    <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">
                      Share your project, product requirement, or support query and our team will get back to you.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="rounded-[24px] bg-[#fbf8f3] px-5 py-10 text-center">
                      <CheckCircle className="mx-auto h-14 w-14 text-green-600" />
                      <h3 className="mt-4 text-xl font-semibold text-[#2b2b2b]">Message sent successfully</h3>
                      <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">
                        Thank you for contacting us. We will respond as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2 h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] px-4"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] px-4"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2 h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] px-4"
                          />
                        </div>

                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="mt-2 h-12 w-full rounded-full border border-[#eadfce] bg-[#fbf8f3] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="general">General</option>
                            <option value="product">Product enquiry</option>
                            <option value="dealership">Dealership</option>
                            <option value="others">Others</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="mt-2 rounded-[24px] border-[#eadfce] bg-[#fbf8f3] px-4 py-4"
                          placeholder="Please share details about your enquiry, project, or support requirement..."
                        />
                      </div>

                      <Button type="submit" className="h-11 w-full rounded-full" size="lg" variant="primary">
                        <Send className="mr-2 h-4 w-4" />
                        Send message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <section className="space-y-5 sm:space-y-6">
                <Card className="rounded-[26px] border-black/6 bg-[#2b2b2b] text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[34px]">
                  <CardContent className="p-5 sm:p-8">
                    <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Direct Contact</div>
                    <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Talk to the right team faster</h2>
                    <div className="mt-6 space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                            <method.icon className="h-5 w-5 text-[#f7b488]" />
                          </div>
                          <h3 className="mt-4 text-lg font-semibold">{method.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/70">{method.description}</p>
                          <div className="mt-4 text-base font-semibold">{method.contact}</div>
                          <Badge className="mt-3 rounded-full border-0 bg-white/10 px-3 py-1 text-xs text-white/80">
                            {method.hours}
                          </Badge>
                          <Button
                            className="mt-5 h-11 w-full rounded-full border-white/15 bg-white/8 text-white hover:bg-white/14"
                            variant="outline"
                            onClick={() => {
                              if (method.title === "Call Us") {
                                window.open(`tel:${method.contact}`, "_self")
                              } else {
                                window.open(`mailto:${method.contact}`, "_self")
                              }
                            }}
                          >
                            {method.action}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[26px] border-black/6 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px]">
                  <CardContent className="p-5 sm:p-8">
                    <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Main Office</div>
                    <h3 className="mt-2 text-2xl font-semibold text-[#2b2b2b]">Coimbatore contact point</h3>
                    <div className="mt-6 space-y-4 text-sm leading-7 text-[#6e6e6e]">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-4 w-4 flex-none text-[#f26a21]" />
                        <span>No. 170, Mettupalayam Road, Coimbatore, Tamil Nadu 641043</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-4 w-4 flex-none text-[#f26a21]" />
                        <span>+91 96290 15535</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-4 w-4 flex-none text-[#f26a21]" />
                        <span>info@mrmplylam.com</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-4 w-4 flex-none text-[#f26a21]" />
                        <span>Monday to Saturday, 9:00 AM to 6:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </section>

            <section className="rounded-[26px] border border-black/6 bg-[#fbf8f3] p-4 shadow-[0_16px_60px_rgba(34,24,16,0.05)] sm:rounded-[34px] sm:p-8">
              <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Store Network</div>
                  <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Visit a store near you</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:text-base">
                    Explore our physical touchpoints for a more direct consultation and in-person material discovery.
                  </p>
                </div>
                <Link to="/store-locator">
                  <Button variant="outline" className="h-11 rounded-full bg-white">
                    <MapPin className="h-4 w-4" />
                    View all stores
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
                {storeHighlights.map((store) => (
                  <Link
                    key={store.id}
                    to="/store-locator"
                    className="group overflow-hidden rounded-[24px] border border-black/6 bg-white shadow-[0_12px_40px_rgba(34,24,16,0.04)] sm:rounded-[28px]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={store.image}
                        alt={`${store.name} storefront`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{store.city}</div>
                      <div className="mt-2 text-base font-semibold text-[#2b2b2b] sm:text-lg">{store.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="grid gap-5 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <Card className="rounded-[26px] border-black/6 bg-[#2b2b2b] text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[34px]">
                <CardContent className="p-5 sm:p-8">
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Support Promise</div>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Clear communication, practical assistance</h2>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
                      <Headphones className="h-5 w-5 text-[#f7b488]" />
                      <div className="mt-3 text-lg font-semibold">Material guidance</div>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Help with category selection, surface direction, and product-family navigation.
                      </p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
                      <MessageSquare className="h-5 w-5 text-[#f7b488]" />
                      <div className="mt-3 text-lg font-semibold">Project discussion</div>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Reach out early if you need support around requirements, specifications, or coordination.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[26px] border-black/6 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px]">
                <CardContent className="p-5 sm:p-8">
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">FAQ</div>
                  <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">Common questions</h2>
                  <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
                    {faqs.map((item) => (
                      <div key={item.question} className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                        <div className="text-base font-semibold text-[#2b2b2b]">{item.question}</div>
                        <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
