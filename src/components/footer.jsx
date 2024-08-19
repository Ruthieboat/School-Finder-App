import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid"
import { FacebookIcon, Heart, InstagramIcon, Twitter, TwitterIcon } from "lucide-react"
import down from "../assets/images/do.png";


const Footer = () => {
  return (
    <div className=" bg- mt-25">
      <div className="flex flex-row gap-40 p-3">
        <span>
          
          {/* <p>A small river named <br />Duden flows by their place <br /> and supplies it with <br />the necessary regelialia.</p> */}

        </span>

        {/* <span>
          <p className="text-2xl font-semibold gap-3 text-[#D87357] pt-10">Offices</p>
          <p>Accra, Ghana</p>
          <p>Abuja, Nigeria</p>
          <p>Chicago, USA</p>
          <p>Lome, Togo</p>
        </span>
        <span>
          <p className="text-2xl font-semibold text-[#EB5831] pt-10">Have a Questions?</p>
          <p>How much are the accent chairs</p>
          <p>On delivery</p>
          <p>What are our payment methods?</p>
          <p>How to book delivery</p>
        </span>
        <span>
          <img src={down} alt="download app" className="w-[200px] h-[120px] pt-10"/>
        </span> */}

      </div>
      <div className="flex flex-row gap-3 ">
       
      </div>

      <div className="flex flex-row width-full p-12 bg-[#B9BC27] text-white justify-center ">
      
      <TwitterIcon className="text-black" />
        <FacebookIcon className="text-black" />
        <InstagramIcon className="text-black" />
        <p className="text-black pl-5">Copyright ©2024 All rights reserved | This website is made with love by <strong>clikschool</strong></p>
        <Heart className="text-black animate-bounce" />
      </div>
    </div>
  )
}

export default Footer