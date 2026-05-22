import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowRight, Award, CheckCircle2, MapPin, Shield, SwatchBook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categoryMeta, getFeaturedCategories } from "@/lib/site-content"

const stores = [
  { id: 1, name: "MRM PLY LAM LLP", image: "/modern-plywood-store-exterior-downtown.jpg", city: "Coimbatore" },
  { id: 2, name: "MAHAVIR LAMINATES", image: "/large-plywood-showroom-midtown-storefront.jpg", city: "Coimbatore" },
  { id: 3, name: "M CUBE SPACES LLP", image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg", city: "Bengaluru" },
]

const features = [
  {
    icon: Shield,
    title: "Warranty-backed confidence",
    description: "Premium plywood ranges with long-term assurances that support design confidence and project durability.",
  },
  {
    icon: Award,
    title: "Built for premium interiors",
    description: "A material portfolio shaped around refined residential, retail, hospitality, and commercial spaces.",
  },
  {
    icon: CheckCircle2,
    title: "Practical technical depth",
    description: "Structured documentation, thickness options, and category-led product discovery for faster specification.",
  },
]

const HomePage = () => {
  const featuredCategories = getFeaturedCategories()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden border-b border-black/5 bg-[#f7f1e7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,106,33,0.08),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,107,82,0.14),_transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#8b6b52]">Premium Architectural Materials</div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
              Surfaces and boards curated for refined interior projects.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:text-lg sm:leading-8">
              MRM Ply & Lam brings together structural boards, decorative laminates, veneers, louvers, and interior
              surfacing in a browsing experience built for architects, designers, dealers, and project teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products">
                <Button variant="primary" size="lg" className="w-full rounded-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
              <Link to="/catalogs">
                <Button variant="outline" size="lg" className="w-full rounded-full bg-white sm:w-auto">
                  Browse Catalogs
                </Button>
              </Link>
            </div>

          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] sm:col-span-2">
              <img src="/assets/HeroBanner1.png" alt="MRM premium surfaces" className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[500px]" />
            </div>
            <div className="overflow-hidden rounded-[28px] sm:col-span-2">
              <img src="/assets/render_20260316_152145_0.png" alt="Curated material palette" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Product Families</div>
              <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">A curated material library</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-[#f26a21] hover:text-[#d85a17]">
              Explore all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            <Link to={categoryMeta.plyandboards.href} className="group relative overflow-hidden rounded-[32px] lg:row-span-2">
              <img src={categoryMeta.plyandboards.heroImage} alt={categoryMeta.plyandboards.label} className="h-full min-h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:min-h-[460px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white sm:p-8">
                <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/58">{categoryMeta.plyandboards.eyebrow}</div>
                <div className="mt-3 text-2xl font-semibold sm:text-3xl">{categoryMeta.plyandboards.label}</div>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/74">{categoryMeta.plyandboards.shortDescription}</p>
              </div>
            </Link>

            {featuredCategories.slice(1).map((category) => (
              <Link key={category.key} to={category.href} className="group overflow-hidden rounded-[28px] border border-black/6 bg-[#fbf8f3]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={category.previewImage} alt={category.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-2 p-4 sm:p-5">
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{category.eyebrow}</div>
                  <div className="text-lg font-semibold text-[#2b2b2b] sm:text-xl">{category.label}</div>
                  <p className="text-sm leading-7 text-[#6e6e6e]">{category.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f3] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:gap-10">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Brand Direction</div>
            <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Premium materials, presented with more clarity</h2>
            <p className="mt-4 text-sm leading-7 text-[#6e6e6e] sm:text-lg sm:leading-8">
              The platform is designed to move beyond a generic catalogue into a more editorial, project-oriented
              browsing experience, while staying lightweight, maintainable, and ready for future material additions.
            </p>

            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[26px] border border-black/6 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-[#fff2e8]">
                      <feature.icon className="h-5 w-5 text-[#f26a21]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-[#2b2b2b]">{feature.title}</div>
                      <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] sm:col-span-2">
              <img src="/assets/plywoodfull.png" alt="MRM plywood and surface systems" className="h-[220px] w-full object-cover sm:h-[320px]" />
            </div>
            <Link to="/catalogs" className="rounded-[28px] bg-[#2b2b2b] p-6 text-white">
              <SwatchBook className="h-6 w-6 text-[#f7b488]" />
              <div className="mt-6 text-2xl font-semibold">Catalog Library</div>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Category-wise brochures, technical sheets, and future collection PDFs in one structured place.
              </p>
            </Link>
            <div className="overflow-hidden rounded-[28px]">
              <img src="/assets/Productimagesample.JPG" alt="MRM product material preview" className="h-full min-h-[230px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Physical Presence</div>
              <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Visit our stores</h2>
            </div>
            <Link to="/store-locator">
              <Button variant="outline" className="rounded-full bg-white">
                <MapPin className="h-4 w-4" />
                View all stores
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {stores.map((store) => (
              <Link key={store.id} to="/store-locator" className="group overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-[0_14px_50px_rgba(34,24,16,0.05)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={store.image} alt={store.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{store.city}</div>
                  <div className="mt-2 text-lg font-semibold text-[#2b2b2b] sm:text-xl">{store.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2b2b2b] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">Next Step</div>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Start with products, catalogs, or a store visit.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/products">
              <Button variant="primary" size="lg" className="w-full rounded-full sm:w-auto">
                Explore Products
              </Button>
            </Link>
            <Link to="/catalogs">
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                Download Catalogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
