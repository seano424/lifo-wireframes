import React from 'react'

interface BottomNavigationProps {
  active: string
  onNavigate: (key: string) => void
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  active,
  onNavigate,
}) => (
  <div className="flex justify-around py-3 px-5">
    {[
      { key: 'dashboard', icon: '🏠', label: 'Dashboard' },
      { key: 'products', icon: '📦', label: 'Products' },
      { key: 'upload', icon: '📤', label: 'Upload' },
      { key: 'analytics', icon: '📊', label: 'Analytics' },
    ].map(({ key, icon, label }) => (
      <button
        key={key}
        onClick={() => onNavigate(key)}
        className={`flex flex-col items-center cursor-pointer text-xs ${
          active === key ? 'text-blue-600' : 'text-gray-600'
        }`}
      >
        <div
          className={`w-5 h-5 rounded mb-1 flex items-center justify-center ${
            active === key ? 'bg-blue-100' : 'bg-gray-300'
          }`}
        >
          {icon}
        </div>
        {label}
      </button>
    ))}
  </div>
) 