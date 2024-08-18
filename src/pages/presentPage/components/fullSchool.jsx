import React from 'react'
import full from '../../../assets/images/donow.jpeg'
import { FacebookIcon, InstagramIcon, MapPinIcon, TwitterIcon } from 'lucide-react'

const FullSchool = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold justify-center align-middle p-10'>GreenHorn Academy</h1>
      <p className='text-lg pl-10'>Located in Oyarifa, we are a school that seeks to give rest to parents and assist them raise intelligent and proper children and wards. Located in Oyarifa, we are a school that seeks to give rest to parents and assist them raise intelligent and proper children and wards. Located in Oyarifa, we are a school that seeks to give rest to parents and assist them raise intelligent and proper children and wards</p>

      <div className="flex flex-row gap-3">
        <span><img src={full} alt="school full page" className='w-96 m-7 rounded-3xl ' /></span>
        <div>
          <p className='text-lg pt-10 pl-5'><MapPinIcon />Number 123 Alafiya Street Oyarifa, Accra</p>
          <p className='text-lg p-1 pl-5'>Admission Status: <strong>Open</strong></p>
          <p className='text-lg pt-1 pl-5'>Curriculum: <strong>Cambridge</strong></p>
          <p className='text-lg pt-1 pl-5'>Contact: +233 247 652 438</p>
          <span className="flex flex-row gap-3 px-8 pt-2">
            <TwitterIcon className="text-blue  bg-white rounded-lg" />
            <FacebookIcon className="text-black bg-white rounded-lg" />
            <InstagramIcon className="text-black bg-white rounded-lg" />
          </span>
        </div>
      </div >
      <h2 className='font-bold'>Gallery</h2>
      <div className='grid grid-cols-3'>
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
      </div>


    </div >
  )
}

export default FullSchool