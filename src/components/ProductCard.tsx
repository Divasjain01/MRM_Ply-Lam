import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/data/enhanced-products"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  href: string
  className?: string
}

const ProductCard = ({ product, href, className }: ProductCardProps) => {
  const image =
    product.image?.startsWith("/") ? product.image : product.image ? `/assets/${product.image}` : "/placeholder.svg"

  return (
    <Link
      to={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-[0_12px_40px_rgba(34,24,16,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(34,24,16,0.11)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f2eb]">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {product.warranty && (
          <div className="absolute left-4 top-4">
            <Badge className="rounded-full border-0 bg-white/92 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-[#2b2b2b] shadow-sm">
              {product.warranty}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[#8b6b52]">Product Detail</div>
        <h3 className="mt-2 text-lg font-semibold leading-tight text-[#2b2b2b] sm:text-xl">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#6e6e6e]">{product.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-full border-[#eadfce] bg-[#fbf8f3] px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#6a6257]">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/6 pt-4">
          <div className="text-xs text-[#6e6e6e] sm:text-sm">
            {product.thicknessOptions?.length ? `Available in ${product.thicknessOptions.length} thickness options` : "Explore specifications"}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#f26a21]">
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
