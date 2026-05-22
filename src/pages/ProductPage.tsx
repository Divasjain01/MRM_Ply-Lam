import { Link, useParams } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailContent from "@/components/ProductDetailContent"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import { slugify } from "@/lib/products"
import { categoryMeta } from "@/lib/site-content"

const ProductPage = () => {
  const { slug, id: productSlug } = useParams<{ slug: string; id: string }>()

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

  const products = productsData[slug as ProductCategory]
  const product = products.find((p) => slugify(p.name) === productSlug)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-[#2b2b2b]">Product not found</h1>
          <p className="mt-4 text-[#6e6e6e]">The requested product does not exist in this category.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const meta = categoryMeta[slug as ProductCategory]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="border-b border-black/5 bg-[#fbf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#6e6e6e]">
            <Link to="/" className="transition-colors hover:text-[#f26a21]">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="transition-colors hover:text-[#f26a21]">
              Products
            </Link>
            <span>/</span>
            <Link to={`/products/${slug}`} className="transition-colors hover:text-[#f26a21]">
              {meta?.label || slug}
            </Link>
            <span>/</span>
            <span className="font-medium text-[#2b2b2b]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductDetailContent product={product} category={slug} />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductPage
