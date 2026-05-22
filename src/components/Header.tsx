import { useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight, Menu, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { categoryMeta, decorativeProductsMeta, getFeaturedCategories } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const primaryNavigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Catalogs", href: "/catalogs" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  const categories = useMemo(() => getFeaturedCategories(), [])

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/"
    return location.pathname === href || location.pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/88 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-6 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img src="/MRMLOGO.svg" alt="MRM Ply & Lam" className="h-[60px] w-[60px] object-contain sm:h-[72px] sm:w-[72px] lg:h-[80px] lg:w-[80px]" />
            <div className="min-w-0">
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8b6b52]">MRM</div>
              <div className="truncate text-base font-semibold text-[#2b2b2b] sm:text-lg">Ply & Lam</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNavigation.map((item) =>
              item.name === "Products" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive("/products")
                        ? "bg-[#f5efe6] text-[#2b2b2b]"
                        : "text-[#5f5a55] hover:bg-[#f8f3ec] hover:text-[#2b2b2b]",
                    )}
                  >
                    Products
                  </Link>

                  <div
                    className={cn(
                      "absolute left-0 top-full pt-4 transition-all duration-200",
                      productsOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="w-[760px] rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_24px_80px_rgba(34,24,16,0.14)]">
                      <div className="mb-3 flex items-end justify-between px-2">
                        <div>
                          <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8b6b52]">Material Library</div>
                          <div className="mt-1 text-lg font-semibold text-[#2b2b2b]">Explore product families</div>
                        </div>
                        <Link to="/products" className="text-sm font-medium text-[#f26a21] hover:text-[#d85a17]">
                          View all products
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {categories.map((category) => (
                          <Link
                            key={category.key}
                            to={category.href}
                            className="group overflow-hidden rounded-[22px] border border-black/5 bg-[#fbf8f3] transition-transform duration-300 hover:-translate-y-0.5"
                          >
                            <div className="aspect-[4/3] overflow-hidden">
                              <img
                                src={category.previewImage}
                                alt={category.label}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="space-y-2 p-4">
                              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[#8b6b52]">{category.eyebrow}</div>
                              <div className="text-base font-semibold text-[#2b2b2b]">{category.label}</div>
                              <p className="line-clamp-2 text-sm leading-6 text-[#6e6e6e]">{category.shortDescription}</p>
                            </div>
                          </Link>
                        ))}

                        <Link
                          to={decorativeProductsMeta.href}
                          className="group col-span-3 flex items-center justify-between rounded-[22px] border border-black/5 bg-[#2b2b2b] px-5 py-4 text-white"
                        >
                          <div>
                            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-white/55">Expanded Range</div>
                            <div className="mt-1 text-lg font-semibold">{decorativeProductsMeta.label}</div>
                            <p className="mt-1 text-sm text-white/72">{decorativeProductsMeta.shortDescription}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-white/75 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-[#f5efe6] text-[#2b2b2b]"
                      : "text-[#5f5a55] hover:bg-[#f8f3ec] hover:text-[#2b2b2b]",
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/store-locator"
            className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-[#2b2b2b] transition-colors hover:bg-[#f8f3ec]"
          >
            <Store className="h-4 w-4 text-[#f26a21]" />
            Store Locator
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border border-black/5">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[94vw] border-l border-black/5 bg-[#fbf8f3] p-0 sm:w-[420px]">
            <div className="flex h-full flex-col">
              <div className="border-b border-black/5 px-5 py-5 sm:px-6">
                <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8b6b52]">MRM Ply & Lam</div>
                <div className="mt-1 text-xl font-semibold text-[#2b2b2b] sm:text-2xl">Material navigation</div>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
                <div className="space-y-2">
                  {primaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href) ? "bg-white text-[#2b2b2b] shadow-sm" : "text-[#5f5a55] hover:bg-white",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-7 space-y-3">
                  <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8b6b52]">Products</div>
                  {categories.map((category) => (
                    <Link
                      key={category.key}
                      to={category.href}
                      className="flex items-center gap-3 rounded-[22px] bg-white p-3 shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src={category.previewImage} alt={category.label} className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20" />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-[#2b2b2b]">{category.label}</div>
                        <p className="mt-1 line-clamp-2 text-sm leading-5 text-[#6e6e6e]">{category.shortDescription}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/5 px-5 py-5 sm:px-6">
                <Link
                  to="/store-locator"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2b2b2b] px-4 py-3 text-sm font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Store className="h-4 w-4 text-[#f26a21]" />
                  Visit Store Locator
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
