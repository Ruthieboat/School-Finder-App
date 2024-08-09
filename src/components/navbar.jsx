import { Link } from "react-router-dom"
import K from "../constants/index.jsx"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid"

const Navbar = () => {
    return (
        <div className="flex  justify-between px-52 py-10 w-full left-0 top-0 text-[#4B0A80] font-bold">
            <span className="font-bold text-3xl ">findSchool
                <MagnifyingGlassCircleIcon className="flex flex-row size-5"/>
            </span>
            <div className="flex gap-x-16">
                {
                    K.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Navbar