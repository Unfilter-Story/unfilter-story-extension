import React, { useState, useEffect } from 'react'
import { Plus, GripVertical, Edit2, Trash2, ChevronDown, ChevronRight, ExternalLink, Move } from 'lucide-react'

export default function Navigation() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingItem, setEditingItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isManualHref, setIsManualHref] = useState(false)
  const [formData, setFormData] = useState({
    label: '',
    href: '',
    type: 'link',
    parentId: null,
    displayOrder: 0
  })

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const res = await fetch('http://localhost:3000/cms/v1/navigation')
      const data = await res.json()
      setMenuItems(data)
      setLoading(false)
    } catch (err) {
      console.error('Failed to fetch menu items', err)
      setLoading(false)
    }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const method = editingItem ? 'PUT' : 'POST'
    const url = editingItem 
      ? `http://localhost:3000/cms/v1/navigation/${editingItem.id}`
      : 'http://localhost:3000/cms/v1/navigation'

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      setIsModalOpen(false)
      setEditingItem(null)
      setFormData({ label: '', href: '', type: 'link', parentId: null, displayOrder: 0 })
      fetchMenuItems()
    } catch (err) {
      console.error('Failed to save menu item', err)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this menu item and its submenus?')) return
    try {
      await fetch(`http://localhost:3000/cms/v1/navigation/${id}`, { method: 'DELETE' })
      fetchMenuItems()
    } catch (err) {
      console.error('Failed to delete menu item', err)
    }
  }

  const handleLabelChange = (e) => {
    const label = e.target.value
    let newHref = formData.href

    if (!isManualHref && !editingItem) {
      const slug = label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      newHref = slug ? `/category/${slug}` : ''
    }

    setFormData({ ...formData, label, href: newHref })
  }

  const openModal = (item = null, parentId = null) => {
    setIsManualHref(item ? true : false)
    if (item) {
      setEditingItem(item)
      setFormData({
        label: item.label,
        href: item.href,
        type: item.type,
        parentId: item.parentId,
        displayOrder: item.displayOrder
      })
    } else {
      setEditingItem(null)
      setFormData({ label: '', href: '', type: 'link', parentId: parentId, displayOrder: menuItems.length })
    }
    setIsModalOpen(true)
  }

  const renderMenuItem = (item, level = 0) => (
    <div key={item.id} className="mb-2">
      <div 
        className={`flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all group ${level > 0 ? 'ml-8' : ''}`}
      >
        <div className="flex items-center gap-4">
          <GripVertical className="text-gray-300 cursor-grab group-hover:text-gray-400" size={18} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 uppercase tracking-tight italic">{item.label}</span>
              <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-mono uppercase font-bold">{item.type}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
              <ExternalLink size={10} />
              {item.href}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => openModal(null, item.id)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Add Submenu"
          >
            <Plus size={16} />
          </button>
          <button 
            onClick={() => openModal(item)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit2 size={16} />
          </button>
          <button 
            onClick={() => handleDelete(item.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      {item.children?.length > 0 && (
        <div className="mt-2">
          {item.children.map(child => renderMenuItem(child, level + 1))}
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">Navigation</h1>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Manage website headers and sub-menus</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="px-6 py-3 bg-[#E94560] text-white font-black text-sm rounded-xl shadow-lg hover:bg-[#C73652] transition-all flex items-center gap-2 uppercase tracking-widest italic"
        >
          <Plus size={18} />
          Add Menu Item
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-gray-400">Loading Configuration...</span>
        </div>
      ) : menuItems.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-gray-200">
            <Move size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">No Navigation Items</h2>
          <p className="text-gray-400 font-bold text-sm max-w-xs leading-relaxed uppercase tracking-widest">
            Your website header is currently empty. Start by adding links or dropdowns.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {menuItems.map(item => renderMenuItem(item))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">
                {editingItem ? 'Edit Menu Item' : 'New Menu Item'}
              </h2>
            </div>
            <form onSubmit={handleSave} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Label</label>
                <input 
                  type="text"
                  required
                  value={formData.label}
                  onChange={handleLabelChange}
                  placeholder="e.g. Technology"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-gray-900 focus:ring-0 transition-all font-bold text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">URL / Link</label>
                <input 
                  type="text"
                  required
                  value={formData.href}
                  onChange={e => {
                    setIsManualHref(true)
                    setFormData({ ...formData, href: e.target.value })
                  }}
                  placeholder="e.g. /category/technology"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-gray-900 focus:ring-0 transition-all font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Type</label>
                  <select 
                    value={formData.type}
                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-gray-900 focus:ring-0 transition-all font-bold text-gray-900 text-sm appearance-none"
                  >
                    <option value="link">LINK</option>
                    <option value="dropdown">DROPDOWN</option>
                    <option value="category_group">CAT GROUP</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Order</label>
                  <input 
                    type="number"
                    value={formData.displayOrder}
                    onChange={e => setFormData({ ...formData, displayOrder: parseInt(e.target.value) })}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-gray-900 focus:ring-0 transition-all font-bold text-gray-900"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-gray-100 text-gray-500 font-black text-xs rounded-2xl hover:bg-gray-200 transition-all uppercase tracking-widest italic"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-4 bg-gray-900 text-white font-black text-xs rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest italic"
                >
                  {editingItem ? 'Update Item' : 'Create Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
