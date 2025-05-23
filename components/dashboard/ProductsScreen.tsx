import React from 'react'
import { Header } from '../layout/Header'
import { ProductItem } from '../ui/ProductItem'

interface ProductsScreenProps {
  items: Array<{
    id: number
    name: string
    expires: string
    stock: number
    score: number
    action: string
    color: 'red' | 'yellow'
  }>
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({ items }) => (
  <>
    <Header
      title="Urgent Items (5)"
      leftIcon="←"
      rightIcon="⋮"
    />

    {items.map((item) => (
      <ProductItem
        key={item.id}
        item={item}
      />
    ))}

    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <div className="text-xs text-gray-600 text-center">
        💡 Tip: Low scores need immediate action. High scores are healthy
        inventory.
      </div>
    </div>
  </>
) 