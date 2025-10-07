import React, { useState } from 'react'
import { Bell, CheckCircle2, Clock, Mail } from 'lucide-react'
import { notifications as initial } from '../data/notifications'

export default function Notifications() {
  const [notes, setNotes] = useState(initial)

  const markRead = (id) =>
    setNotes(notes.map((n) => (n.id === id ? { ...n, read: true } : n)))

  const markAll = () => setNotes(notes.map((n) => ({ ...n, read: true })))

  const unreadCount = notes.filter((n) => !n.read).length

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="bg-[var(--brand,#2563EB)] p-2 rounded-lg text-white shadow-sm">
            <Bell size={20} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Notifications</h3>
        </div>
        {unreadCount > 0 ? (
          <button
            onClick={markAll}
            className="text-sm text-[var(--brand,#2563EB)] hover:underline font-medium"
          >
            Mark all as read
          </button>
        ) : (
          <span className="text-xs text-gray-400 italic">All caught up 🎉</span>
        )}
      </div>

      {/* Notifications List */}
      <ul className="space-y-4">
        {notes.map((n) => (
          <li
            key={n.id}
            className={`group p-4 rounded-xl border transition-all duration-300 ${
              n.read
                ? 'bg-gray-50 border-gray-100'
                : 'bg-blue-50 border-blue-100 hover:border-[var(--brand,#2563EB)]'
            }`}
          >
            <div className="flex justify-between items-start">
              {/* Notification Body */}
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full shadow-sm ${
                    n.read
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-[var(--brand,#2563EB)] text-white'
                  }`}
                >
                  {n.type === 'message' ? (
                    <Mail size={16} />
                  ) : n.type === 'reminder' ? (
                    <Clock size={16} />
                  ) : (
                    <CheckCircle2 size={16} />
                  )}
                </div>

                <div>
                  <div className="font-medium text-gray-800 group-hover:text-[var(--brand,#2563EB)] transition-colors">
                    {n.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{n.body}</div>
                  <div className="text-xs text-gray-400 mt-2">{n.date}</div>
                </div>
              </div>

              {/* Mark Read Button */}
              {!n.read && (
                <button
                  onClick={() => markRead(n.id)}
                  className="text-xs text-[var(--brand,#2563EB)] bg-white border border-blue-100 rounded-md px-2 py-1 hover:bg-[var(--brand,#2563EB)] hover:text-white transition-all duration-200"
                >
                  Mark read
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-8 flex justify-center items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
        <img
          src="/logo.png"
          alt="Fit Dashboard Logo"
          className="w-6 h-6 rounded-full shadow-sm"
        />
        <span>
          Powered by <span className="font-semibold text-[var(--brand,#2563EB)]">Fit Dashboard</span>
        </span>
      </div>
    </div>
  )
}
