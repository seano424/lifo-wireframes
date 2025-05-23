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
  <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200">
    <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-sm">
      {leftIcon}
    </div>
    <div className="text-lg font-semibold text-gray-800">{title}</div>
    <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-sm">
      {rightIcon}
    </div>
  </div>
) 