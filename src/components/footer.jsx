import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid"
import { FacebookIcon, Heart, InstagramIcon, Twitter, TwitterIcon } from "lucide-react"
import down from "../assets/images/do.png";


const Footer = () => {
  return (
    <div className=" bg-[#37F7F2]">

      <div className="flex flex-row gap-40 p-3">
        <span>
          <h2 className="text-2xl font-bold text-[#e2e1e1]">clikschool </h2>
          <p>A small river named <br />Duden flows by their place <br /> and supplies it with <br />the necessary regelialia.</p>
          <div className="flex flex-row gap-3 px-8">
            <TwitterIcon className="text-black bg-white rounded-lg" />
            <FacebookIcon className="text-black bg-white rounded-lg" />
            <InstagramIcon className="text-black bg-white rounded-lg" />
          </div>
        </span>
      
        <span>
          <p className="text-2xl font-semibold gap-3 text-[#e2e1e1]">Offices</p>
          <p>Accra, Ghana</p>
          <p>Abuja, Nigeria</p>
          <p>Chicago, USA</p>
          <p>Lome, Togo</p>
        </span>
        <span>
          <p className="text-2xl font-semibold text-[#e2e1e1]">Have a Questions?</p>
          <p>How much are the accent chairs</p>
          <p>On delivery</p>
          <p>What are our payment methods?</p>
          <p>How to book delivery</p>
        </span>
        <span>
          <img src={down} alt="download app" className="w-[200px] h-[120px] pt-6"/>
        </span>
      
      </div>

      <div className="flex flex-row width-full p-12 bg-[#069DAD] text-white justify-center ">
        <p className="">Copyright ©2024 All rights reserved | This website is made with love by clikschool</p>
        <Heart className="text-white animate-bounce" />
      </div>
    </div>
  )
}

export default Footer