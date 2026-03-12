import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Sidebar />
      <main className="flex-1 ml-60 flex flex-col">
        <header className="h-16 border-b border-[#E5E7EB] bg-white flex items-center px-8 shrink-0">
          <h1 className="text-xl font-semibold">CMS Admin</h1>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
