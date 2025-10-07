import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Feedback() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)
  const [feedbacks, setFeedbacks] = useState([])

  // Load feedbacks when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    setFeedbacks(stored)
  }, [])

  const submit = e => {
    e.preventDefault()
    if (!msg.trim()) return
    const newFeedback = {
      id: Date.now(),
      name: name || 'Anonymous',
      message: msg,
      date: new Date().toISOString(),
    }
    const updated = [newFeedback, ...feedbacks]
    setFeedbacks(updated)
    localStorage.setItem('feedbacks', JSON.stringify(updated))
    setOk(true)
    setName('')
    setMsg('')
    setTimeout(() => setOk(false), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          💬 Feedback Center
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
      </div>

      {/* Form */}
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Feedback
          </label>
          <textarea
            value={msg}
            onChange={e => setMsg(e.target.value)}
            placeholder="Type your feedback..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
            rows={4}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-md hover:opacity-95 hover:shadow-lg transition-all"
          >
            Submit Feedback
          </button>

          <AnimatePresence>
            {ok && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-green-600 font-medium"
              >
                ✅ Thank you for your feedback!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Feedback List */}
      <div className="mt-8">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-1">
          Recent Feedback
        </h4>
        <FeedbackList items={feedbacks} />
      </div>
    </div>
  )
}

function FeedbackList({ items }) {
  return (
    <div className="space-y-3 max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 pr-1">
      {items.length === 0 && (
        <p className="text-sm text-gray-400 italic">No feedback yet.</p>
      )}

      {items.map(i => (
        <motion.div
          key={i.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {i.name?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-gray-800">{i.name}</div>
                <div className="text-xs text-gray-400">
                  {new Date(i.date).toLocaleString()}
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1">{i.message}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
