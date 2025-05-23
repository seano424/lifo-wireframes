import React from 'react'

interface ProductItemProps {
  item: {
    id: number
    name: string
    expires: string
    stock: number
    score: number
    action: string
    color: 'red' | 'yellow'
  }
}

export const ProductItem: React.FC<ProductItemProps> = ({ item }) => (
  <div className="flex items-center py-3 border-b border-gray-200">
    <div
      className={`w-10 h-10 ${
        item.color === 'red' ? 'bg-red-500' : 'bg-yellow-500'
      } text-white rounded-lg flex items-center justify-center font-bold mr-3`}
    >
      {item.score}
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-800 text-sm">{item.name}</div>
      <div className="text-xs text-gray-600">
        Expires: {item.expires} • Stock: {item.stock}
      </div>
    </div>
    <button
      className={`${
        item.color === 'red' ? 'bg-red-500' : 'bg-yellow-500'
      } text-white px-3 py-1 rounded text-xs font-medium`}
    >
      {item.action}
    </button>
  </div>
) 