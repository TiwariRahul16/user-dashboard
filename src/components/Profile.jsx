import React, { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

const Profile = ({ user }) => {
  const qrRef = useRef(null)

  const qr = new QRCodeStyling({
    width: 400,
    height: 400,
    type: 'svg',
    data: `https://github.com/TiwariRahul16/Portfolio`,
    image: '/logo.png', // your blue logo — make sure it’s in /public/logo.png
    dotsOptions: {
      color: '#1d2135', // Deep brand blue
      type: 'rounded-full',
    },
    backgroundOptions: { color: '#ffffff' },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 6,
      imageSize: 0.79, // slightly larger logo inside the QR
    },
  })

  useEffect(() => {
    if (qrRef.current) {
      qr.update({
        data: `https://tiwarirahul16.github.io/Portfolio/`,
      })
      qr.append(qrRef.current)
    }
    return () => {
      if (qrRef.current) qrRef.current.innerHTML = ''
    }
  }, [user.id])

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-8 transition-all duration-300 hover:shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center space-x-4">
          {/* Larger Rounded Logo */}
          {/* <div className="relative">
            <img
              src="/logo.png"
              alt="App Logo"
              className="w-14 h-14 rounded-full shadow-md border border-gray-200"
            />
            <div className="absolute -bottom-1 -right-1 bg-[var(--brand)] text-white text-xs px-2 py-[2px] rounded-full shadow-sm">
              PRO
            </div>
          </div> */}
          {/* <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div> */}
        </div>
        {/* <div className="text-xs text-gray-400 font-medium uppercase">Member</div> */}
      </div>

      {/* QR Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div ref={qrRef} className="flex-shrink-0 " />
        <div className="flex flex-col justify-center">
          {/* <p className="text-gray-600 text-sm">
            Scan this QR to visit your profile and connect with others instantly.
          </p> */}
          {/* <a
            href={`https://example.com/profile/${user.id}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[var(--brand)] font-medium hover:underline"
          >
            Open Profile ↗
          </a> */}
        </div>
      </div>

      {/* Footer — reuse logo subtly */}
      {/* <div className="flex justify-center items-center gap-2 pt-4 border-t border-gray-100">
        <img src="/logo.png" alt="brand" className="w-6 h-6 rounded-full" />
        <p className="text-xs text-gray-500">
          Powered by <span className="text-[var(--brand)] font-semibold">Fit Dashboard</span>
        </p>
      </div> */}
    </div>
  )
}

export default Profile
