import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsContent from "@/components/ProductsContent"

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="overflow-hidden border-b border-black/5 bg-[#f7f1e7]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Product Discovery</div>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
            Explore MRM product families with a more structured, material-first browse.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6e6e6e] sm:mt-5 sm:text-lg sm:leading-8">
            Navigate by category, collection, and detailed product pages while keeping future catalogues and technical
            sheets closely connected to each material family.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsContent />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage
