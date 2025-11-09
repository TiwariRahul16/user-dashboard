import React, { useState } from 'react'
import { MapPin, Star, Dumbbell, Search } from 'lucide-react'
import { gyms as initial } from '../data/gyms'

export default function GymList() {
  const [q, setQ] = useState('')
  const [gyms] = useState(initial)

  const filtered = gyms.filter(
    (g) =>
      g.name.toLowerCase().includes(q.toLowerCase()) ||
      g.city.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 border-b border-gray-100 pb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[var(--brand,#2563EB)] text-white p-2 rounded-lg shadow-sm">
            <Dumbbell size={20} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Gym List</h3>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search gyms or city..."
            className="pl-9 pr-3 py-2 text-sm w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--brand,#2563EB)] outline-none transition-all"
          />
        </div>
      </div>


      {/* Footer */}
      <div className="mt-10 flex justify-center items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
        <img
          src="/logo.png"
          alt="Fit Dashboard Logo"
          className="w-6 h-6 rounded-full shadow-sm"
        />
        <span>
          Powered by{' '}
          <span className="font-semibold text-[var(--brand,#2563EB)]">
            Fit Dashboard
          </span>
        </span>
      </div>
    </div>
  )
}
