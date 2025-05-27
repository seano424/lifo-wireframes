'use client'

import React, { useState } from 'react'
import { ProductModal } from './ProductModal'

interface ProductCardProps {
  item: {
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
  onClick?: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onClick }) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex p-4 rounded-xl
        shadow-lg cursor-pointer
        bg-white/40 backdrop-blur-xs border border-white/20
        hover:shadow-xl
        transition-all duration-300 w-full"
      >
        <div
          className={`w-12 h-12 ${
            (item.color === 'red' && 'bg-red-500/90') ||
            (item.color === 'yellow' && 'bg-yellow-500/90') ||
            (item.color === 'green' && 'bg-green-500/90')
          } text-white rounded-xl flex items-center justify-center text-xl mr-4
          shadow-lg`}
        >
          {item.thumbnail}
        </div>
        <div className="flex-1 min-w-0 flex flex-col items-start">
          <div className="font-semibold text-gray-800/90 text-sm mb-1 text-left">
            {item.brand} {item.name}
          </div>
          <div className="text-xs text-gray-600/90 flex flex-col gap-1">
            <span className="truncate flex">
              {item.packageSize} • SKU: {item.sku}
            </span>
            <span>
              Expires: {item.expires} • Stock: {item.stock}
            </span>
          </div>
        </div>
      </button>

      {showModal && (
        <ProductModal
          item={item}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
