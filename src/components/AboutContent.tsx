import { Link } from "react-router-dom"
import { ArrowRight, Award, Factory, MapPin, Microscope, ShieldCheck, Sparkles, TrendingUp, Warehouse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certifications, companyMilestones, companyStats } from "@/data/company"

const manufacturingFeatures = [
  {
    id: "machinery",
    title: "Advanced machinery",
    icon: Factory,
    description:
      "High-precision equipment helps us maintain consistency, finish quality, and production efficiency across board and surface categories.",
    image: "/assets/plywoodfull.png",
  },
  {
    id: "facilities",
    title: "Modern facilities",
    icon: Warehouse,
    description:
      "A process-led manufacturing environment supports reliable production standards, cleaner workflows, and better material handling.",
    image: "/assets/HeroBanner1.png",
  },
  {
    id: "testing",
    title: "Quality testing",
    icon: Microscope,
    description:
      "Material checks, process control, and product validation help ensure dependable performance before products reach dealers and projects.",
    image: "/assets/render_20260316_152145_0.png",
  },
]

const stores = [
  { id: 1, name: "MRM PLY LAM LLP", image: "/modern-plywood-store-exterior-downtown.jpg", city: "Coimbatore" },
  { id: 2, name: "MAHAVIR LAMINATES", image: "/large-plywood-showroom-midtown-storefront.jpg", city: "Coimbatore" },
  { id: 3, name: "M CUBE SPACES LLP", image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg", city: "Bengaluru" },
  { id: 4, name: "MAHAVIR WOODS N VENEER", image: "/modern-wood-materials-store-queens-storefront.jpg", city: "Chennai" },
]

const valuePoints = [
  {
    title: "Quality you can feel and trust",
    description:
      "MRM is shaped around materials that balance long-term reliability, clean finish quality, and practical usability across real interior projects.",
    icon: ShieldCheck,
  },
  {
    title: "Built with market understanding",
    description:
      "The brand reflects years of hands-on insight into what dealers, fabricators, and customers need from boards and decorative surfaces.",
    icon: TrendingUp,
  },
  {
    title: "Growing as a complete material brand",
    description:
      "From plywood and blockboards to laminates, veneers, louvers, and liners, the platform is designed to scale with the portfolio.",
    icon: Sparkles,
  },
]

const AboutContent = () => {
  return (
    <div className="space-y-10 sm:space-y-16">
      <section className="overflow-hidden rounded-[26px] border border-black/6 bg-white shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5 px-4 py-6 sm:space-y-6 sm:px-8 sm:py-8 lg:px-10 lg:py-12">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Who We Are</div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2b2b2b] sm:text-4xl">
              A materials brand built around trust, finish quality, and everyday reliability.
            </h2>
            <p className="text-sm leading-7 text-[#6e6e6e] sm:text-lg sm:leading-8">
              MRM brings together plywood, laminates, laminate liners, louvers, veneers, and interior surface products
              within a single premium brand direction aimed at architecture-led and interior-led projects.
            </p>
            <p className="text-sm leading-7 text-[#6e6e6e] sm:text-base">
              Developed by Rakesh Mehta, with over 25 years of market experience, the brand is grounded in a practical
              understanding of customer expectations and a belief in doing things with consistency, care, and long-term
              intent.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Years of Experience</div>
                <div className="mt-2 text-3xl font-semibold text-[#2b2b2b]">{companyStats.yearsOfExperience}+</div>
              </div>
              <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Happy Dealers</div>
                <div className="mt-2 text-3xl font-semibold text-[#2b2b2b]">{companyStats.happyDealers}+</div>
              </div>
              <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Cities Served</div>
                <div className="mt-2 text-3xl font-semibold text-[#2b2b2b]">{companyStats.citiesServed}+</div>
              </div>
            </div>
          </div>

          <div className="min-h-[260px] bg-[#f7f1e7] sm:min-h-[300px]">
            <img src="/assets/plywoodfull.png" alt="MRM material quality" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {valuePoints.map((point) => (
          <Card key={point.title} className="rounded-[24px] border-black/6 shadow-[0_14px_50px_rgba(34,24,16,0.05)] sm:rounded-[30px]">
            <CardContent className="p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2e8]">
                <point.icon className="h-5 w-5 text-[#f26a21]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#2b2b2b] sm:mt-5 sm:text-xl">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6e6e6e]">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-[26px] border border-black/6 bg-[#fbf8f3] p-4 shadow-[0_16px_60px_rgba(34,24,16,0.05)] sm:rounded-[34px] sm:p-8">
        <div className="mb-6 flex flex-col gap-3 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Manufacturing Direction</div>
            <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Operational strengths behind the brand</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:text-base">
            The same visual rhythm used across the rest of the website now supports the about page too, while still
            explaining how quality, process, and product thinking come together behind MRM.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {manufacturingFeatures.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[24px] border border-black/6 bg-white shadow-[0_12px_40px_rgba(34,24,16,0.05)] sm:rounded-[28px]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-3 p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff2e8]">
                  <item.icon className="h-5 w-5 text-[#f26a21]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2b2b2b] sm:text-xl">{item.title}</h3>
                <p className="text-sm leading-7 text-[#6e6e6e]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[26px] border border-black/6 bg-[#2b2b2b] p-5 text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[32px] sm:p-8">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Timeline</div>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Growth through steady expansion</h2>
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {companyMilestones.slice(0, 5).map((milestone) => (
              <div key={milestone.year} className="rounded-[20px] border border-white/10 bg-white/6 p-4 sm:rounded-[24px] sm:p-5">
                <div className="text-sm font-semibold text-[#f7b488]">{milestone.year}</div>
                <div className="mt-2 text-lg font-semibold">{milestone.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-black/6 bg-white p-5 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[32px] sm:p-8">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Certifications</div>
          <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">Signals of quality and compliance</h2>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {certifications.map((certification) => (
              <div key={certification.name} className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff2e8]">
                  <Award className="h-5 w-5 text-[#f26a21]" />
                </div>
                <div className="mt-4 text-base font-semibold text-[#2b2b2b] sm:text-lg">{certification.name}</div>
                <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">{certification.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[26px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px] sm:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Physical Presence</div>
            <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Our stores and partner touchpoints</h2>
          </div>
          <Link to="/store-locator">
            <Button variant="outline" className="h-11 rounded-full bg-transparent">
              <MapPin className="h-4 w-4" />
              View all stores
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stores.map((store) => (
            <Link
              key={store.id}
              to="/store-locator"
              className="group overflow-hidden rounded-[24px] border border-black/6 bg-[#fbf8f3] shadow-[0_12px_40px_rgba(34,24,16,0.04)] sm:rounded-[28px]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={store.image} alt={store.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{store.city}</div>
                <div className="mt-2 text-base font-semibold text-[#2b2b2b] sm:text-lg">{store.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[26px] border border-black/6 bg-[#f7f1e7] p-4 shadow-[0_16px_60px_rgba(34,24,16,0.05)] sm:rounded-[34px] sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Continue Exploring</div>
            <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">See the product library behind the brand story.</h2>
            <p className="mt-3 text-sm leading-7 text-[#6e6e6e] sm:text-base">
              The about page now sits inside the same premium visual system, so the next step into products or catalogs
              feels seamless instead of disconnected.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/products">
              <Button variant="primary" className="h-11 w-full rounded-full sm:w-auto">
                Explore products
              </Button>
            </Link>
            <Link to="/catalogs">
              <Button variant="outline" className="h-11 w-full rounded-full bg-white sm:w-auto">
                Browse catalogs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutContent
