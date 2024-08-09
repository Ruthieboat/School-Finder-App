import React from 'react'
import StartCard from '../../../components/startCard'

const GetStarted = () => {
  return (
    <div>
        <h2 className='text-6xl font-bold text-[#CF6C15] justify-evenly p-10'>Get Started</h2>
        <div className='grid grid-cols-4 gap-5 py-8'>
        <StartCard />
        <StartCard />   
        <StartCard />
        <StartCard />
        </div>

    </div>
  )
}

export default GetStarted