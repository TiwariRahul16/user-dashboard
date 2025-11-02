import React from 'react'



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

