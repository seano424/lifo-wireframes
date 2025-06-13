import React from 'react'

const UserFlowDiagram: React.FC = () => {
  return (
    <div className="font-sans">
      <h1 className="text-2xl font-bold mb-4">📱 LIFO User Flow Diagrams</h1>

      <div className="bg-yellow-50 border border-yellow-400 p-4 rounded mb-5">
        <strong>📱 Device Context:</strong> All interactions happen on
        store-provided Android devices with built-in scanners. No personal
        phones involved.
      </div>

      <div className="bg-white my-8 p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2.5">
          👑 Store Owner/Admin Flow
        </h2>
        <div className="overflow-x-auto py-5">
          <div className="flex items-center space-x-4 min-w-[1200px]">
            {/* Initial Setup */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Initial Setup</p>
                <p className="text-xs">Email + Password</p>
                <p className="text-xs">Store Details</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">One-time</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Device Configuration */}
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Configure Device</p>
                <p className="text-xs">Category Weights</p>
                <p className="text-xs">Store Settings</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Setup</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Create Employee PINs */}
            <div className="flex flex-col items-center">
              <div className="bg-red-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Create Staff PINs</p>
                <p className="text-xs">Generate PINs</p>
                <p className="text-xs">Assign Roles</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Staff Management</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Daily Management */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Daily Management</p>
                <p className="text-xs">View Dashboard</p>
                <p className="text-xs">Review Reports</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Ongoing</p>
            </div>

            {/* Admin Controls */}
            <div className="ml-8 border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="text-center font-bold text-gray-800 mb-3">
                Admin Dashboard
              </h3>
              <div className="space-y-2">
                <div className="bg-blue-500 text-white p-2 rounded text-center text-sm">
                  View All Products
                </div>
                <div className="bg-green-500 text-white p-2 rounded text-center text-sm">
                  Manage Categories
                </div>
                <div className="bg-red-500 text-white p-2 rounded text-center text-sm">
                  Staff PIN Management
                </div>
                <div className="bg-orange-500 text-white p-2 rounded text-center text-sm">
                  Analytics & Reports
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-500 p-4 rounded mt-4 text-sm">
          <strong>Admin privileges:</strong> Full system access, can
          create/deactivate employee PINs, configure AI weights, view all
          analytics.
        </div>
      </div>

      <div className="bg-white my-8 p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2.5">
          👨‍💼 Employee Daily Workflow
        </h2>
        <div className="overflow-x-auto py-5">
          <div className="flex items-center space-x-4 min-w-[1200px]">
            {/* Start Shift */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-4 rounded-lg w-[100px] text-center">
                <p className="font-bold text-sm">Start Shift</p>
                <p className="text-xs">Enter PIN</p>
                <p className="text-xs">Role: Operator</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Login</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Scan Products */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-lg w-[100px] text-center">
                <p className="font-bold text-sm">Scan Products</p>
                <p className="text-xs">Add to Inventory</p>
                <p className="text-xs">Set Expiry Dates</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Receiving</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Check Risk Items */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 text-white p-4 rounded-lg w-[100px] text-center">
                <p className="font-bold text-sm">Check Alerts</p>
                <p className="text-xs">High Risk Items</p>
                <p className="text-xs">Expiring Today</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Monitoring</p>
            </div>

            {/* Decision Diamond */}
            <div className="flex flex-col items-center px-4">
              <div className="bg-yellow-500 text-white p-4 rounded-lg w-[100px] h-[100px] flex items-center text-center justify-center transform rotate-45">
                <p className="font-bold text-sm -rotate-45">Action Needed?</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2">
              <div className="bg-red-500 text-white p-2 rounded text-center text-sm">
                Discount
              </div>
              <div className="bg-green-500 text-white p-2 rounded text-center text-sm">
                Donate
              </div>
              <p className="text-xs text-gray-600 mt-2">Actions</p>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Continue Monitoring */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-500 text-white p-4 rounded-lg w-[100px] text-center">
                <p className="font-bold text-sm">Continue</p>
                <p className="text-xs">Monitoring</p>
                <p className="text-xs">Throughout Day</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Continuous</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-500 p-4 rounded mt-4 text-sm">
          <strong>Employee workflow:</strong> PIN-based access, limited to
          operational tasks. No email required, easy to onboard/offboard staff.
        </div>
      </div>

      <div className="bg-white my-8 p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2.5">
          📦 Product Scanning & Batch Management
        </h2>
        <div className="overflow-x-auto py-5">
          <div className="flex items-center space-x-4 min-w-[1000px]">
            {/* Scan Barcode */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Scan Barcode</p>
                <div className="bg-white text-gray-800 p-2 rounded mt-2">
                  <p className="text-xs">||||| |||| |||||</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Product Recognition */}
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Auto-Detect</p>
                <p className="text-xs">Product Info</p>
                <p className="text-xs">Category: Dairy</p>
                <p className="text-xs">Name: Milk 1L</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Set Expiry */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Set Expiry Date</p>
                <div className="bg-white text-gray-800 p-2 rounded mt-2">
                  <p className="text-xs">Jun 15, 2025</p>
                </div>
                <p className="text-xs mt-2">+ Batch Quantity</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Calculate Score */}
            <div className="flex flex-col items-center">
              <div className="bg-red-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">AI Calculates</p>
                <p className="text-xs">Waste Risk Score</p>
                <div className="bg-white text-red-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto mt-2">
                  <p className="font-bold">85</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Add to Inventory */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 text-white p-4 rounded-lg w-[120px] text-center">
                <p className="font-bold text-sm">Add to System</p>
                <p className="text-xs">Update Inventory</p>
                <p className="text-xs">Track in Dashboard</p>
                <p className="text-xs">✓ Complete</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-500 p-4 rounded mt-4 text-sm">
          <strong>Batch processing:</strong> Scan once, set expiry,
          auto-calculate risk score. System tracks everything for dashboard
          analytics.
        </div>
      </div>

      <div className="bg-white my-8 p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2.5">
          🔐 Security & Access Control
        </h2>
        <div className="overflow-x-auto py-5">
          <div className="flex items-center space-x-8 min-w-[800px]">
            {/* Device */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 text-white p-4 rounded-lg w-[100px] h-[150px] flex flex-col items-center justify-center">
                <div className="bg-gray-800 w-[80px] h-[50px] rounded mb-4 flex items-center justify-center">
                  <p className="text-xs">LIFO Device</p>
                </div>
                <div className="bg-gray-500 w-[70px] h-[50px] rounded flex items-center justify-center">
                  <p className="text-xs">PIN Entry</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Access Levels */}
            <div className="flex flex-col space-y-2">
              <div className="bg-red-500 text-white p-2 rounded text-center w-[150px]">
                <p className="font-bold text-sm">Admin PIN</p>
                <p className="text-xs">Full Access</p>
              </div>
              <div className="bg-orange-500 text-white p-2 rounded text-center w-[150px]">
                <p className="font-bold text-sm">Manager PIN</p>
                <p className="text-xs">Operations + Reports</p>
              </div>
              <div className="bg-green-500 text-white p-2 rounded text-center w-[150px]">
                <p className="font-bold text-sm">Staff PIN</p>
                <p className="text-xs">Scanning Only</p>
              </div>
              <div className="bg-gray-500 text-white p-2 rounded text-center w-[150px]">
                <p className="font-bold text-sm">Inactive PIN</p>
                <p className="text-xs">No Access</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-gray-500">→</div>

            {/* Actions */}
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="text-center font-bold text-gray-800 mb-3">
                Available Actions
              </h3>
              <div className="space-y-2">
                <p className="text-red-500 text-sm">• Configure weights</p>
                <p className="text-orange-500 text-sm">• View analytics</p>
                <p className="text-green-500 text-sm">• Scan products</p>
                <p className="text-blue-500 text-sm">• Mark actions</p>
                <p className="text-purple-500 text-sm">• Generate reports</p>
              </div>
            </div>

            {/* Security Benefits */}
            <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-4">
              <h3 className="text-center font-bold text-yellow-800 mb-3">
                Security Benefits
              </h3>
              <div className="space-y-2">
                <p className="text-yellow-800 text-sm">• No personal devices</p>
                <p className="text-yellow-800 text-sm">
                  • Instant deactivation
                </p>
                <p className="text-yellow-800 text-sm">• Audit trail by PIN</p>
                <p className="text-yellow-800 text-sm">
                  • Device stays in store
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-500 p-4 rounded mt-4 text-sm">
          <strong>Access control:</strong> PIN-based system with role hierarchy.
          Easy to manage staff access without email complications.
        </div>
      </div>

      <div className="mt-10 p-5 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          💡 Key Insights from These Flows
        </h3>
        <p className="font-semibold mb-2">For your wireframes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Login screen</strong> needs PIN entry, not email/password
            for employees
          </li>
          <li>
            <strong>Dashboard</strong> should show different content based on
            user role
          </li>
          <li>
            <strong>Product scanning</strong> needs batch management and expiry
            date setting
          </li>
          <li>
            <strong>Admin panel</strong> needs PIN management instead of email
            invitations
          </li>
          <li>
            <strong>Device-centric design</strong> - optimize for handheld
            Android tablets
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserFlowDiagram
