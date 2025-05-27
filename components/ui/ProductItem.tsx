import React, { useState } from 'react'

interface ProductItemProps {
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
    color: 'red' | 'yellow'
    thumbnail: string
    category: string
  }
}

export const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex p-4 rounded-xl
        shadow-lg cursor-pointer
        bg-white/40 backdrop-blur-xs border border-white/20
        hover:shadow-xl
        transition-all duration-300 w-full"
      >
        <div
          className={`w-12 h-12 ${
            item.color === 'red' ? 'bg-red-500/90' : 'bg-yellow-500/90'
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
              {item.packageSize} • {item.category}
            </span>
            <span>
              Expires: {item.expires} • Stock: {item.stock}
            </span>
          </div>
          <p className="text-xs text-gray-600/90"> see more</p>
        </div>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 -bottom-10 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 ${
                    item.color === 'red' ? 'bg-red-500/90' : 'bg-yellow-500/90'
                  } text-white rounded-xl flex items-center justify-center text-xl`}
                >
                  {item.thumbnail}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.brand} {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.packageSize}</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">SKU</p>
                  <p className="text-sm font-medium">{item.sku}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <p className="text-sm font-medium">{item.category}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Stock Level</p>
                  <p className="text-sm font-medium">{item.stock} units</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Expires In</p>
                  <p className="text-sm font-medium">{item.expires}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p
                    className={`text-sm font-medium ${
                      item.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                    }`}
                  >
                    {item.color === 'red' ? 'Urgent' : 'Watch List'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Recommended Action</p>
                <button
                  className={`w-full ${
                    item.color === 'red' ? 'bg-red-500/90' : 'bg-yellow-500/90'
                  } text-white py-2 rounded-lg text-sm font-medium
                  shadow-lg cursor-pointer
                  hover:shadow-xl
                  transition-all duration-300`}
                >
                  {item.action}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
