import React, { useState, useEffect } from 'react'
import { Plus, FolderTree, X, Edit2, Trash2 } from 'lucide-react'

export default function Taxonomy() {
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [isCatModalOpen, setCatModalOpen] = useState(false)
  const [isTagModalOpen, setTagModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // Form states
  const [editId, setEditId] = useState(null)
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')

  const fetchTaxonomy = async () => {
    try {
      setLoading(true)
      const [catRes, tagRes] = await Promise.all([
        fetch('http://localhost:3000/cms/v1/categories'),
        fetch('http://localhost:3000/cms/v1/tags')
      ])
      const cats = await catRes.json()
      const tgs = await tagRes.json()
      setCategories(cats || [])
      setTags(tgs || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTaxonomy()
  }, [])

  const handleSaveCategory = async (e) => {
    e.preventDefault()
    try {
      const url = editId 
        ? `http://localhost:3000/cms/v1/categories/${editId}` 
        : 'http://localhost:3000/cms/v1/categories'
      const method = editId ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, slug, description })
      })
      setCatModalOpen(false)
      fetchTaxonomy()
    } catch (err) {
      alert("Error saving category")
    }
  }

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await fetch(`http://localhost:3000/cms/v1/categories/${id}`, { method: 'DELETE' })
      fetchTaxonomy()
    } catch (err) {
      alert("Error deleting category")
    }
  }

  const handleSaveTag = async (e) => {
    e.preventDefault()
    try {
      const url = editId 
        ? `http://localhost:3000/cms/v1/tags/${editId}` 
        : 'http://localhost:3000/cms/v1/tags'
      const method = editId ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, slug })
      })
      setTagModalOpen(false)
      fetchTaxonomy()
    } catch (err) {
      alert("Error saving tag")
    }
  }

  const handleDeleteTag = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tag?")) return;
    try {
      await fetch(`http://localhost:3000/cms/v1/tags/${id}`, { method: 'DELETE' })
      fetchTaxonomy()
    } catch (err) {
      alert("Error deleting tag")
    }
  }

  const openCatModal = (cat = null) => { 
    if (cat) {
      setEditId(cat.id); setName(cat.name); setSlug(cat.slug); setDescription(cat.description || '')
    } else {
      setEditId(null); setName(''); setSlug(''); setDescription('')
    }
    setCatModalOpen(true) 
  }

  const openTagModal = (tag = null) => { 
    if (tag) {
      setEditId(tag.id); setName(tag.name); setSlug(tag.slug)
    } else {
      setEditId(null); setName(''); setSlug('')
    }
    setTagModalOpen(true) 
  }

  return (
    <div className="space-y-6 flex flex-col h-full relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111827]">Categories & Tags</h2>
          <p className="text-sm text-gray-500 mt-1">Organise your content structure.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => openTagModal()} className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Tag
          </button>
          <button onClick={() => openCatModal()} className="flex items-center px-4 py-2 bg-[#E94560] text-white text-sm font-medium rounded-md hover:bg-[#C73652] transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Categories Panel */}
        <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Categories</h3>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{categories.length}</span>
          </div>
          <div className="p-0 flex-1 overflow-y-auto">
            {categories.length === 0 && !loading ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <FolderTree className="w-10 h-10 text-gray-300 mb-3" />
                <p className="text-gray-500">No categories found. Create one!</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {categories.map(cat => (
                  <li key={cat.id} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center group">
                    <div>
                      <div className="font-medium text-gray-900">{cat.name}</div>
                      <div className="text-xs text-gray-500">/{cat.slug}</div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openCatModal(cat)} className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteCategory(cat.id)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Tags Panel */}
        <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Tags</h3>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{tags.length}</span>
          </div>
          <div className="p-6 flex-1">
             {tags.length === 0 && !loading ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <p className="text-gray-500">No tags found. Create one!</p>
                </div>
             ) : (
                <div className="flex flex-wrap gap-3">
                  {tags.map(tag => (
                    <div key={tag.id} className="group relative flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 pr-8 overflow-hidden hover:pr-14 transition-all">
                      <span>#{tag.name}</span>
                      <div className="absolute right-1 flex bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openTagModal(tag)} className="p-1 hover:text-blue-600"><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => handleDeleteTag(tag.id)} className="p-1 hover:text-red-600"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
             )}
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {isCatModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
               <h3 className="font-semibold text-lg">{editId ? 'Edit Category' : 'Add New Category'}</h3>
               <button onClick={() => setCatModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSaveCategory} className="p-6 flex-1 overflow-y-auto space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input required value={name} onChange={e => setName(e.target.value)} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm" placeholder="e.g. Startups" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug (optional)</label>
                  <input value={slug} onChange={e => setSlug(e.target.value)} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm" placeholder="e.g. startups" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm" placeholder="Optional category description..."></textarea>
               </div>
               <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setCatModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#E94560] border border-transparent rounded-md hover:bg-[#C73652] cursor-pointer">{editId ? 'Save Changes' : 'Save Category'}</button>
               </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Tag Modal */}
      {isTagModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/50">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
               <h3 className="font-semibold text-lg">{editId ? 'Edit Tag' : 'Add New Tag'}</h3>
               <button onClick={() => setTagModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSaveTag} className="p-6 space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input required value={name} onChange={e => setName(e.target.value)} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm" placeholder="e.g. Artificial Intelligence" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug (optional)</label>
                  <input value={slug} onChange={e => setSlug(e.target.value)} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm" placeholder="e.g. api" />
               </div>
               <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setTagModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#E94560] border border-transparent rounded-md hover:bg-[#C73652] cursor-pointer">{editId ? 'Save Changes' : 'Save Tag'}</button>
               </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
