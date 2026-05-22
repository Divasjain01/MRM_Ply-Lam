import { productsData, type Product, type ProductCategory } from "@/data/enhanced-products"

export interface CategoryMeta {
  key: ProductCategory
  label: string
  navLabel: string
  href: string
  shortDescription: string
  description: string
  eyebrow: string
  heroImage: string
  previewImage: string
}

export interface ProductCollection {
  id: string
  title: string
  description: string
  image: string
  category: ProductCategory
  productNames: string[]
  comingSoon?: boolean
}

export interface CatalogAsset {
  id: string
  title: string
  description: string
  type: "Catalogue" | "Technical Sheet" | "Brochure" | "Specification File"
  format: "PDF" | "ZIP" | "MP4"
  fileSize: string
  url: string
  category: ProductCategory
  collectionId?: string
}

export const categoryMeta: Record<ProductCategory, CategoryMeta> = {
  plyandboards: {
    key: "plyandboards",
    label: "Plywood & Boards",
    navLabel: "Plywood & Boards",
    href: "/products/plyandboards",
    shortDescription: "Structural boards, calibrated plywood, and dependable blockboards.",
    description:
      "High-performance plywood and blockboards engineered for joinery, furniture, and interior build applications where consistency and long-term reliability matter.",
    eyebrow: "Core Materials",
    heroImage: "/assets/plywoodfull.png",
    previewImage: "/assets/CalibratedBWP.JPG",
  },
  laminates: {
    key: "laminates",
    label: "Laminates",
    navLabel: "Laminates",
    href: "/products/laminates",
    shortDescription: "Decorative surfaces across wood, stone, marble, and solid colour stories.",
    description:
      "Curated laminate surfaces that balance visual depth, durability, and design flexibility for residential and commercial interiors.",
    eyebrow: "Decorative Surfaces",
    heroImage: "/assets/6127_M2A2170.jpg",
    previewImage: "/assets/4616_M2A2177.jpg",
  },
  veneers: {
    key: "veneers",
    label: "Veneers",
    navLabel: "Veneers",
    href: "/products/veneers",
    shortDescription: "Natural timber expressions for premium interior detailing.",
    description:
      "Rich veneer surfaces selected for warmth, grain character, and understated luxury across millwork, wardrobes, feature walls, and furniture.",
    eyebrow: "Natural Finishes",
    heroImage: "/assets/Productimagesample.JPG",
    previewImage: "/assets/Productimagesample.JPG",
  },
  louvers: {
    key: "louvers",
    label: "Louvers",
    navLabel: "Louvers",
    href: "/products/louvers",
    shortDescription: "Architectural profiles for feature walls, partitions, and ceilings.",
    description:
      "Contemporary louver systems designed to introduce rhythm, depth, and a refined architectural language into interior spaces.",
    eyebrow: "Architectural Elements",
    heroImage: "/assets/Louvers.png",
    previewImage: "/assets/Louvers.png",
  },
  laminateliners: {
    key: "laminateliners",
    label: "Laminate Liners",
    navLabel: "Laminate Liners",
    href: "/products/laminateliners",
    shortDescription: "Clean, protective liner surfaces for wardrobes, drawers, and cabinets.",
    description:
      "Reliable interior liner sheets that complete cabinetry with a durable finish, clean appearance, and easy-to-maintain surface layer.",
    eyebrow: "Interior Utility",
    heroImage: "/assets/6127_M2A2170.jpg",
    previewImage: "/assets/6127_M2A2170.jpg",
  },
}

export const decorativeProductsMeta = {
  label: "Decorative Products",
  href: "/products/laminates",
  shortDescription: "A broader family of MRM surface-led and feature-led decorative materials.",
  previewImage: "/assets/render_20260316_152145_0.png",
}

