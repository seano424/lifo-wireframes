import React from 'react'
import { Header } from '../layout/Header'

interface UploadScreenProps {
  onNavigate: (screen: string) => void
}

export const UploadScreen: React.FC<UploadScreenProps> = ({ onNavigate }) => (
  <>
    <Header
      title="Upload Inventory"
      leftIcon="←"
      rightIcon="?"
    />

    <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center my-5">
      <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-lg">
        📁
      </div>
      <div className="font-semibold mb-2">Upload your inventory CSV</div>
      <div className="text-xs text-gray-600 mb-4">
        Drag & drop or tap to browse
      </div>
      <button className="bg-slate-200 px-4 py-2 rounded-md text-xs hover:bg-slate-300 transition-colors">
        Choose File
      </button>
    </div>

    <div className="my-5">
      <div className="font-semibold mb-3">Recently uploaded:</div>
      <div className="p-3 bg-gray-50 rounded-md text-xs">
        📄 inventory_may_2025.csv
        <div className="text-gray-600 mt-1">
          Uploaded 2 hours ago • 47 products
        </div>
      </div>
    </div>

    <div className="bg-teal-50 p-4 rounded-lg my-5">
      <div className="text-xs text-teal-800">
        💡 <strong>Pro tip:</strong> Keep using your existing spreadsheet
        format. We'll help you map the columns on the next step.
      </div>
    </div>

    <button
      onClick={() => onNavigate('mapping')}
      className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold w-full mt-5 hover:bg-blue-700 transition-colors"
    >
      Continue to Mapping →
    </button>
  </>
) 