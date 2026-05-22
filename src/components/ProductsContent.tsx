import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import ProductCategoryNav from "@/components/ProductCategoryNav"
import ProductCard from "@/components/ProductCard"
import { slugify } from "@/lib/products"
import { categoryMeta, getCategoryCatalogAssets } from "@/lib/site-content"

interface ProductsContentProps {
  category?: ProductCategory
}

const ProductsContent = ({ category }: ProductsContentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(category || "plyandboards")
  const [thicknessFilter, setThicknessFilter] = useState<string>("all")
  const [warrantyFilter, setWarrantyFilter] = useState<string>("all")
  const [finishFilter, setFinishFilter] = useState<string>("all")

  useEffect(() => {
    if (category) setSelectedCategory(category)
  }, [category])

  useEffect(() => {
    setThicknessFilter("all")
    setWarrantyFilter("all")
    setFinishFilter("all")
  }, [selectedCategory])

  const activeCategory = category || selectedCategory
  const activeMeta = categoryMeta[activeCategory]
  const products = productsData[activeCategory]
  const catalogAssets = getCategoryCatalogAssets(activeCategory)

  const filterOptions = useMemo(() => {
    const thicknesses = new Set<string>()
    const warranties = new Set<string>()
    const finishes = new Set<string>()

    products.forEach((product) => {
      product.thicknessOptions?.forEach((thickness) => thicknesses.add(`${thickness}mm`))
      if (product.warranty) warranties.add(product.warranty)
      if (product.specifications?.finish) finishes.add(product.specifications.finish)
      if (product.specifications?.["Surface Texture"]) finishes.add(product.specifications["Surface Texture"])
    })

    return {
      thicknesses: Array.from(thicknesses).sort((a, b) => Number.parseFloat(a) - Number.parseFloat(b)),
      warranties: Array.from(warranties),
      finishes: Array.from(finishes),
    }
  }, [products])

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (thicknessFilter !== "all" && !product.thicknessOptions?.some((t) => `${t}mm` === thicknessFilter)) {
          return false
        }
        if (warrantyFilter !== "all" && product.warranty !== warrantyFilter) {
          return false
        }
        const finish = product.specifications?.finish || product.specifications?.["Surface Texture"]
        if (finishFilter !== "all" && finish !== finishFilter) {
          return false
        }
        return true
      }),
    [products, thicknessFilter, warrantyFilter, finishFilter],
  )

  return (
    <div className="space-y-8 sm:space-y-10">
      {!category && <ProductCategoryNav activeCategory={selectedCategory} onChange={setSelectedCategory} />}

      {category && (
        <section className="overflow-hidden rounded-[28px] border border-black/6 bg-[#fbf8f3] sm:rounded-[34px]">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-4 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">{activeMeta.eyebrow}</div>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-[#2b2b2b] sm:text-4xl">
                {activeMeta.label}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:text-lg sm:leading-8">{activeMeta.description}</p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
                <div className="rounded-[22px] bg-white px-4 py-4 shadow-sm">
                  <div className="text-[0.66rem] uppercase tracking-[0.2em] text-[#8b6b52]">Category</div>
                  <div className="mt-2 text-base font-semibold text-[#2b2b2b] sm:text-lg">{activeMeta.label}</div>
                </div>
                <div className="rounded-[22px] bg-white px-4 py-4 shadow-sm">
                  <div className="text-[0.66rem] uppercase tracking-[0.2em] text-[#8b6b52]">Products</div>
                  <div className="mt-2 text-2xl font-semibold text-[#2b2b2b]">{products.length}</div>
                </div>
                <div className="rounded-[22px] bg-white px-4 py-4 shadow-sm">
                  <div className="text-[0.66rem] uppercase tracking-[0.2em] text-[#8b6b52]">Catalog Assets</div>
                  <div className="mt-2 text-2xl font-semibold text-[#2b2b2b]">{catalogAssets.length}</div>
                </div>
              </div>
            </div>

            <div className="min-h-[220px] lg:min-h-full">
              <img src={activeMeta.heroImage} alt={activeMeta.label} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[28px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[32px] sm:p-8">
        <div className="mb-5 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Product Index</div>
            <h3 className="mt-2 text-2xl font-semibold text-[#2b2b2b]">Explore the range</h3>
            {!category && (
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="inline-flex w-fit items-center rounded-full bg-[#fff4eb] px-4 py-2 text-sm font-medium text-[#2b2b2b]">
                  {activeMeta.label}
                </div>
                <p className="max-w-2xl text-sm leading-7 text-[#6e6e6e]">{activeMeta.shortDescription}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
            {filterOptions.thicknesses.length > 0 && (
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#8b6b52]">Thickness</label>
                <Select value={thicknessFilter} onValueChange={setThicknessFilter}>
                  <SelectTrigger className="h-11 rounded-full border-[#eadfce] bg-[#fbf8f3]">
                    <SelectValue placeholder="All thicknesses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All thicknesses</SelectItem>
                    {filterOptions.thicknesses.map((thickness) => (
                      <SelectItem key={thickness} value={thickness}>
                        {thickness}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {filterOptions.warranties.length > 0 && (
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#8b6b52]">Warranty</label>
                <Select value={warrantyFilter} onValueChange={setWarrantyFilter}>
                  <SelectTrigger className="h-11 rounded-full border-[#eadfce] bg-[#fbf8f3]">
                    <SelectValue placeholder="All warranties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All warranties</SelectItem>
                    {filterOptions.warranties.map((warranty) => (
                      <SelectItem key={warranty} value={warranty}>
                        {warranty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {filterOptions.finishes.length > 0 && (
              <div className="col-span-2 xl:col-span-1">
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#8b6b52]">Finish</label>
                <Select value={finishFilter} onValueChange={setFinishFilter}>
                  <SelectTrigger className="h-11 rounded-full border-[#eadfce] bg-[#fbf8f3]">
                    <SelectValue placeholder="All finishes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All finishes</SelectItem>
                    {filterOptions.finishes.map((finish) => (
                      <SelectItem key={finish} value={finish}>
                        {finish}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                href={`/products/${activeCategory}/${slugify(product.name)}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] bg-[#fbf8f3] px-5 py-8 text-center sm:px-6 sm:py-10">
            <p className="text-base text-[#6e6e6e] sm:text-lg">No products match the current filters.</p>
            <Button
              variant="link"
              onClick={() => {
                setThicknessFilter("all")
                setWarrantyFilter("all")
                setFinishFilter("all")
              }}
              className="mt-3 text-[#f26a21]"
            >
              Reset filters
            </Button>
          </div>
        )}
      </section>

      <section className="rounded-[28px] border border-black/6 bg-[#2b2b2b] p-5 text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[32px] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/46">Catalog Integration</div>
            <h3 className="mt-2 text-2xl font-semibold">Support this category with curated documentation</h3>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              The product range stays simple to browse, while catalogues and specification files remain connected to each
              category for future expansion.
            </p>
          </div>
          <Link to="/catalogs">
            <Button variant="primary" className="w-full rounded-full sm:w-auto">
              Open Catalogs
            </Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
          {catalogAssets.map((asset) => (
            <div key={asset.id} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-white/45">{asset.type}</div>
                <div className="text-xs text-white/52">
                  {asset.format} · {asset.fileSize}
                </div>
              </div>
              <div className="mt-3 text-lg font-semibold">{asset.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/70">{asset.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsContent
