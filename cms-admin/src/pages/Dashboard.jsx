import React from 'react'
import { FileText, Users, Eye, ArrowUpRight } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: 'Published Articles', value: 342, icon: FileText, change: '+12' },
    { label: 'Total Authors', value: 14, icon: Users, change: '+2' },
    { label: 'Total Views', value: '1.2M', icon: Eye, change: '+12%' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-semibold mt-2">{stat.value}</p>
                </div>
                <div className="p-3 bg-red-50 text-[#E94560] rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="flex items-center text-emerald-600 font-medium">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="text-sm text-gray-500 italic py-8 text-center border-2 border-dashed border-gray-100 rounded-lg">
          No recent activity to show yet.
        </div>
      </div>
    </div>
  )
}
