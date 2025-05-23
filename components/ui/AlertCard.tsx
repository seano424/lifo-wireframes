import React from 'react'

interface AlertCardProps {
  type: 'red' | 'yellow' | 'green'
  title: string
  description: string
  urgent?: boolean
}

export const AlertCard: React.FC<AlertCardProps> = ({
  type,
  title,
  description,
  urgent = false,
}) => {
  const colors = {
    red: 'bg-red-50 border-red-500 text-red-700',
    yellow: 'bg-yellow-50 border-yellow-500 text-yellow-700',
    green: 'bg-green-50 border-green-500 text-green-700',
  }

  return (
    <div
      className={`${
        colors[type]
      } border-l-4 p-4 rounded-lg mb-4`}
    >
      <div className="font-semibold mb-1">
        {type === 'red' && '⚠ URGENT'}
        {type === 'yellow' && '⚡ CAUTION'}
        {type === 'green' && '✓ HEALTHY'}
      </div>
      <div className="text-sm text-gray-800">{description}</div>
      {urgent && (
        <div className="text-xs text-gray-500 mt-1">Tap to see details →</div>
      )}
    </div>
  )
} 