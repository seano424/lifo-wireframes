import React, { useEffect, useRef } from 'react'

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

interface ProductModalProps {
  item: Product
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className="absolute inset-0 -bottom-10 bg-black/50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 ${
                (item.color === 'red' && 'bg-red-500/90') ||
                (item.color === 'yellow' && 'bg-yellow-500/90') ||
                (item.color === 'green' && 'bg-green-500/90')
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
            onClick={onClose}
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
                  item.color === 'red'
                    ? 'text-red-600'
                    : item.color === 'yellow'
                    ? 'text-yellow-600'
                    : item.color === 'green'
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`}
              >
                {item.color === 'red'
                  ? 'Urgent'
                  : item.color === 'yellow'
                  ? 'Watch List'
                  : 'Healthy'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Recommended Action</p>
            <button
              className={`w-full ${
                item.color === 'red'
                  ? 'bg-red-500/90'
                  : item.color === 'yellow'
                  ? 'bg-yellow-500/90'
                  : item.color === 'green'
                  ? 'bg-green-500/90'
                  : 'bg-gray-500/90'
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
  )
} 