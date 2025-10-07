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

      {/* Gym Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-400 italic">
          No gyms found. Try another keyword.
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((g) => (
            <li
              key={g.id}
              className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {g.name}
                  </h4>
                  <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-semibold">
                    <Star size={12} className="mr-1 text-yellow-500" /> {g.rating}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin size={14} className="mr-1 text-[var(--brand,#2563EB)]" />
                  {g.city}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {g.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-[var(--brand,#2563EB)] px-2 py-[3px] rounded-full border border-blue-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Button */}
              <button className="mt-3 w-full py-2 text-sm font-medium text-white bg-[var(--brand,#2563EB)] rounded-lg shadow-sm hover:shadow-md hover:bg-blue-700 transition-all duration-300">
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}

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
