import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Notifications from './components/Notifications'
import GymList from './components/GymList'
import Feedback from './components/Feedback'
import AIFeature from './components/AIFeature'
import NotFound from './components/NotFound'

export default function App() {
  const [user] = useState({
    id: 'Rahul_12345',
    name: 'Rahul Tiwari',
    email: 'rahul.kumar@gmail.com',
    avatar: '/avatar-placeholder.png'
  })

  const [page, setPage] = useState('profile') // profile, notifications, gyms, feedback, ai

  const renderPage = () => {
    switch(page) {
      case 'profile': return <Profile user={user} />
      case 'notifications': return <Notifications />
      case 'gyms': return <GymList />
      case 'feedback': return <Feedback />
      case 'ai': return <AIFeature />
      default: return <NotFound onGoHome={() => setPage('profile')} />
    }
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar active={page} onChange={setPage} user={user} />

      <div className="flex-1 p-8 overflow-auto content-scroll" style={{background:'#f3f4f6', minHeight:'100vh'}}>
        <div className="max-w-6xl mx-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}









