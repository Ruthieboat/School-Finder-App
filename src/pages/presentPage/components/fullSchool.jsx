import React from 'react'
import full from '../../../assets/images/schbu3.jpg'
import { MapPinIcon } from 'lucide-react'

const FullSchool = () => {
  return (
    <div>
      <h1>GreenHorn Academy</h1>
      <p>Located in Oyarifa, we are a school that seeks to giv rest to parents and assist them raise intelligent and proper children and wards</p>
      <img src={full} alt="school full page" />
      <p><MapPinIcon />Number 123 Street Ashodi Ikeja Lagos</p>
      <p>Admission Status: Open</p>
      <p>Curriculum: Cambridge</p>
      <p>Contact: +233 24765243</p>
      <div className="flex flex-row gap-3 px-8">
        <TwitterIcon className="text-black bg-white rounded-lg" />
        <FacebookIcon className="text-black bg-white rounded-lg" />
        <InstagramIcon className="text-black bg-white rounded-lg" />
      </div>

    </div>
  )
}

export default FullSchool