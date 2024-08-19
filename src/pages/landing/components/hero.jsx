import React from 'react'
import top from '../../../assets/images/sch.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import herop from '../../../assets/images/herop.jpg'
import GoogleMapEmbed from '../../../GoogleMapEmbed';
import ContactForm from '../../../components/contactForm';
import Footer from '../../../components/footer';
import GetStarted from './getStarted';


const Hero = () => {
  const [text] = useTypewriter({
    words: ["Find the best School for your child", "In your new location", "With ClikSchool"],
    loop: {},
  });

  return (
    <div className='w-full h-screen relative'>
      <img src={top} alt="top pic" className='w-full relative' />
      <div className='absolute text-6xl gradient font-bold bg-cover
        top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className='bg-[#fff] text-5xl font-bold text-[#F15935]'>{text}</h1>
        <Cursor />
      </div>

      <div id='about-us'>
        <h1 className='text-5xl font-bold text-[#EB5831] pt-10  '>About Us</h1>
        <span className='flex flex-row'>
          <div style={{ textAlign: 'left' }}>At ClikSchool, our mission is to make finding the perfect school for your child easier and more accessible. Whether you're relocating to a new area or simply exploring better educational opportunities, we are here to guide you through the process of locating the ideal school that meets your unique needs.

            We understand that choosing a school is one of the most important decisions you will make for your child’s future. That's why we have designed our platform to offer comprehensive information on schools in your area, including public, private, charter, and special education institutions. With detailed profiles, user reviews, location mapping, and key performance indicators, you can compare schools with confidence and make informed decisions.

            Our team is passionate about education and dedicated to providing up-to-date information, intuitive search functionality, and personalized recommendations to help parents, guardians, and students navigate the complexities of finding the right school. We believe that every child deserves access to quality education, and our goal is to help you discover the best learning environments available.</div>
          <img src={herop} alt="" className='size-[400px] mx-20' />
        </span>
      </div>
      <div>
        <GetStarted className='p-10'/>
      </div>

      <div className='flex flex-row'>
        <ContactForm />
        <GoogleMapEmbed className='' />
      </div>
      <Footer />

    </div>
  );
};

export default Hero