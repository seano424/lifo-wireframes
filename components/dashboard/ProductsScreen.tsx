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

    <div className="space-y-3 px-5">
      {items.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
        />
      ))}
    </div>

    <div
      className="mt-8 p-4 rounded-xl px-5
      shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
      bg-white/40 backdrop-blur-xs border border-white/20"
    >
      <div className="text-xs text-gray-700/90 text-center flex items-center justify-center gap-2 px-5">
        <span className="text-lg">💡</span>
        <span>
          Tip: Low scores need immediate action. High scores are healthy
          inventory.
        </span>
      </div>
    </div>
  </>
)