export const productCollections: ProductCollection[] = [
  {
    id: "bwp-plywood",
    title: "BWP Plywood",
    description: "Waterproof plywood solutions for kitchens, wet areas, and long-life joinery.",
    image: "/assets/MRM Gold BWP Plywood (Lifetime).JPG",
    category: "plyandboards",
    productNames: ["MRM Gold BWP Plywood (Lifetime)", "MRM Gold BWP Plywood (25 Years)"],
  },
  {
    id: "mr-plywood",
    title: "MR Grade Plywood",
    description: "Dependable interior plywood for cabinetry, wardrobes, and everyday furniture making.",
    image: "/assets/gold mr.JPG",
    category: "plyandboards",
    productNames: ["MRM Plywood (MR Grade)"],
  },
  {
    id: "calibrated-boards",
    title: "Calibrated Plywood",
    description: "Precision-calibrated boards where uniformity, machinability, and finish quality matter.",
    image: "/assets/CalibratedBWP.JPG",
    category: "plyandboards",
    productNames: ["MRM Calibrated BWP Plywood", "MRM Calibrated BWR Plywood"],
  },
  {
    id: "blockboards",
    title: "Blockboards",
    description: "Stable core boards developed for shutters, partitions, wardrobes, and furniture panels.",
    image: "/assets/BWPBlockboard.JPG",
    category: "plyandboards",
    productNames: ["BWP Blockboard"],
  },
  {
    id: "wood-laminates",
    title: "Wood Laminates",
    description: "Warm wood expressions for cabinetry, furniture, and hospitality-led interiors.",
    image: "/assets/6127_M2A2170.jpg",
    category: "laminates",
    productNames: ["Woodgrain Laminates"],
  },
  {
    id: "stone-marble-laminates",
    title: "Stone & Marble Laminates",
    description:
      "A single mineral-inspired laminate collection covering both stone texture and marble-look decorative surfaces.",
    image: "/assets/4616_M2A2177.jpg",
    category: "laminates",
    productNames: ["Stone Laminates"],
    comingSoon: true,
  },
  {
    id: "abstract-laminates",
    title: "Abstract Laminates",
    description: "Pattern-led surfaces designed for expressive spaces and future decorative ranges.",
    image: "/assets/render_20260316_152145_0.png",
    category: "laminates",
    productNames: [],
    comingSoon: true,
  },
  {
    id: "solid-colour-laminates",
    title: "Solid Colour Laminates",
    description: "Flat colour surfaces for sharp contemporary interiors and coordinated joinery palettes.",
    image: "/assets/27172.jpg",
    category: "laminates",
    productNames: ["Solid Color Laminates"],
  },
  {
    id: "natural-veneers",
    title: "Natural Veneers",
    description: "Authentic timber veneers for premium residential and boutique commercial interiors.",
    image: "/assets/Productimagesample.JPG",
    category: "veneers",
    productNames: ["Natural Wood Veneers"],
  },
  {
    id: "charcoal-louvers",
    title: "Charcoal Louvers",
    description: "Rhythmic louver sections for architectural feature walls and ceiling compositions.",
    image: "/assets/Louvers.png",
    category: "louvers",
    productNames: ["MRM Charcoal Louvers"],
  },
  {
    id: "interior-liners",
    title: "Interior Laminate Liners",
    description: "Purpose-built liner sheets for clean cabinetry interiors and practical surface protection.",
    image: "/assets/6127_M2A2170.jpg",
    category: "laminateliners",
    productNames: ["MRM Laminate Liners"],
  },
]

export const catalogAssets: CatalogAsset[] = [
  {
    id: "plywood-master-catalogue",
    title: "Plywood & Boards Master Catalogue",
    description: "Core range overview covering waterproof plywood, calibrated boards, and blockboards.",
    type: "Catalogue",
    format: "PDF",
    fileSize: "12.5 MB",
    url: "/brochures/mrm-plywood-complete-range.pdf",
    category: "plyandboards",
  },
  {
    id: "plywood-tech-specs",
    title: "Plywood Technical Specification Set",
    description: "Sheet formats, thickness matrix, and performance notes for site and factory reference.",
    type: "Technical Sheet",
    format: "PDF",
    fileSize: "2.8 MB",
    url: "/brochures/technical-specifications.pdf",
    category: "plyandboards",
  },
  {
    id: "laminates-catalogue",
    title: "Decorative Laminates Catalogue",
    description: "Curated laminate stories across wood, stone, and colour-led decorative surfaces.",
    type: "Catalogue",
    format: "PDF",
    fileSize: "8.2 MB",
    url: "/brochures/ply-boards-laminates.pdf",
    category: "laminates",
  },
  {
    id: "laminates-brochure",
    title: "Laminates Collection Brochure",
    description: "An overview of design directions and application possibilities for the laminate line.",
    type: "Brochure",
    format: "PDF",
    fileSize: "4.1 MB",
    url: "/brochures/installation-guidelines.pdf",
    category: "laminates",
  },
  {
    id: "veneer-louver-catalogue",
    title: "Veneers & Louvers Catalogue",
    description: "A premium finishes catalogue for feature surfaces, paneling, and warm material palettes.",
    type: "Catalogue",
    format: "PDF",
    fileSize: "6.8 MB",
    url: "/brochures/louvers-veneers.pdf",
    category: "veneers",
  },
  {
    id: "louvers-spec-file",
    title: "MRM Louvers Catalogue",
    description: "Louver range overview with design direction and product reference for architectural applications.",
    type: "Specification File",
    format: "PDF",
    fileSize: "Available PDF",
    url: "/catalogs/louvers/MRM_Louvers.pdf",
    category: "louvers",
  },
  {
    id: "liners-catalogue",
    title: "MRM Inner Laminates and Liner",
    description: "Product catalogue covering inner laminate and liner surfaces for cabinetry and utility applications.",
    type: "Catalogue",
    format: "PDF",
    fileSize: "Available PDF",
    url: "/catalogs/laminateliners/MRM%20Inner%20Laminates%20and%20Liner.pdf",
    category: "laminateliners",
  },
]

export function getCategoryCollections(category: ProductCategory) {
  return productCollections.filter((collection) => collection.category === category)
}

export function getCollectionProducts(collection: ProductCollection): Product[] {
  const products = productsData[collection.category]
  return products.filter((product) => collection.productNames.includes(product.name))
}

export function getCategoryCatalogAssets(category: ProductCategory) {
  return catalogAssets.filter((asset) => asset.category === category)
}

export function getFeaturedCategories() {
  return [
    categoryMeta.plyandboards,
    categoryMeta.laminates,
    categoryMeta.veneers,
    categoryMeta.louvers,
    categoryMeta.laminateliners,
  ]
}
