import React from 'react'
import { ProductCard } from './ProductCard'
import { ProductItem } from './ProductItem'

interface Product {
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
}

interface ProductListProps {
  items: Product[]
  filterType?: 'all' | 'red' | 'yellow' | 'green'
  variant?: 'card' | 'item'
  onItemClick?: (item: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({
  items,
  filterType = 'all',
  variant = 'card',
  onItemClick,
}) => {
  // Filter items based on filterType
  const filteredItems = items.filter((item) => {
    if (filterType === 'all') return true
    return item.color === filterType
  })

  return (
    <div className="space-y-3 px-5">
      {filteredItems.map((item, index) => {
        if (variant === 'card') {
          return (
            <ProductCard
              key={item.id + item.name + index}
              item={item}
              onClick={() => onItemClick?.(item)}
            />
          )
        }
        return (
          <ProductItem
            key={item.id + item.name + index}
            item={item}
          />
        )
      })}
    </div>
  )
} 