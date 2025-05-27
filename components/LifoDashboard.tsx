'use client'

import React, { useState } from 'react'
import { PhoneFrame } from './layout/PhoneFrame'
import { DashboardScreen } from './dashboard/DashboardScreen'
import { ProductsScreen } from './dashboard/ProductsScreen'
import { UploadScreen } from './dashboard/UploadScreen'
import { MappingScreen } from './dashboard/MappingScreen'
import { AnalyticsScreen } from './dashboard/AnalyticsScreen'
import {
  getAllItems,
  getUrgentItems,
  getWatchListItems,
  getHealthyItems,
} from '../data/mockProducts'
import { UrgentItem } from '../types'

const LifoDashboard = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const [showPackagedOnly, setShowPackagedOnly] = useState(true)

  const allItems = getAllItems()
  const urgentItems = getUrgentItems()
  const watchListItems = getWatchListItems()
  const healthyItems = getHealthyItems()

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen onNavigate={setActiveScreen} />
      case 'products':
        return (
          <ProductsScreen
            items={allItems}
            initialFilterType={showPackagedOnly ? 'packaged' : 'all'}
            onFilterChange={(type) => setShowPackagedOnly(type === 'packaged')}
          />
        )
      case 'upload':
        return <UploadScreen onNavigate={setActiveScreen} />
      case 'mapping':
        return <MappingScreen onNavigate={setActiveScreen} />
      case 'analytics':
        return <AnalyticsScreen />
      default:
        return <DashboardScreen onNavigate={setActiveScreen} />
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          LIFO - Smart Inventory Management
        </h1>

        {/* User Flow */}
        <div className="bg-white p-8 rounded-xl mb-10 shadow-xs">
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            User Flow
          </h2>
          <div className="flex items-center gap-4 mb-5 flex-wrap justify-center">
            {[
              'Login',
              'Dashboard',
              'Upload CSV',
              'Map Columns',
              'View Alerts',
              'Take Action',
            ].map((step, index, arr) => (
              <React.Fragment key={step}>
                <div className="bg-slate-200 px-4 py-2 rounded-full text-sm font-medium">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <div className="text-gray-500 text-lg">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-gray-600 text-center">
            Mobile-first design for busy store managers who need quick,
            actionable insights on the go.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center">
            Interactive Prototype
          </h2>
          <PhoneFrame
            activeScreen={activeScreen}
            onNavigate={setActiveScreen}
          >
            {renderScreen()}
          </PhoneFrame>
        </div>

        {/* Design Decisions */}
        <div className="bg-white p-8 rounded-xl shadow-xs">
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Design Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-blue-600 font-semibold mb-3">Mobile-First</h3>
              <p className="text-gray-600 text-sm">
                Store managers are constantly moving. They need to check
                inventory while walking the aisles or dealing with deliveries.
              </p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold mb-3">
                Action-Oriented
              </h3>
              <p className="text-gray-600 text-sm">
                Not just data display - every screen suggests concrete actions:
                &quot;50% OFF&quot;, &quot;DONATE&quot;, &quot;MOVE TO
                FRONT&quot;.
              </p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold mb-3">
                Traffic Light System
              </h3>
              <p className="text-gray-600 text-sm">
                Red/Yellow/Green color coding makes urgency immediately clear at
                a glance.
              </p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold mb-3">
                Flexible Data Import
              </h3>
              <p className="text-gray-600 text-sm">
                Smart column mapping means stores don&apos;t need to change
                their existing spreadsheet workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifoDashboard
