import { apiFetch } from '../lib/api.js'
import React, { useState, useEffect } from 'react'
import { RefreshCw, X, ExternalLink, Download, ChevronRight, User, Mail, Building2, Briefcase, Link, FileText, Tag } from 'lucide-react'

const STATUS_STYLES = {
  new:        'bg-blue-50 text-blue-600',
  reviewing:  'bg-yellow-50 text-yellow-700',
  accepted:   'bg-green-50 text-green-700',
  rejected:   'bg-red-50 text-red-600',
}

const STATUS_OPTIONS = ['new', 'reviewing', 'accepted', 'rejected']

export default function FeatureStories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const fetchStories = async () => {
    setLoading(true)
    try {
      const res = await apiFetch('/cms/v1/feature-stories')
      if (res.ok) setStories(await res.json())
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchStories() }, [])

  const openDetail = async (story) => {
    setDetailLoading(true)
    setSelected(null)
    try {
      const res = await apiFetch(`/cms/v1/feature-stories/${story.id}`)
      if (res.ok) setSelected(await res.json())
    } catch (e) { console.error(e) }
    finally { setDetailLoading(false) }
  }

  const handleStatusChange = async (id, status) => {
    try {
      const res = await apiFetch(`/cms/v1/feature-stories/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (res.ok) {
        setStories(prev => prev.map(s => s.id === id ? { ...s, status } : s))
        if (selected?.id === id) setSelected(prev => ({ ...prev, status }))
      }
    } catch (e) { console.error(e) }
  }

  const downloadDoc = (story) => {
    if (!story.supportingDocData || !story.supportingDocName) return
    const ext = story.supportingDocName.split('.').pop().toLowerCase()
    const mimeMap = { pdf: 'application/pdf', doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }
    const mime = mimeMap[ext] || 'application/octet-stream'
    const link = document.createElement('a')
    link.href = `data:${mime};base64,${story.supportingDocData}`
    link.download = story.supportingDocName
    link.click()
  }

  return (
    <div className="flex gap-6 h-full">

      {/* LIST PANEL */}
      <div className={`flex flex-col ${selected ? 'w-1/2' : 'w-full'} transition-all duration-300`}>
        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-6">
          <div>
            <h1 className="text-[48px] font-extrabold tracking-tighter leading-[1.1] mb-1" style={{ color: 'var(--cms-accent)' }}>
              Startup Feature Stories
            </h1>
            <p className="text-[15px] font-medium text-gray-400 tracking-tight">
              {stories.length} submission{stories.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button onClick={fetchStories} className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm">
            <RefreshCw size={15} /> Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24 text-gray-400 font-medium">Loading...</div>
        ) : stories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-300">
            <FileText size={48} strokeWidth={1} className="mb-4" />
            <p className="font-bold text-lg">No submissions yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stories.map(s => (
                  <tr
                    key={s.id}
                    onClick={() => openDetail(s)}
                    className={`cursor-pointer transition-colors ${selected?.id === s.id ? 'bg-[var(--cms-accent-light)]' : 'hover:bg-gray-50'}`}
                  >
                    <td className="px-5 py-4 font-semibold text-sm text-gray-900 whitespace-nowrap">{s.fullName}</td>
                    <td className="px-5 py-4 text-sm text-gray-500 whitespace-nowrap">{s.email}</td>
                    <td className="px-5 py-4 text-sm text-gray-700 whitespace-nowrap">{s.companyName}</td>
                    <td className="px-5 py-4 text-sm text-gray-500 whitespace-nowrap">{s.role}</td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[s.status] || 'bg-gray-100 text-gray-600'}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-4">
                      <ChevronRight size={16} className="text-gray-300" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* DETAIL PANEL */}
      {(selected || detailLoading) && (
        <div className="w-1/2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-y-auto max-h-[calc(100vh-120px)] sticky top-0">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">Submission Detail</h2>
            <button onClick={() => setSelected(null)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          {detailLoading ? (
            <div className="flex items-center justify-center py-24 text-gray-400 font-medium">Loading...</div>
          ) : selected && (
            <div className="p-6 flex flex-col gap-5">

              {/* Status control */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</span>
                <div className="flex gap-2">
                  {STATUS_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleStatusChange(selected.id, opt)}
                      className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all ${selected.status === opt ? (STATUS_STYLES[opt] || 'bg-gray-200 text-gray-700') + ' ring-2 ring-offset-1 ring-current' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Fields */}
              <Field icon={<User size={14} />} label="Full Name" value={selected.fullName} />
              <Field icon={<Mail size={14} />} label="Email" value={selected.email} />
              <Field icon={<Building2 size={14} />} label="Company" value={selected.companyName} />
              <Field icon={<Briefcase size={14} />} label="Role / Position" value={selected.role} />

              {selected.workLink && (
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <Link size={12} /> Work Link
                  </span>
                  <a href={selected.workLink} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-[var(--cms-accent)] font-medium hover:underline flex items-center gap-1 break-all">
                    {selected.workLink} <ExternalLink size={12} />
                  </a>
                </div>
              )}

              <div className="h-px bg-gray-100" />

              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <Tag size={12} /> Proposed Story Hook
                </span>
                <p className="text-sm font-semibold text-gray-800">{selected.storyHook}</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <FileText size={12} /> The Unfiltered Truth
                </span>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{selected.unfilteredTruth}</p>
              </div>

              {selected.supportingDocName && (
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Supporting Document</span>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <FileText size={16} className="text-gray-400 shrink-0" />
                    <span className="text-sm font-medium text-gray-700 flex-1 truncate">{selected.supportingDocName}</span>
                    {selected.supportingDocData && (
                      <button onClick={() => downloadDoc(selected)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--cms-accent)] text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                        <Download size={12} /> Download
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-400 pt-2">
                Submitted {new Date(selected.createdAt).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function Field({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        {icon} {label}
      </span>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  )
}
