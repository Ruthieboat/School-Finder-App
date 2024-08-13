import React from 'react'
import sch from '../assets/images/schbu3.jpg'
import { DevicePhoneMobileIcon, MapPinIcon, StarIcon } from '@heroicons/react/20/solid'


const SchoolCard = ({image, schoolName, location, number}) => {
  
  return (
    <div className="card lg:card-side bg-base-100 max-w-2xl shadow-xl">
      <figure className='w-64'>
        <img
          src={image}
          alt="School name" className='rounded-3xl' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{schoolName}</h2>
        <span className='flex gap-0'>
          <MapPinIcon className='w-6 h-6' />
          <p className='text-sm'>{location}</p>
        </span>
        <span className='flex '>
          <DevicePhoneMobileIcon className='w-6 h-6' />
          <p className='text-sm'>{number}</p>
        </span>
        <span className='flex '>
          <StarIcon className='w-6 h-6' />
          <StarIcon className='w-6 h-6' />
          <StarIcon className='w-6 h-6' />
          <StarIcon className='w-6 h-6' />
        </span>

        <div className="card-actions justify-end">
          <button className="btn btn-neutral">Get Details</button>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard