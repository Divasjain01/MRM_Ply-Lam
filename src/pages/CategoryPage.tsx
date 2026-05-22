import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsContent from "@/components/ProductsContent"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import { categoryMeta } from "@/lib/site-content"

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !Object.keys(productsData).includes(slug)) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-[#2b2b2b]">Category not found</h1>
          <p className="mt-4 text-[#6e6e6e]">The requested material family does not exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const meta = categoryMeta[slug as ProductCategory]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="overflow-hidden border-b border-black/5 bg-[#f7f1e7]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">{meta.eyebrow}</div>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
            {meta.label}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#6e6e6e] sm:text-lg">{meta.description}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsContent category={slug as ProductCategory} />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CategoryPage
