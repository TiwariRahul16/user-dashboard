import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, User, Send } from 'lucide-react'

export default function AIFeature() {
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([
    { id: 1, from: 'ai', text: '🤖 Hello! I’m your AI assistant mock. Ask about gyms, workouts, or nutrition tips!' }
  ])
  const chatRef = useRef(null)

  const questions = [
    '🏋️ Suggest a workout routine',
    '🥗 Give me a nutrition tip',
    '📍 Recommend nearby gyms',
    '🧘 Suggest a mindfulness exercise',
  ]

  const answers = {
    'Suggest a workout routine': `💪 Here's a simple 4-day plan:\n
• Day 1 – Chest & Triceps\n
• Day 2 – Back & Biceps\n
• Day 3 – Rest or Light Cardio\n
• Day 4 – Legs & Shoulders\n
Repeat weekly and track progress! 🏋️‍♂️`,

    'Give me a nutrition tip': `🥗 Eat balanced meals with protein, complex carbs, and healthy fats.\n
Stay hydrated 💧 and aim for 80% whole foods, 20% treats.\n
Remember: consistency beats perfection!`,

    'Recommend nearby gyms': `📍 Try searching for:\n
• Gold’s Gym\n
• Anytime Fitness\n
• Planet Fitness\n
Or check Google Maps for gyms near your area 🏋️‍♀️.`,

    'Suggest a mindfulness exercise': `🧘 Try this 5-minute breathing technique:\n
1️⃣ Inhale deeply for 4 seconds\n
2️⃣ Hold for 4 seconds\n
3️⃣ Exhale slowly for 6 seconds\n
Repeat 5 times to reduce stress and center your mind 🌿.`,
  }

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs])

  const send = e => {
    e.preventDefault()
    if (!input.trim()) return
    const text = input.trim()
    const userMsg = { id: Date.now(), from: 'user', text }
    setMsgs(m => [...m, userMsg])
    setInput('')

    setTimeout(() => {
      let reply = ''

      if (text.toLowerCase() === '/help') {
        reply = `💡 You can try asking:\n${questions.map(q => `- ${q}`).join('\n')}`
      } else if (answers[text]) {
        reply = answers[text]
      } else {
        reply = `🤔 Sorry, I can only answer predefined prompts.\nType /help to see what I can respond to.`
      }

      setMsgs(m => [...m, { id: Date.now() + 1, from: 'ai', text: reply }])
    }, 700)
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Bot className="text-blue-600" /> AI Assistant
        </h3>
        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Demo Mode</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat Window */}
        <div className="md:col-span-2 flex flex-col h-[380px]">
          <div
            ref={chatRef}
            className="flex-1 overflow-auto p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3 scrollbar-thin scrollbar-thumb-gray-300"
          >
            {msgs.map(m => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-2 ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.from === 'ai' && (
                  <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    <Bot size={16} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                    m.from === 'ai'
                      ? 'bg-white text-gray-800 border border-gray-100'
                      : 'bg-blue-600 text-white rounded-br-none'
                  }`}
                >
                  {m.text}
                </div>
                {m.from === 'user' && (
                  <div className="flex-shrink-0 bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    <User size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={send} className="mt-4 flex items-center gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message... (try /help)"
              className="flex-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-500 transition-all flex items-center gap-1"
            >
              <Send size={16} /> Send
            </button>
          </form>
        </div>

        {/* Side Panel — AI Options */}
        <div className="md:col-span-1 bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">🤖 AI Capabilities</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {questions.map((q, i) => (
              <li
                key={i}
                className="p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all"
                onClick={() => setInput(q)}
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4 italic">
            Type <span className="font-mono text-blue-500">/help</span> to see available commands.
          </p>
        </div>
      </div>
    </div>
  )
}
