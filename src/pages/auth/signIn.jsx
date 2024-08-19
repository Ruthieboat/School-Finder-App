import React from 'react'
import SignInForm from '../../components/SignInForm'

const SignIn = () => {
  return (
    <div>
      <div className="mt-[64px] ">
        <form action="" className=" flex flex-col max-w-[420px] mx-auto">
          <h3 className="text-4xl text-center font-bold">Welcome back</h3>
          <p className="text-[#475467] text-[15px] font-semibold text-center py-3">Please enter your email and password</p>
          <div className="mt-[40px] mb-[28px] ">
            <div className="flex flex-col font-semibold "><label htmlFor="email">Email</label>
              <input type="email" name="" id="email" placeholder="Enter Email" className=" h-[48px] rounded-[6px] px-[12px] py-[11px] border " /></div>
            <div className="flex flex-col space-y-[4px] font-semibold"> <label htmlFor="password">Password</label>
              <input type="password" name="" id="mot-de-passe" placeholder="Enter password" className=" h-[48px] rounded-[6px] px-[12px] pt-[11px] pb-2 border mt-[24px] " />
            </div>
          </div>
          <button type="submit" className="h-[48px] w-full bg-[#D87357] text-white font-bold rounded-md ">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn