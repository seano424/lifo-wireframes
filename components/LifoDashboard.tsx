'use client'

import React, { useState } from 'react'
import { PhoneFrame } from './layout/PhoneFrame'
import { DashboardScreen } from './dashboard/DashboardScreen'
import { ProductsScreen } from './dashboard/ProductsScreen'
import { UploadScreen } from './dashboard/UploadScreen'
import { MappingScreen } from './dashboard/MappingScreen'
import { AnalyticsScreen } from './dashboard/AnalyticsScreen'

interface UrgentItem {
  id: number
  name: string
  brand: string
  packageSize: string
  sku: string
  expires: string
  stock: number
  score: number
  action: string
  color: 'red' | 'yellow'
  thumbnail: string
  cost: string
  totalValue: string
  category: string
}

const LifoDashboard = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const [showPackagedOnly, setShowPackagedOnly] = useState(true)

  // Sample data
  // const urgentItems: UrgentItem[] = [
  //   {
  //     id: 1,
  //     name: 'Corn Flakes',
  //     brand: 'Kellogg\'s',
  //     packageSize: '500g',
  //     sku: 'KF-500-001',
  //     expires: '2 days',
  //     stock: 12,
  //     score: 2,
  //     action: '50% OFF',
  //     color: 'red',
  //     thumbnail: '🌽'
  //   },
  //   {
  //     id: 2,
  //     name: 'Canned Tomatoes',
  //     brand: 'Hunt\'s',
  //     packageSize: '400g',
  //     sku: 'HT-400-002',
  //     expires: '2 days',
  //     stock: 8,
  //     score: 3,
  //     action: 'DONATE',
  //     color: 'red',
  //     thumbnail: '🥫'
  //   },
  //   {
  //     id: 3,
  //     name: 'Bottled Water',
  //     brand: 'Aquafina',
  //     packageSize: '500ml',
  //     sku: 'AQ-500-003',
  //     expires: '3 days',
  //     stock: 24,
  //     score: 4,
  //     action: 'FRONT',
  //     color: 'yellow',
  //     thumbnail: '💧'
  //   },
  //   {
  //     id: 4,
  //     name: 'Frozen Pizza',
  //     brand: 'DiGiorno',
  //     packageSize: '300g',
  //     sku: 'DG-300-004',
  //     expires: '4 days',
  //     stock: 15,
  //     score: 5,
  //     action: '25% OFF',
  //     color: 'yellow',
  //     thumbnail: '🍕'
  //   },
  // ]

  const urgentItems: UrgentItem[] = [
    {
      id: 1,
      name: 'Organic Whole Milk',
      brand: 'Horizon',
      packageSize: '1L',
      sku: 'HZ-1000-001',
      expires: '1 day',
      stock: 18,
      score: 1,
      action: '40% OFF',
      color: 'red',
      thumbnail: '🥛',
      cost: '$4.99',
      totalValue: '$89.82',
      category: 'Dairy'
    },
    {
      id: 2,
      name: 'Greek Yogurt 4-Pack',
      brand: 'Chobani',
      packageSize: '4x150g',
      sku: 'CH-600-002',
      expires: '2 days',
      stock: 12,
      score: 2,
      action: 'DONATE',
      color: 'red',
      thumbnail: '🍯',
      cost: '$6.49',
      totalValue: '$77.88',
      category: 'Dairy'
    },
    {
      id: 3,
      name: 'Pre-Made Caesar Salad',
      brand: 'Fresh Express',
      packageSize: '320g',
      sku: 'FE-320-003',
      expires: '1 day',
      stock: 8,
      score: 1,
      action: '50% OFF',
      color: 'red',
      thumbnail: '🥗',
      cost: '$3.99',
      totalValue: '$31.92',
      category: 'Prepared Foods'
    },
    {
      id: 4,
      name: 'Ground Beef 85/15',
      brand: 'Local Farm',
      packageSize: '500g',
      sku: 'LF-500-004',
      expires: '2 days',
      stock: 6,
      score: 2,
      action: 'MARKDOWN',
      color: 'red',
      thumbnail: '🥩',
      cost: '$8.99',
      totalValue: '$53.94',
      category: 'Meat & Seafood'
    },
    {
      id: 5,
      name: 'Corn Flakes',
      brand: "Kellogg's",
      packageSize: '500g',
      sku: 'KF-500-001',
      expires: '2 days',
      stock: 12,
      score: 2,
      action: '50% OFF',
      color: 'red',
      thumbnail: '🌽',
      cost: '$4.99',
      totalValue: '$59.88',
      category: 'Packaged Goods'
    },
    {
      id: 6,
      name: 'Canned Tomatoes',
      brand: "Hunt's",
      packageSize: '400g',
      sku: 'HT-400-002',
      expires: '2 days',
      stock: 8,
      score: 3,
      action: 'DONATE',
      color: 'red',
      thumbnail: '🥫',
      cost: '$2.99',
      totalValue: '$23.92',
      category: 'Canned Goods'
    },
    {
      id: 7,
      name: 'Bottled Water',
      brand: 'Aquafina',
      packageSize: '500ml',
      sku: 'AQ-500-003',
      expires: '3 days',
      stock: 24,
      score: 4,
      action: 'FRONT',
      color: 'yellow',
      thumbnail: '💧',
      cost: '$1.99',
      totalValue: '$47.76',
      category: 'Beverages'
    },
    {
      id: 8,
      name: 'Frozen Pizza',
      brand: 'DiGiorno',
      packageSize: '300g',
      sku: 'DG-300-004',
      expires: '4 days',
      stock: 15,
      score: 5,
      action: '25% OFF',
      color: 'yellow',
      thumbnail: '🍕',
      cost: '$6.99',
      totalValue: '$104.85',
      category: 'Frozen Foods'
    },
  ]

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen onNavigate={setActiveScreen} />
      case 'products':
        return (
          <ProductsScreen
            items={urgentItems}
            showPackagedOnly={showPackagedOnly}
            onTogglePackagedOnly={() => setShowPackagedOnly(!showPackagedOnly)}
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
