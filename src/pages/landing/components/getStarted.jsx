import React from 'react'
import StartCard from '../../../components/startCard'
import start from '../../../assets/images/start.jpg'
import sign from '../../../assets/images/sign.jpg'
import create from '../../../assets/images/create.jpg'
import find from '../../../assets/images/find.jpg'
import fill from '../../../assets/images/fill.jpg'
import child from '../../../assets/images/child.jpg'
import { motion } from 'framer-motion'

const GetStarted = () => {
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>

      <motion.section variants={{ hidden: { opacity: 0 }, 
      show: { 
      opacity: 1, 
      trasition: {staggerChildren: 0.25,
      },
      },
    }}
    initial="hidden"
    animate="show"

      
      
      className='grid grid-cols-3 hp-10 gap-10'>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>

    </motion.section>

    </div >









    // <div>
    //     <h2 className='text-6xl font-bold text-[#D87357] justify-evenly p-10'>Get Started</h2>
    //     <div className='grid grid-cols-4 gap-5 py-5 shadow-lg '>
    //     <StartCard imgSrc={create} imgAlt={'start'} title={'Create Profile'} description={'If a dog chews shoes whose shoes does he choose?'} btnText={'Learn more'} btnLink={'SchoolPage'} />

    //     <StartCard imgSrc={fill} imgAlt={'start'} title={'Filter to Search'} description={'If a dog chews shoes whose shoes does he choose?'} btnText={'Learn more'} btnLink={'SchoolPage'} />

    //     <StartCard imgSrc={find} imgAlt={'start'} title={'Find the right school'} description={'If a dog chews shoes whose shoes does he choose?'} btnText={'Learn more'} btnLink={'SchoolPage'} />

    //     <StartCard imgSrc={child} imgAlt={'start'} title={'Get Started'} description={'If a dog chews shoes whose shoes does he choose?'} btnText={'Learn more'} btnLink={'SchoolPage'} /> 
    //     </div>

    // </div>
  )
}

export default GetStarted