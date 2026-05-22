import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Download, FileText, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageSliderEnhanced from "@/components/ui/ProductImageSliderEnhanced"
import SpecificationTable from "@/components/SpecificationTable"
import type { Product } from "@/data/enhanced-products"
import { categoryMeta, getCategoryCatalogAssets, getCategoryCollections, getCollectionProducts } from "@/lib/site-content"
import { slugify } from "@/lib/products"

interface ProductDetailContentProps {
  product: Product
  category: string
}

const ProductDetailContent = ({ product, category }: ProductDetailContentProps) => {
  const [selectedThickness, setSelectedThickness] = useState<number | null>(product.thicknessOptions?.[0] || null)

  const activeMeta = categoryMeta[category as keyof typeof categoryMeta]
  const categoryAssets = getCategoryCatalogAssets(category as keyof typeof categoryMeta)
  const relatedProducts = useMemo(() => {
    const collections = getCategoryCollections(category as keyof typeof categoryMeta)
    const collection = collections.find((item) => item.productNames.includes(product.name))
    if (!collection) return []
    return getCollectionProducts(collection).filter((item) => item.name !== product.name).slice(0, 3)
  }, [category, product.name])

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="overflow-hidden rounded-[26px] border border-black/6 bg-white shadow-[0_20px_70px_rgba(34,24,16,0.07)] sm:rounded-[34px]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-black/6 bg-[#fbf8f3] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
            <ProductImageSliderEnhanced images={product.productImages || []} productName={product.name} />
          </div>

          <div className="space-y-6 p-4 sm:space-y-8 sm:p-8 lg:p-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">{activeMeta?.eyebrow || "Product Detail"}</div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#2b2b2b] sm:text-4xl">{product.name}</h1>
              <p className="max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:text-lg sm:leading-8">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.warranty && (
                <Badge className="rounded-full border-0 bg-[#fff1e8] px-4 py-2 text-sm font-medium text-[#f26a21]">
                  {product.warranty}
                </Badge>
              )}
              {product.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full border-[#eadfce] bg-[#fbf8f3] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#6a6257]">
                  {tag}
                </Badge>
              ))}
            </div>

            {product.thicknessOptions && (
              <div className="rounded-[20px] border border-black/6 bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6b52]">Available thickness</div>
                <div className="flex flex-wrap gap-2">
                  {product.thicknessOptions.map((thickness) => (
                    <Button
                      key={thickness}
                      variant={selectedThickness === thickness ? "primary" : "outline"}
                      onClick={() => setSelectedThickness(thickness)}
                      className="rounded-full"
                    >
                      {thickness} mm
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-[20px] border border-black/6 bg-white p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Category</div>
                <div className="mt-2 text-lg font-semibold text-[#2b2b2b]">{activeMeta?.label || "Products"}</div>
              </div>
              <div className="rounded-[20px] border border-black/6 bg-white p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Documentation</div>
                <div className="mt-2 text-lg font-semibold text-[#2b2b2b]">{categoryAssets.length} assets</div>
              </div>
              <div className="rounded-[20px] border border-black/6 bg-white p-4 sm:rounded-[24px]">
                <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">Use Case</div>
                <div className="mt-2 text-lg font-semibold text-[#2b2b2b]">Material-led interiors</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="flex-1">
                <Button size="lg" variant="primary" className="w-full rounded-full">
                  <MessageSquare className="h-4 w-4" />
                  Request quote
                </Button>
              </Link>
              <Link to="/catalogs" className="flex-1">
                <Button size="lg" variant="outline" className="w-full rounded-full bg-transparent">
                  <Download className="h-4 w-4" />
                  Download catalogue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-3 rounded-[22px] bg-[#fbf8f3] p-1 sm:rounded-full">
          <TabsTrigger value="specifications" className="rounded-[18px] px-2 py-2 text-[11px] sm:rounded-full sm:text-sm">
            Specifications
          </TabsTrigger>
          <TabsTrigger value="applications" className="rounded-[18px] px-2 py-2 text-[11px] sm:rounded-full sm:text-sm">
            Applications
          </TabsTrigger>
          <TabsTrigger value="installation" className="rounded-[18px] px-2 py-2 text-[11px] sm:rounded-full sm:text-sm">
            Installation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="mt-6">
          <Card className="rounded-[24px] border-black/6 shadow-[0_12px_50px_rgba(34,24,16,0.05)] sm:rounded-[30px]">
            <CardContent className="p-4 sm:p-8">
              {product.specifications ? (
                <SpecificationTable specifications={product.specifications} />
              ) : (
                <p className="text-[#6e6e6e]">Detailed specifications will be available in the product catalogue.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <Card className="rounded-[24px] border-black/6 shadow-[0_12px_50px_rgba(34,24,16,0.05)] sm:rounded-[30px]">
            <CardContent className="p-4 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2b2b2b] sm:text-xl">Recommended applications</h3>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
                {getApplications(category).map((app) => (
                  <div key={app.title} className="rounded-[18px] border border-black/6 bg-[#fbf8f3] p-4 sm:rounded-[22px] sm:p-5">
                    <div className="text-base font-semibold text-[#2b2b2b]">{app.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">{app.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installation" className="mt-6">
          <Card className="rounded-[24px] border-black/6 shadow-[0_12px_50px_rgba(34,24,16,0.05)] sm:rounded-[30px]">
            <CardContent className="p-4 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2b2b2b] sm:text-xl">Installation guidance</h3>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
                {getInstallationSteps(category).map((step, index) => (
                  <div key={step.title} className="flex gap-3 rounded-[20px] border border-black/6 bg-[#fbf8f3] p-4 sm:gap-4 sm:rounded-[24px] sm:p-5">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#f26a21] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[#2b2b2b]">{step.title}</div>
                      <p className="mt-1 text-sm leading-7 text-[#6e6e6e]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[24px] border border-black/6 bg-[#2b2b2b] p-4 text-white shadow-[0_16px_60px_rgba(34,24,16,0.12)] sm:rounded-[30px] sm:p-8">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-white/46">Catalog Support</div>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">Related documentation</h3>
          <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
            {categoryAssets.slice(0, 3).map((asset) => (
              <div key={asset.id} className="rounded-[18px] border border-white/10 bg-white/6 p-4 sm:rounded-[22px]">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-semibold">{asset.title}</div>
                  <FileText className="h-4 w-4 text-[#f26a21]" />
                </div>
                <p className="mt-2 text-sm leading-6 text-white/68">{asset.description}</p>
              </div>
            ))}
          </div>
          <Link to="/catalogs" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#f7b488] hover:text-white">
            Open catalog library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-[24px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[30px] sm:p-8">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Related Products</div>
          <h3 className="mt-2 text-xl font-semibold text-[#2b2b2b] sm:text-2xl">Continue browsing</h3>
          <div className="mt-5 space-y-3 sm:mt-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((item) => (
                <Link
                  key={item.name}
                  to={`/products/${category}/${slugify(item.name)}`}
                  className="flex items-center justify-between rounded-[18px] bg-[#fbf8f3] px-4 py-4 text-sm text-[#2b2b2b] sm:rounded-[22px]"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="h-4 w-4 text-[#f26a21]" />
                </Link>
              ))
            ) : (
              <p className="text-sm leading-7 text-[#6e6e6e]">
                This product family is ready to support richer related-product journeys as the catalogue expands.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function getApplications(category: string) {
  const applications = {
    plyandboards: [
      { title: "Cabinetry & wardrobes", description: "Reliable board performance for kitchens, bedrooms, and storage systems." },
      { title: "Furniture manufacturing", description: "Suitable for tables, partitions, shelving, and custom furniture work." },
      { title: "Interior fit-outs", description: "Works across commercial joinery, wall build-ups, and modular fabrication." },
      { title: "Door shutters", description: "Stable core structures for durable residential and hospitality door applications." },
    ],
    laminateliners: [
      { title: "Wardrobe interiors", description: "A practical finish for cabinet internals with a neat, consistent appearance." },
      { title: "Drawer systems", description: "Protective liner sheets suited to high-touch storage components." },
      { title: "Cabinet lining", description: "Useful wherever smooth, easy-to-maintain interior surfacing is required." },
    ],
    laminates: [
      { title: "Kitchen shutters", description: "Design-led exterior surfaces with easy maintenance and wide style flexibility." },
      { title: "Furniture surfacing", description: "A clean material palette for wardrobes, tables, entertainment units, and desks." },
      { title: "Feature paneling", description: "Decorative wall and vertical cladding surfaces for visual depth." },
      { title: "Commercial interiors", description: "Suitable for retail, hospitality, and office furniture systems." },
    ],
    louvers: [
      { title: "Feature walls", description: "Adds rhythm and architectural depth to focal surfaces." },
      { title: "Ceiling compositions", description: "Useful in hospitality and premium residential ceiling designs." },
      { title: "Partitions", description: "A refined way to zone space while preserving openness and visual continuity." },
    ],
    veneers: [
      { title: "Luxury joinery", description: "A natural timber finish for wardrobes, paneling, and furniture faces." },
      { title: "Feature surfaces", description: "Warm veneer grain suited to statement walls and curated interior moments." },
      { title: "Hospitality detailing", description: "A premium natural material layer for boutique and upscale commercial projects." },
    ],
  }

  return applications[category as keyof typeof applications] || []
}

function getInstallationSteps(category: string) {
  const steps = {
    plyandboards: [
      { title: "Condition the boards", description: "Allow panels to acclimatize to site conditions before fabrication or installation." },
      { title: "Plan the cutting layout", description: "Organize cuts, grain direction, and edge exposure before machining begins." },
      { title: "Use precise tooling", description: "Fine-tooth blades and calibrated setups reduce chip-out and improve finish quality." },
      { title: "Seal and finish exposed edges", description: "Complete edge treatment and final protection according to project requirements." },
    ],
    laminateliners: [
      { title: "Prepare the substrate", description: "Ensure the internal cabinet surface is clean, dry, and smooth." },
      { title: "Measure accurately", description: "Cut liners precisely to the panel size before adhesive application." },
      { title: "Apply with even pressure", description: "Position carefully and press uniformly for a clean bonded finish." },
    ],
    laminates: [
      { title: "Prepare the base panel", description: "Use a clean, level substrate ready for lamination." },
      { title: "Apply adhesive evenly", description: "Maintain a consistent adhesive spread and follow curing guidelines." },
      { title: "Press and trim", description: "Use even pressure, then finish edges carefully for a premium result." },
    ],
    louvers: [
      { title: "Set the spacing logic", description: "Define rhythm, layout, and intersection points before fixing any element." },
      { title: "Build the sub-frame", description: "Ensure the support structure is true, aligned, and appropriate for the installation." },
      { title: "Install and align", description: "Fix louvers carefully while checking spacing and continuity through the full run." },
    ],
    veneers: [
      { title: "Prepare the backing", description: "A smooth, stable substrate is essential for a consistent veneer finish." },
      { title: "Match grain direction", description: "Plan veneer sequencing to maintain a coherent visual pattern." },
      { title: "Press and finish", description: "Bond evenly, sand carefully, and protect the natural face with the right top coat." },
    ],
  }

  return steps[category as keyof typeof steps] || []
}

export default ProductDetailContent
