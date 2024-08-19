import React from 'react'
import StartCard from '../../../components/startCard'
import start from '../../../assets/images/start.jpg'
import sign from '../../../assets/images/sign.jpg'
import create from '../../../assets/images/create.jpg'
import find from '../../../assets/images/find.jpg'
import fill from '../../../assets/images/fill.jpg'
import child from '../../../assets/images/child.jpg'
import { motion } from 'framer-motion'

// const gridContainerVariants ={
//   hidden: { opacity: 0 },
//         show: {
//           opacity: 1,
//           trasition: {
//             staggerChildren: 0.25,
//           },
//         },
// }

// const gridSquareVariants ={
//   hidden: { opacity: 0 }, show: { opacity: 1 }

// }


const GetStarted = () => {
  //   return (
  //     <div className='flex flex-col gap-10 overflow-x-hidden'>

  //       <motion.section variants={{
  //         hidden: { opacity: 0 },
  //         show: {
  //           opacity: 1,
  //           trasition: {
  //             staggerChildren: 0.25,
  //           },
  //         },
  //       }}
  //         initial="hidden"
  //         animate="show"
  //         className='grid grid-cols-3 p-10 gap-10'>

  //         <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
  //           className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
  //         <motion.div variants={{
  //           hidden: { opacity: 0 },
  //           show: {
  //             opacity: 1
  //           }
  //         }} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
  //         <motion.div variants={{
  //           hidden: { opacity: 0 },
  //           show: {
  //             opacity: 1
  //           }
  //         }} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
  //         <motion.div variants={{
  //           hidden: { opacity: 0 },
  //           show: {
  //             opacity: 1
  //           }
  //         }} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
  //         <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
  //         <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>

  //       </motion.section>

  //     </div >


  return (

    <div className=''>
      <h2 className='text-5xl font-bold text-[#EB5831] justify-evenly p-10'>Get Started</h2>
      <div className='grid grid-cols-4 gap-5 p-5 shadow-lg justify-center '>
        <StartCard imgSrc={create} imgAlt={'start'} title={'Search'} description={'Type in the name of the school or the area you want to find a school'} btnText={'Learn more'} btnLink={'SchoolPage'} />
        <StartCard imgSrc={fill} imgAlt={'start'} title={'Find School'} description={'Find a school of your choice in the location you want? click!'} btnText={'Learn more'} btnLink={'SchoolPage'} />
        <StartCard imgSrc={find} imgAlt={'start'} title={'Sign Up'} description={'Sign up to get more details of the school of your choice'} btnText={'Learn more'} btnLink={'SchoolPage'} />
        <StartCard imgSrc={child} imgAlt={'start'} title={'Enroll'} description={'Enroll your ward in the school of your choice, and enjoy all the facilities.'} btnText={'Learn more'} btnLink={'SchoolPage'} />
      </div>
    </div>

  )

}

export default GetStarted