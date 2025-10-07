import React from 'react'

const items = [
  { id: 'profile', label: 'Profile', icon: userIcon },
  { id: 'notifications', label: 'Notifications', icon: bellIcon },
  { id: 'gyms', label: 'Gym List', icon: gymIcon },
  { id: 'feedback', label: 'Feedback', icon: chatIcon },
  { id: 'ai', label: 'AI Assistant', icon: brainIcon },
]

export default function Sidebar({ active, onChange, user }) {
  return (
    <aside className="w-72 flex-shrink-0 bg-[var(--sidebar-bg)] text-white shadow-md sticky top-0 h-screen">
      <div className="p-6 flex flex-col h-full">
        <div>
          <h1 className="text-2xl font-extrabold" style={{color:'var(--brand)'}}>Fit Dashboard</h1>
          <div className="h-px bg-gray-700 mt-4 mb-4"></div>
        </div>

        <nav className="flex-1 space-y-2">
          {items.map(it => {
            const isActive = active === it.id
            return (
              <button key={it.id} onClick={() => onChange(it.id)} className={
                `w-full flex items-center space-x-3 px-3 py-2 rounded-full transition-all duration-150 ${isActive ? 'bg-[var(--brand)] text-white font-semibold shadow' : 'text-gray-200 hover:shadow-lg hover:bg-[rgba(37,99,235,0.12)]'}`
              }>
                <span className="w-8 h-8 flex items-center justify-center" dangerouslySetInnerHTML={{__html: it.icon()}} />
                <span>{it.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-6 border-t border-gray-700 pt-4 text-gray-400 text-xs">
          <div>© {new Date().getFullYear()} Fit Dashboard</div>
        </div>
      </div>
    </aside>
  )
}

/* Icons as functions returning SVG strings */
function userIcon(){ return ` <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
function bellIcon(){ return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H9a3 3 0 01-3-3V10a6 6 0 1112 0v4a3 3 0 01-3 3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
function gymIcon(){ return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor"/><path d="M7 8V5a1 1 0 011-1h1v4H7zM16 8V5a1 1 0 00-1-1h-1v4h2z" fill="currentColor"/></svg>` }
function chatIcon(){ return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
function brainIcon(){ return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 9a4 4 0 00-4-4 4 4 0 00-4 4v6a4 4 0 004 4 4 4 0 004-4V9z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` }
