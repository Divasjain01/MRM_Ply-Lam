import type React from "react"
import { categoryMeta } from "@/lib/site-content"
import type { ProductCategory } from "@/data/enhanced-products"
import { cn } from "@/lib/utils"

interface ProductCategoryNavProps {
  activeCategory: ProductCategory
  onChange: (category: ProductCategory) => void
}

const categories = Object.values(categoryMeta)

const ProductCategoryNav: React.FC<ProductCategoryNavProps> = ({ activeCategory, onChange }) => {
  return (
    <section className="rounded-[28px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[32px] sm:p-5">
      <div className="mb-5 flex flex-col gap-2 px-2">
        <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[#8b6b52]">Browse Families</div>
        <h2 className="text-2xl font-semibold text-[#2b2b2b]">Product categories</h2>
        <p className="text-sm leading-6 text-[#6e6e6e] sm:hidden">Swipe horizontally to explore each product family.</p>
      </div>

      <div className="mobile-slider scrollbar-hidden -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:grid sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none sm:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => {
          const active = activeCategory === category.key

          return (
            <button
              key={category.key}
              type="button"
              onClick={() => onChange(category.key)}
              className={cn(
                "group relative w-[82vw] max-w-[320px] flex-none snap-start overflow-hidden rounded-[22px] border p-3.5 text-left transition-all duration-300 sm:w-auto sm:max-w-none sm:flex-initial sm:rounded-[24px] sm:p-4",
                active
                  ? "border-[#f26a21]/35 bg-[#fff6ef] shadow-[0_12px_36px_rgba(242,106,33,0.12)]"
                  : "border-black/6 bg-[#fbf8f3] hover:-translate-y-0.5 hover:border-[#eadfce] hover:bg-white",
              )}
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-[18px]">
                <img
                  src={category.previewImage}
                  alt={category.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{category.eyebrow}</div>
              <div className="mt-2 text-base font-semibold text-[#2b2b2b]">{category.label}</div>
              <p className="mt-2 text-sm leading-6 text-[#6e6e6e]">{category.shortDescription}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default ProductCategoryNav
