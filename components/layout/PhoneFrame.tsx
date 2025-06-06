import React from 'react'
import { BottomNavigation } from './BottomNavigation'

interface PhoneFrameProps {
  children: React.ReactNode
  activeScreen: string
  onNavigate: (key: string) => void
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  activeScreen,
  onNavigate,
}) => (
  <div className="w-80 h-[600px] bg-white border-4 border-gray-800 rounded-3xl py-5 shadow-lg relative mx-auto flex flex-col overflow-hidden">
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300/0 scrollbar-track-gray-100/0 pb-16">
      {children}
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <BottomNavigation
        active={activeScreen}
        onNavigate={onNavigate}
      />
    </div>
  </div>
)
