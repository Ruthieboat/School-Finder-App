import React from 'react'
import start from '../assets/images/start.jpg'

const StartCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  btnText,
  btnLink,
}) => {

  return (
    <div className="card w-80 shadow-lg">
      <h1 className='card-title text-2xl font-bold '>{title}</h1>
      <img src={imgSrc} alt={imgAlt} className='rounded-full'/>
      <p>{description}</p>
      <a href="SchoolPage" className='btn bg-[#D87357] rounded-md'>Learn more</a>
    </div>
  );
};

export default StartCard