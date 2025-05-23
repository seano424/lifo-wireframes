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

    <div className="flex gap-1 justify-between overflow-x-auto text-nowrap pb-4">
      <button className="text-xs flex flex-col items-center justify-center">
        <span className="h-10 w-10 flex justify-center items-center border rounded-full text-xl">
          📋
        </span>
        <span>Rundown</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center">
        <span className="h-10 w-10 flex justify-center items-center border rounded-full text-xl">
          🔴
        </span>
        <span>Urgent</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center">
        <span className="h-10 w-10 flex justify-center items-center border rounded-full text-xl">
          🟡
        </span>
        <span>Watch List</span>
      </button>
      <button className="text-xs flex flex-col items-center justify-center">
        <span className="h-10 w-10 flex justify-center items-center border rounded-full text-xl">
          🟢
        </span>
        <span>Healthy</span>
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
