import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid"
import { FacebookIcon, InstagramIcon, Twitter, TwitterIcon } from "lucide-react"


const Footer = () => {
  return (
    <div className=" bg-[#8345B9]">

      <div className="flex flex-row gap-40 p-3">
        <span>
          <h2 className="text-2xl font-bold text-white">findSchool </h2>
          <p>A small river named <br />Duden flows by their place <br /> and supplies it with <br />the necessary regelialia.</p>
          <div className="flex flex-row gap-2 rounded-md pb-4">
            <TwitterIcon className="text-white bg-[#6DB7DD]" />
            <FacebookIcon className="text-white bg-[#6DB7DD]" />
            <InstagramIcon className="text-white bg-[#6DB7DD]" />
          </div>
        </span>
        <span className="gap-3">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p>Amazing Deals</p>
          <p>Quality Furniture</p>
          <p>Modern Design</p>
          <p>Best Support</p>
        </span>
        <span>
          <p className="text-2xl font-semibold gap-3">Our shops</p>
          <p>Accra, Ghana</p>
          <p>Abuja, Nigeria</p>
          <p>Chicago, USA</p>
          <p>Lome, Togo</p>
        </span>
        <span>
          <p className="text-2xl font-semibold">Have a Questions?</p>
          <p>How much are the accent chairs</p>
          <p>On delivery</p>
          <p>What are our payment methods?</p>
          <p>How to book delivery</p>
        </span>
      </div>

      <div className="flex flex-row width-full p-12 bg-[#410074] ">
        <p className="text-[#808080]">Copyright ©2024 All rights reserved | This template is made with love</p>
      </div>
    </div>
  )
}

export default Footer