export type ProductCategory = "plyandboards" | "laminateliners" | "laminates" | "louvers" | "veneers"

export interface Product {
  name: string
  description?: string
  warranty?: string
  tags?: string[]
  thicknessOptions?: number[]
  productImages?: string[]
  image?: string
  features?: string[]
  specs?: string
  specifications?: Record<string, string>
}

export const productsData: Record<ProductCategory, Product[]> = {
  plyandboards: [
    {
      name: "MRM Gold BWP Plywood (Lifetime)",
      description:
        "Premium boiling water proof plywood with lifetime warranty for ultimate durability and peace of mind.",
      warranty: "Lifetime Warranty",
      tags: ["BWP", "Lifetime", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 19],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "MRM Gold BWP Plywood (Lifetime).JPG",
      features: ["Boiling Water Proof", "Lifetime Warranty", "Premium Quality"],
      specs: "Thickness: 4mm-19mm | Grade: BWP | Size: 8ft x 4ft",
      specifications: {
        Type: "BWP Grade",
        Size: "8ft x 4ft (2440mm x 1220mm)",
        Thickness: "4mm to 19mm",
        Core: "100% BWP Grade Selected Core",
        "Face & Back": "100% Gurjan Face & Back",
        Uses: "Kitchen, Bathroom, Outdoor, Exterior, Wet Areas",
      },
    },
    {
      name: "MRM Gold BWP Plywood (25 Years)",
      description: "High-quality boiling water proof plywood with 25-year warranty for long-lasting performance.",
      warranty: "25 Years Warranty",
      tags: ["BWP", "25 Years", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 19],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "MRM Gold BWP Plywood (25 years).JPG",
      features: ["Boiling Water Proof", "25 Years Warranty", "High Durability"],
      specs: "Thickness: 4mm-19mm | Grade: BWP | Size: 8ft x 4ft",
      specifications: {
        Type: "BWP Grade",
        Size: "8ft x 4ft (2440mm x 1220mm)",
        Thickness: "4mm to 19mm",
        Core: "100% BWR Grade Selected Core",
        Face: "Premium Quality Gurjan Face",
        Back: "Selected Hardwood Back",
        Uses: "Kitchen, Bathroom, Outdoor, Exterior, Wet Areas",
      },
    },
    {
      name: "MRM Plywood (MR Grade)",
      description: "Moisture resistant plywood ideal for interior applications with excellent finish quality.",
      warranty: "15 Years Warranty",
      tags: ["MR", "Interior", "Premium"],
      thicknessOptions: [3, 4, 6, 9, 12, 15, 18, 19],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "gold mr.JPG",
      features: ["Moisture Resistant", "Interior Grade", "Smooth Finish"],
      specs: "Thickness: 3mm-19mm | Grade: MR | Size: 8ft x 4ft",
      specifications: {
        Type: "MR Grade (Moisture Resistant)",
        Size: "8ft x 4ft (2440mm x 1220mm)",
        Thickness: "3mm to 19mm",
        Core: "Selected Hardwood Core",
        "Face & Back": "Selected Hardwood",
        Uses: "Interior, Bedroom, Living Room, Office Furniture",
      },
    },
    {
      name: "MRM Calibrated BWP Plywood",
      description: "Premium calibrated boiling water proof plywood with superior thickness tolerance and enhanced durability for precision applications.",
      warranty: "15 Years Warranty",
      tags: ["BWP", "Calibrated", "Precision", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "/assets/CalibratedBWP.JPG",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "CalibratedBWP.JPG",
      features: ["Precision Calibrated", "Boiling Water Proof", "Thickness Tolerance ±0.2mm"],
      specs: "Thickness: 4mm-25mm | Grade: BWP | Calibration: ±0.2mm",
      specifications: {
        Grade: "BWP (Boiling Water Proof)",
        Calibration: "Precision Calibrated",
        "Thickness Tolerance": "±0.2mm",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
        "Formaldehyde Emission": "E1 Grade",
      },
    },
    {
      name: "MRM Calibrated BWR Plywood",
      description: "High-quality calibrated boiling water resistant plywood offering excellent dimensional stability and consistent thickness for demanding applications.",
      warranty: "12 Years Warranty",
      tags: ["BWR", "Calibrated", "Precision", "Durable"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "/assets/CalibratedBWR.JPG",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "CalibratedBWR.JPG",
      features: ["Precision Calibrated", "Boiling Water Resistant", "Dimensional Stability"],
      specs: "Thickness: 4mm-25mm | Grade: BWR | Calibration: ±0.2mm",
      specifications: {
        Grade: "BWR (Boiling Water Resistant)",
        Calibration: "Precision Calibrated",
        "Thickness Tolerance": "±0.2mm",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
        "Formaldehyde Emission": "E1 Grade",
      },
    },
    {
      name: "BWP Blockboard",
      description:
        "High-strength blockboards perfect for furniture and construction applications with superior stability.",
      warranty: "10 Years Warranty",
      tags: ["BWP", "Premium", "Furniture"],
      thicknessOptions: [12, 15, 16, 19],
      productImages: [
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
       image: "BWPBlockboard.JPG",
      features: ["High-Strength", "Stability", "Durable"],
      specs: "Thickness: 12mm-19mm | Grade: BWP | Size: 8ft x 4ft",
      specifications: {
        Type: "BWP Grade",
        Size: "8ft x 4ft (2440mm x 1220mm)",
        Thickness: "12mm to 19mm",
        Core: "100% BWP Grade Sandwich Core",
        "Face & Back": "Premium Quality Gurjan Face",
        Uses: "Kitchen, Bathroom, Outdoor, Door, Exterior",
      },
    },
  ],
  laminateliners: [
    {
      name: "MRM Laminate Liners",
      description: "Laminate Liners are used on the inner sides of wardrobes, cabinets, and drawers to provide a neat finish and protect the surface. They offer a smooth texture and reliable surface protection ideal for interiors.",
      tags: ["Kraft Paper", "Interior", "Protection"],
      thicknessOptions: [0.7, 0.8],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "6127_M2A2170.jpg",
      features: ["Kraft Paper Material", "Smooth Texture", "Surface Protection"],
      specs: "Thickness: 0.7mm & 0.8mm | Size: 8x4 feet | Coverage: 32 sqft",
      specifications: {
        Material: "Kraft Paper",
        Size: "8x4 feet",
        "Coverage Area": "32 sqft",
        Thickness: "0.7mm & 0.8mm",
        Application: "Residential and Commercial (Interior)",
      },
    },
  ],
  laminates: [
    {
      name: "Woodgrain Laminates",
      description: "Natural wood texture laminates that bring warmth and elegance to any interior space.",
      tags: ["Woodgrain", "Natural", "Interior"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "6127_M2A2170.jpg",
      features: ["Natural Woodgrain", "Warm and Elegance"],
      specs: "Thickness: 0.8mm-1.0mm | Surface Texture: Woodgrain Pattern",
      specifications: {
        "Surface Texture": "Woodgrain Pattern",
        "Color Variation": "Natural Variations",
        Thickness: "0.8mm-1.0mm",
      },
    },
    {
      name: "Marble and Stone Laminates",
      description: "Mineral-inspired laminates that combine marble elegance and stone texture for contemporary interiors.",
      tags: ["Marble", "Stone", "Contemporary"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image: "4616_M2A2177.jpg",
      features: ["Marble and Stone Visuals", "Modern Design"],
      specs: "Thickness: 0.8mm-1.0mm | Surface Texture: Marble & Stone Pattern",
      specifications: {
        "Surface Texture": "Marble & Stone Pattern",
        "Color Variation": "Natural Variations",
        Thickness: "0.8mm-1.0mm",
      },
    },
    {
      name: "Solid Color Laminates",
      description: "Vibrant solid color laminates available in a wide range of colors for creative applications.",
      tags: ["Solid Color", "Vibrant", "Creative"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image:"27172.jpg",
      features: ["Vibrant Colors", "Wide Range of Options"],
      specs: "Thickness: 0.8mm-1.0mm | Surface Texture: Solid Color",
      specifications: {
        "Surface Texture": "Solid Color",
        "Color Variation": "Multiple Colors Available",
        Thickness: "0.8mm-1.0mm",
      },
    },
    {
      name: "Decorative Laminates",
      description: "Expressive decorative laminates for statement furniture, feature panels, and design-led interiors.",
      tags: ["Decorative", "Pattern", "Feature"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "/assets/render_20260316_152145_0.png",
      ],
      image: "render_20260316_152145_0.png",
      features: ["Pattern-Led Surfaces", "Design Statement"],
      specs: "Thickness: 0.8mm-1.0mm | Surface Texture: Decorative Pattern",
      specifications: {
        "Surface Texture": "Decorative Pattern",
        "Color Variation": "Curated Design Range",
        Thickness: "0.8mm-1.0mm",
      },
    },
  ],
  louvers: [
    {
      name: "MRM Charcoal Louvers",
      description: "Elegant charcoal louvers for stylish feature walls and modern ceiling designs.",
      tags: ["Charcoal", "Feature Wall", "Modern"],
      productImages: [
        "https://images.unsplash.com/photo-1587387119725-76351a1a456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      image:"Louvers.png",
      features: ["Elegant Charcoal", "Stylish Feature Wall"],
      specs: "Thickness: 0.8mm-1.0mm | Surface Texture: Charcoal Pattern",
      specifications: {
        "Surface Texture": "Charcoal Pattern",
        "Color Variation": "Natural Variations",
        Thickness: "0.8mm-1.0mm",
      }
    },
  ],
  veneers: [
    {
      name: "Natural Wood Veneers",
      description: "Premium natural wood veneers for luxury finishes and sophisticated interior applications.",
      tags: ["Natural", "Luxury", "Premium"],
      thicknessOptions: [0.6, 0.8],
      productImages: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
}
