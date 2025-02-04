import React from 'react'
import Navigation from '@/components/Navigation'
import Timer from '@/components/Timer'

const page = () => {
  return (
    <div className='bg-[#111827] min-h-screen'>
      <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation />
        <Timer />
      </div>
    </div>
  )
}

export default page