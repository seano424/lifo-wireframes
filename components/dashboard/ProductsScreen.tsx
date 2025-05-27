'use client'

import React, { useState } from 'react'
import { Header } from '../layout/Header'
import { ProductItem } from '../ui/ProductItem'
import { detectProductType } from '../../utils/categoryMapping'
import { UrgentItem } from '../../types'

type FilterType = 'all' | 'fresh' | 'packaged'

interface ProductsScreenProps {
  items: UrgentItem[]
  initialFilterType?: FilterType
  onFilterChange?: (type: FilterType) => void
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  items,
  initialFilterType = 'packaged',
  onFilterChange,
}) => {
  const [filterType, setFilterType] = useState<FilterType>(initialFilterType)

  const handleFilterChange = (type: FilterType) => {
    setFilterType(type)
    onFilterChange?.(type)
  }

  // Filter items based on filterType
  const filteredItems = items.filter((item) => {
    if (filterType === 'all') return true
    return detectProductType(item) === filterType
  })

  // Count items by type
  const freshCount = items.filter(
    (item) => detectProductType(item) === 'fresh'
  ).length
  const packagedCount = items.filter(
    (item) => detectProductType(item) === 'packaged'
  ).length

  return (
    <>
      <Header
        title={`Urgent Items (${filteredItems.length})`}
        leftIcon="←"
        rightIcon="⋮"
      />

      {/* Filters */}
      <div className="px-5 mb-4 space-y-3">
        <div className="flex p-1 bg-white/40 backdrop-blur-xs rounded-xl border border-white/20 shadow-sm">
          {(['all', 'fresh', 'packaged'] as const).map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`flex-1 py-2 px-3 cursor-pointer text-sm font-medium rounded-lg transition-colors ${
                filterType === type
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          Showing {filteredItems.length} items • {freshCount} fresh •{' '}
          {packagedCount} packaged
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
