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
    red: 'bg-red-50/40 border-red-500/20 text-red-700 shadow-red-100/50',
    yellow:
      'bg-yellow-50/40 border-yellow-500/20 text-yellow-700 shadow-yellow-100/50',
    green:
      'bg-green-50/40 border-green-500/20 text-green-700 shadow-green-100/50',
  }

  const defaultTitles = {
    red: '⚠ URGENT',
    yellow: '⚡ CAUTION',
    green: '✓ HEALTHY',
  }

  return (
    <div
      className={`
        ${colors[type]} 
        p-4 
        rounded-xl 
        mb-4 
        shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
        hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
        transition-all
        duration-300
        backdrop-blur-xs
        border
        border-white/20
      `}
    >
      <div className="font-semibold mb-1 flex items-center gap-2">
        {title || defaultTitles[type]}
      </div>
      <div className="text-sm text-gray-700/90">{description}</div>
      {urgent && (
        <div className="text-xs text-gray-500/80 mt-2 flex items-center gap-1">
          Tap to see details
          <span className="text-gray-400">→</span>
        </div>
      )}
    </div>
  )
}
