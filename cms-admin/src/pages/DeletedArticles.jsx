import { apiFetch } from '../lib/api.js'
import React, { useState, useEffect } from 'react'
import { Trash2, RefreshCw, Calendar, Tag, User } from 'lucide-react'

export default function DeletedArticles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchDeleted = () => {
    setLoading(true)
    apiFetch('/cms/v1/deleted-articles')
      .then(res => res.json())
      .then(data => { setArticles(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(err => { console.error(err); setLoading(false) })
  }

  useEffect(() => { fetchDeleted() }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-[56px] font-extrabold text-red-500 tracking-tighter leading-[1.1] mb-2">Deleted Articles</h1>
          <p className="text-[16px] font-medium text-gray-400 tracking-tight">Archived records of permanently removed articles</p>
        </div>
        <button
          onClick={fetchDeleted}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
        >
          <RefreshCw size={15} /> Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400 font-medium">Loading...</div>
      ) : articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-300">
          <Trash2 size={48} strokeWidth={1} className="mb-4" />
          <p className="font-bold text-lg">No deleted articles yet</p>
          <p className="text-sm mt-1">Articles you delete will be archived here</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Headline</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tags</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Was Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Deleted At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {articles.map(a => (
                <tr key={a.id} className="hover:bg-red-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 max-w-sm">{a.headline}</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-mono">{a.slug}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.category || '—'}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {a.tags ? a.tags.split(',').map(t => (
                        <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs font-medium">{t.trim()}</span>
                      )) : <span className="text-gray-300 text-xs">—</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-400 capitalize">{a.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {new Date(a.deleted_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-3 border-t border-gray-50 bg-gray-50 text-sm text-gray-400">
            {articles.length} deleted {articles.length === 1 ? 'article' : 'articles'}
          </div>
        </div>
      )}
    </div>
  )
}
