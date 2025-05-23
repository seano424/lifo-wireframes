import React from 'react'
import { Header } from '../layout/Header'

export const AnalyticsScreen: React.FC = () => (
  <>
    <Header
      title="Analytics"
      leftIcon="←"
      rightIcon="📊"
    />

    <div className="grid grid-cols-2 gap-3 mb-5">
      <div className="bg-red-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-red-600">5</div>
        <div className="text-xs text-gray-600">Urgent Items</div>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-yellow-600">12</div>
        <div className="text-xs text-gray-600">Watch List</div>
      </div>
    </div>

    <div className="bg-gray-100 h-30 rounded-lg flex items-center justify-center text-gray-500 text-xs my-4 bg-gradient-to-br from-gray-50 to-gray-100 py-3">
      📊 Products by Expiry Timeline
    </div>

    <div className="bg-gray-100 h-30 rounded-lg flex items-center justify-center text-gray-500 text-xs my-4 bg-gradient-to-br from-gray-50 to-gray-100 py-3">
      🥧 Inventory Health (Red/Yellow/Green)
    </div>

    <div className="bg-green-50 p-4 rounded-lg my-4">
      <div className="font-semibold text-green-800 mb-1">💰 This Week</div>
      <div className="text-sm text-green-800">
        $247 saved from waste prevention
      </div>
      <div className="text-xs text-green-600 mt-1">
        ↗ 23% improvement from last week
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="font-semibold mb-3">Quick Actions</div>
      <div className="text-xs text-gray-600 mb-2">
        • 3 items ready for 50% discount
      </div>
      <div className="text-xs text-gray-600 mb-2">
        • 2 items should be moved to front
      </div>
      <div className="text-xs text-gray-600">• 1 item ready for donation</div>
    </div>
  </>
)
