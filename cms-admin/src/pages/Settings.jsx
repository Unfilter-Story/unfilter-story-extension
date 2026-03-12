import React from 'react'
import { Save } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6 flex flex-col h-full max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111827]">Settings</h2>
          <p className="text-sm text-gray-500 mt-1">Configure global application preferences.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#E94560] text-white text-sm font-medium rounded-md hover:bg-[#C73652] transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden flex-1">
        <div className="p-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Site Configuration</h3>
          
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
              <input 
                type="text" 
                defaultValue="Unfilter Story" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Description / SEO Meta Description</label>
              <textarea 
                rows="3" 
                defaultValue="Delivering authentic, unfiltered news on startups, technology, and business."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm"
              />
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Enable Newsletter Signups</h4>
                <p className="text-sm text-gray-500">Show the newsletter subscription widget on the public website.</p>
              </div>
              <button 
                type="button" 
                className="bg-[#E94560] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E94560] focus:ring-offset-2" 
                role="switch" 
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
