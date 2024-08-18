import React from 'react'
import sch from '../assets/images/schbu3.jpg'
import { DevicePhoneMobileIcon, MapPinIcon, StarIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'


const SchoolCard = ({ image, schoolName, location, number }) => {
  const navigate = useNavigate();

  const Rating = () => {
    return (
      <div className="rating">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" defaultChecked />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
      </div>
    )
  }

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
        <div className="rating">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" defaultChecked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#D87357]" />
        </div>

        <div className="card-actions justify-end">
          <button onClick={() => navigate('/details')}
          className="btn btn-neutral">Get Details</button>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard