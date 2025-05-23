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
  <div
    className="flex items-center p-4 rounded-xl
    shadow-lg 
    bg-white/40 backdrop-blur-sm border border-white/20
    hover:shadow-xl
    transition-all duration-300"
  >
    <div
      className={`w-12 h-12 ${
        item.color === 'red' ? 'bg-red-500/90' : 'bg-yellow-500/90'
      } text-white rounded-xl flex items-center justify-center font-bold mr-4
      shadow-lg`}
    >
      {item.score}
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-800/90 text-sm mb-1">
        {item.name}
      </div>
      <div className="text-xs text-gray-600/90 flex flex-col gap-1">
        <span>Expires: {item.expires}</span>
        <span>Stock: {item.stock}</span>
      </div>
    </div>
    <button
      className={`${
        item.color === 'red' ? 'bg-red-500/90' : 'bg-yellow-500/90'
      } text-white px-4 py-2 rounded-xl text-xs font-medium
      shadow-lg max-w-16 flex justify-center items-center
      hover:shadow-xl
      transition-all duration-300`}
    >
      {item.action}
    </button>
  </div>
)
