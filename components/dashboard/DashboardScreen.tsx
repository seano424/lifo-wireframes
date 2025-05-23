import React from 'react'
import { Header } from '../layout/Header'
import { AlertCard } from '../ui/AlertCard'

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => (
  <>
    <Header title="LIFO Dashboard" />

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

    <div className="bg-gray-100 h-30 rounded-lg flex items-center justify-center text-gray-500 text-xs my-4 bg-gradient-to-br from-gray-50 to-gray-100">
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