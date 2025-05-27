import React, { useState } from 'react'
import { Header } from '../layout/Header'
import { getAvailableCategories } from '../../utils/categoryMapping'

interface MappingScreenProps {
  onNavigate: (screen: string) => void
}

type ColumnMapping = {
  'Item Name': string
  'Category': string
  'Best By': string
  'Price': string
  'Qty': string
  'Brand': string
  'SKU': string
}

export const MappingScreen: React.FC<MappingScreenProps> = ({ onNavigate }) => {
  const [mappings, setMappings] = useState<ColumnMapping>({
    'Item Name': 'Product Name',
    'Category': 'Category',
    'Best By': 'Expiry Date',
    'Price': 'Cost Per Unit',
    'Qty': 'Stock Level',
    'Brand': 'Brand',
    'SKU': 'SKU',
  })

  const handleMappingChange = (csvColumn: keyof ColumnMapping, mappedValue: string) => {
    setMappings(prev => ({
      ...prev,
      [csvColumn]: mappedValue
    }))
  }

  const csvColumns = [
    { csv: 'Item Name' as const, mapped: 'Product Name' },
    { csv: 'Category' as const, mapped: 'Category' },
    { csv: 'Best By' as const, mapped: 'Expiry Date' },
    { csv: 'Price' as const, mapped: 'Cost Per Unit' },
    { csv: 'Qty' as const, mapped: 'Stock Level' },
    { csv: 'Brand' as const, mapped: 'Brand' },
    { csv: 'SKU' as const, mapped: 'SKU' },
  ]

  const availableCategories = getAvailableCategories()

  return (
    <>
      <Header
        title="Map Columns"
        leftIcon="←"
        rightIcon="?"
      />

      <div className="px-5">
        <div className="bg-blue-50 p-3 rounded-lg mb-5 text-xs text-blue-800">
          We found {csvColumns.length} columns in your file. Match them to our fields:
        </div>

        {csvColumns.map(({ csv, mapped }) => (
          <div
            key={csv}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <div className="font-medium text-gray-800 text-sm">
              &quot;{csv}&quot;
            </div>
            {csv === 'Category' ? (
              <select 
                className="px-2 py-1 border border-gray-300 rounded-sm text-xs min-w-[120px]"
                value={mappings[csv]}
                onChange={(e) => handleMappingChange(csv, e.target.value)}
              >
                <option value="Category">Category ✓</option>
                {availableCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
                <option value="Ignore">Ignore</option>
              </select>
            ) : (
              <select 
                className="px-2 py-1 border border-gray-300 rounded-sm text-xs min-w-[120px]"
                value={mappings[csv]}
                onChange={(e) => handleMappingChange(csv, e.target.value)}
              >
                <option value={mapped}>{mapped} ✓</option>
                <option value="Ignore">Ignore</option>
              </select>
            )}
          </div>
        ))}

        <div className="bg-yellow-50 p-3 rounded-lg my-5 text-xs text-yellow-800">
          ⚠ Missing &quot;Weekly Sales&quot; data - scores will be estimated
        </div>

        <div className="bg-green-50 p-3 rounded-lg my-5">
          <div className="text-xs text-green-800 font-semibold">
            Preview (first 2 rows):
          </div>
          <div className="text-xs text-green-800 mt-2 font-mono">
            Greek Yogurt | Dairy | 2025-05-25 | $4.99 | 12 | Chobani | CH-600-002
            <br />
            White Bread | Bakery Fresh | 2025-05-24 | $3.50 | 8 | Local Bakery | LB-400-001
          </div>
        </div>

        <button
          onClick={() => onNavigate('dashboard')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold w-full mt-5 hover:bg-blue-700 transition-colors"
        >
          Import 47 Products →
        </button>
      </div>
    </>
  )
}
