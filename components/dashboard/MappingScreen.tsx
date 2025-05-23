import React from 'react'
import { Header } from '../layout/Header'

interface MappingScreenProps {
  onNavigate: (screen: string) => void
}

export const MappingScreen: React.FC<MappingScreenProps> = ({ onNavigate }) => (
  <>
    <Header
      title="Map Your Columns"
      leftIcon="←"
      rightIcon="?"
    />

    <div className="bg-blue-50 p-3 rounded-lg mb-5 text-xs text-blue-800">
      We found 4 columns in your file. Match them to our fields:
    </div>

    {[
      { csv: 'Item Name', mapped: 'Product Name ✓' },
      { csv: 'Best By', mapped: 'Expiry Date ✓' },
      { csv: 'Price', mapped: 'Cost Per Unit ✓' },
      { csv: 'Qty', mapped: 'Stock Level ✓' },
    ].map(({ csv, mapped }) => (
      <div
        key={csv}
        className="flex justify-between items-center py-2 border-b border-gray-200"
      >
        <div className="font-medium text-gray-800 text-sm">"{csv}"</div>
        <select className="px-2 py-1 border border-gray-300 rounded text-xs min-w-[120px]">
          <option>{mapped}</option>
          <option>Ignore</option>
        </select>
      </div>
    ))}

    <div className="bg-yellow-50 p-3 rounded-lg my-5 text-xs text-yellow-800">
      ⚠ Missing "Weekly Sales" data - scores will be estimated
    </div>

    <div className="bg-green-50 p-3 rounded-lg my-5">
      <div className="text-xs text-green-800 font-semibold">
        Preview (first 2 rows):
      </div>
      <div className="text-xs text-green-800 mt-2 font-mono">
        Greek Yogurt | 2025-05-25 | $4.99 | 12
        <br />
        White Bread | 2025-05-24 | $3.50 | 8
      </div>
    </div>

    <button
      onClick={() => onNavigate('dashboard')}
      className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold w-full mt-5 hover:bg-blue-700 transition-colors"
    >
      Import 47 Products →
    </button>
  </>
) 