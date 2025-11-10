import React from 'react'
export default function NotFound({ onGoHome }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold mb-2">Page not found</h3>
      <p className="text-sm text-gray-600">Oops — the page you're looking for doesn't exist. Use the sidebar to navigate back.</p>
      <div className="mt-4">
        <button onClick={onGoHome} className="px-4 py-2 bg-[var(--brand)] text-white rounded">Go to Dashboard</button>
      </div>
    </div>
  )
}
