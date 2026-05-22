import { Link } from "react-router-dom"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { categoryMeta, getFeaturedCategories } from "@/lib/site-content"

const Footer = () => {
  const categories = getFeaturedCategories()

  return (
    <footer className="overflow-hidden bg-[#1f1d1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:gap-10 sm:pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                <img src="/MRMLOGO.svg" alt="MRM Ply & Lam" className="h-10 w-auto brightness-0 invert" />
              </div>
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.24em] text-white/45">MRM</div>
                <div className="text-2xl font-semibold">Ply & Lam</div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/72 sm:text-base">
              Premium plywood, laminates, veneers, louvers, and interior surface systems curated for architects,
              interior designers, dealers, and material-led projects across India.
            </p>

            <div className="grid gap-3">
              <Link
                to="/catalogs"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/8"
              >
                Explore Catalogs
              </Link>
              <Link
                to="/products"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/6 hover:text-white"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Products</div>
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.key}
                  to={category.href}
                  className="group flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-white/78 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span>{category.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f26a21]" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Navigate</div>
            <div className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Catalogs", href: "/catalogs" },
                { label: "Store Locator", href: "/store-locator" },
                { label: "Login", href: "/login" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block rounded-2xl px-3 py-2 text-sm text-white/78 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Contact</div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-none text-[#f26a21]" />
                <p className="text-sm leading-6 text-white/74">
                  MRM Ply & Lam LLP
                  <br />
                  No. 170, Mettupalayam Road
                  <br />
                  Coimbatore, Tamil Nadu 641043
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <a href="tel:+919629015535" className="flex items-center gap-3 text-sm text-white/78 hover:text-white">
                  <Phone className="h-4 w-4 text-[#f26a21]" />
                  +91 96290 15535
                </a>
                <a href="mailto:info@mrmplylam.com" className="flex items-center gap-3 text-sm text-white/78 hover:text-white">
                  <Mail className="h-4 w-4 text-[#f26a21]" />
                  info@mrmplylam.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md">© 2026 MRM Ply & Lam. Premium materials for refined interiors.</p>
          <div className="flex flex-wrap gap-4">
            <Link to={categoryMeta.plyandboards.href} className="hover:text-white/70">
              Product Library
            </Link>
            <Link to="/catalogs" className="hover:text-white/70">
              Catalogs
            </Link>
            <Link to="/contact" className="hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
