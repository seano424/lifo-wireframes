export interface UrgentItem {
  id: number
  name: string
  brand: string
  packageSize: string
  sku: string
  expires: string
  stock: number
  score: number
  action: string
  color: 'red' | 'yellow' | 'green'
  thumbnail: string
  cost: string
  totalValue: string
  category: string
} 