import React from 'react'
import SignUpForm from '../../components/SignUpForm'
import signup from '../../assets/images/herop.jpg'

const SignUp = () => {

  return (
    <div className="grid md:grid-cols-2 h-screen w-full">
      <div className="bg-pink/60 hidden md:flex items-center">
        <img src={signup} alt="Login image" className="" />
      </div>
      <div className="flex flex-col justify-center gap-y-10 px-20 md:px-10 lg:px-20 xl:px-40 w-full">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-4xl text-center font-bold">Sign Up</h3>
          <p className='text-[#D87357] pt-5'>Enter your details below to create an account</p>
        </div>
        <SignUpForm />
        
      </div>
    </div>
  )
}

export default SignUp