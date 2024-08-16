import React from 'react'
import top from '../../../assets/images/sch.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Find the best School for your child", "In your new location", "With ClikSchool"],
    loop: {},
  });

  return (
    <div>
      <img src={top} alt="top pic" className='w-full relative' />
      <div className='absolute text-6xl gradient font-bold  bg-cover
        top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1>{text}</h1>
        <Cursor />
      </div>

      <div>
        <h1>About Us</h1>
        
      </div>

    </div>
  );
};

export default Hero