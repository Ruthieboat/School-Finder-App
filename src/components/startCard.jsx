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
    <div className="flex flex-col justify-center items-center gap-5 card w-70 shadow-lg">
      <h1 className='card-title text-2xl font-bold '>{title}</h1>
      <img src={imgSrc} alt={imgAlt} className=''/>
      <p className=' p-2 font-bold animate-pulse '>{description}</p>
    </div>
  );
};

export default StartCard