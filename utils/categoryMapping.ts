export type ProductType = 'packaged' | 'fresh' | 'unknown'

// Common retail categories mapped to packaged/fresh distinction
export const categoryMapping: Record<string, ProductType> = {
  // Packaged categories
  'Packaged Goods': 'packaged',
  'Canned Goods': 'packaged',
  'Frozen Foods': 'packaged',
  'Pantry': 'packaged',
  'Shelf Stable': 'packaged',
  'Dry Goods': 'packaged',
  'Beverages': 'packaged',
  'Snacks': 'packaged',
  'Bakery Packaged': 'packaged',
  
  // Fresh categories
  'Dairy': 'fresh',
  'Fresh Produce': 'fresh',
  'Meat & Seafood': 'fresh',
  'Bakery Fresh': 'fresh',
  'Deli': 'fresh',
  'Prepared Foods': 'fresh',
  'Ready to Eat': 'fresh',
}

// Keywords for smart detection
const packagedKeywords = [
  'canned',
  'boxed',
  'frozen',
  'bottled',
  'packaged',
  'jar',
  'bag',
  'container',
  'preserved',
  'shelf-stable',
  'dry',
  'powder',
  'mix',
]

const freshKeywords = [
  'fresh',
  'organic',
  'dairy',
  'meat',
  'produce',
  'vegetable',
  'fruit',
  'seafood',
  'fish',
  'chicken',
  'beef',
  'pork',
  'milk',
  'cheese',
  'yogurt',
  'bread',
  'baked',
  'prepared',
  'ready-to-eat',
]

export const detectProductType = (product: {
  category?: string
  name: string
}): ProductType => {
  // Use category if available
  if (product.category) {
    const mappedType = categoryMapping[product.category]
    if (mappedType) return mappedType
  }
  
  // Fallback to name-based detection
  const name = product.name.toLowerCase()
  if (packagedKeywords.some(kw => name.includes(kw))) return 'packaged'
  if (freshKeywords.some(kw => name.includes(kw))) return 'fresh'
  
  return 'unknown'
}

// Helper to get all available categories for the UI
export const getAvailableCategories = (): string[] => {
  return Object.keys(categoryMapping)
} 