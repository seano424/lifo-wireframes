import React from 'react'

interface HeaderProps {
  title: string
  leftIcon?: string
  rightIcon?: string
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon = '☰',
  rightIcon = '🔔',
}) => (
  <div className="flex justify-between items-center mb-5 pb-3 border-gray-200 sticky top-0 bg-white shadow-sm backdrop-blur-xs z-10 px-5">
    <button className="text-xs flex flex-col items-center justify-center group cursor-pointer">
      <span
        className="h-12 w-12 flex justify-center items-center rounded-xl text-xl transition-all duration-300 ease-in-out
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-white/40 backdrop-blur-xs border border-white/20"
      >
        {leftIcon}
      </span>
    </button>
    <div className="text-lg font-semibold text-gray-800">{title}</div>

    <button className="text-xs flex flex-col items-center justify-center group cursor-pointer">
      <span
        className="h-12 w-12 flex justify-center items-center rounded-xl text-xl transition-all duration-300 ease-in-out
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-white/40 backdrop-blur-xs border border-white/20"
      >
        {rightIcon}
      </span>
    </button>
  </div>
)
