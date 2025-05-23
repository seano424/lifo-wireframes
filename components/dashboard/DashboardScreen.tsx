import React from 'react'
import { Header } from '../layout/Header'
import { AlertCard } from '../ui/AlertCard'

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onNavigate,
}) => (
  <>
    <Header title="LIFO Dashboard" />

    <div className="flex gap-3 justify-between overflow-x-auto text-nowrap pb-4 px-1">
      <button className="text-xs flex flex-col items-center justify-center group">
        <span className="h-12 w-12 flex justify-center items-center rounded-xl text-xl
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-white/40 backdrop-blur-sm border border-white/20">
          📋
        </span>
        <span className="mt-2 text-gray-700/90">Rundown</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center group">
        <span className="h-12 w-12 flex justify-center items-center rounded-xl text-xl
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-red-50/40 backdrop-blur-sm border border-white/20">
          🔴
        </span>
        <span className="mt-2 text-gray-700/90">Urgent</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center group">
        <span className="h-12 w-12 flex justify-center items-center rounded-xl text-xl
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-yellow-50/40 backdrop-blur-sm border border-white/20">
          🟡
        </span>
        <span className="mt-2 text-gray-700/90">Watch List</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center group">
        <span className="h-12 w-12 flex justify-center items-center rounded-xl text-xl
          shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)]
          group-hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
          transition-all duration-300 bg-green-50/40 backdrop-blur-sm border border-white/20">
          🟢
        </span>
        <span className="mt-2 text-gray-700/90">Healthy</span>
      </button>
    </div>

    <AlertCard
      type="red"
      title="Urgent Items"
      description="5 products expire in 2 days"
      urgent={true}
    />
    <AlertCard
      type="yellow"
      title="Watch List"
      description="12 products expire this week"
    />
    <AlertCard
      type="green"
      title="Healthy Inventory"
      description="48 products in good condition"
    />

    <div className="bg-gray-100 h-30 rounded-lg flex items-center justify-center text-gray-500 text-xs my-4 bg-gradient-to-br from-gray-50 to-gray-100 py-3">
      📊 Inventory Health Chart
    </div>

    <button
      onClick={() => onNavigate('upload')}
      className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold w-full mt-5 hover:bg-blue-700 transition-colors"
    >
      + Add New Inventory
    </button>
  </>
)
