import React from 'react'
import shero from '../../../assets/images/schero.jpg'
import top from '../../../assets/images/herop.jpg'

const Hero = () => {
  return (
    <div>
      {/* <img src={shero} alt="Hero background" className="object-contain relative w-full h-full" /> */}
      <img src={top} alt="top pic" className='bottom-0 right-0' />
      <h1 className='text-6xl font-bold  text-[#4B0A80] absolute top-1/2 left-1/2 -translate-y-1/2'>Find the best school <br />for you child in a click</h1>
      <label className="input input-bordered flex items-center gap-5 w-1/2 pl-10 ">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        
      </label>
      <label className="input input-bordered flex items-center gap-2">
        
      </label>
      <label className="input input-bordered flex items-center gap-2">
        
      </label>
    </div>
  )
}

export default Hero