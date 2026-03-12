import React from 'react'
import { Upload, ImageIcon, Filter, Search } from 'lucide-react'

export default function Media() {
  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111827]">Media Library</h2>
          <p className="text-sm text-gray-500 mt-1">Manage all your uploaded images and files.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#E94560] text-white text-sm font-medium rounded-md hover:bg-[#C73652] transition-colors">
          <Upload className="w-4 h-4 mr-2" />
          Upload New
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-lg border border-[#E5E7EB] shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search media files..." 
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E94560]/20 focus:border-[#E94560]"
          />
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="bg-gray-50 p-6 rounded-full border-2 border-dashed border-gray-200 mb-4 text-gray-400">
          <ImageIcon className="w-12 h-12" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No media files yet</h3>
        <p className="text-gray-500 max-w-sm mb-6">Upload images to use them in your articles and featured headers.</p>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
          Browse files
        </button>
      </div>
    </div>
  )
}
