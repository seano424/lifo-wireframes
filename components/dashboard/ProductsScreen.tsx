import React from 'react'
import { Header } from '../layout/Header'
import { ProductItem } from '../ui/ProductItem'
import { detectProductType } from '../../utils/categoryMapping'

interface ProductsScreenProps {
  items: Array<{
    id: number
    name: string
    brand: string
    packageSize: string
    sku: string
    expires: string
    stock: number
    score: number
    action: string
    color: 'red' | 'yellow'
    thumbnail: string
    category: string
  }>
  showPackagedOnly?: boolean
  onTogglePackagedOnly?: () => void
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  items,
  showPackagedOnly = true,
  onTogglePackagedOnly,
}) => {
  // Filter items based on showPackagedOnly
  const filteredItems = showPackagedOnly 
    ? items.filter(item => detectProductType(item) === 'packaged')
    : items

  // Count items by type
  const freshCount = items.filter(item => detectProductType(item) === 'fresh').length
  const packagedCount = items.filter(item => detectProductType(item) === 'packaged').length

  return (
    <>
      <Header
        title={`Urgent Items (${filteredItems.length})`}
        leftIcon="←"
        rightIcon="⋮"
      />

      {/* Filters */}
      <div className="px-5 mb-4 space-y-3">
        <label className="flex items-center justify-between p-3 bg-white/40 backdrop-blur-xs rounded-xl border border-white/20 shadow-sm">
          <span className="text-sm font-medium text-gray-700">
            Packaged Products Only
          </span>
          <button
            onClick={onTogglePackagedOnly}
            className={`relative inline-flex h-6 w-11 items-center cursor-pointer rounded-full transition-colors focus:outline-none ${
              showPackagedOnly ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showPackagedOnly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </label>

        <div className="text-xs text-gray-500">
          Showing {filteredItems.length} items • {freshCount} fresh • {packagedCount} packaged
        </div>
      </div>

      <div className="space-y-3 px-5">
        {filteredItems.map((item, index) => (
          <ProductItem
            key={item.id + item.name + index}
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
}
