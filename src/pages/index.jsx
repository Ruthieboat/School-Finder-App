import React from 'react'
import Hero from './landing/components/hero'
import GetStarted from './landing/components/getStarted'
import GoogleMapEmbed from '../GoogleMapEmbed'


const Landing = () => {
  return (
    <>
      <Hero />
      <GetStarted />
      <GoogleMapEmbed />
      
    </>
  );
};

export default Landing

