import { Link, useNavigate } from "react-router-dom"
import K from "../constants/index.jsx"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between px-50 py-5 w-full left-0 top-0 text-[#D87357] font-bold">
            <span className="font-bold text-3xl ">findSchool
                <MagnifyingGlassCircleIcon className="flex flex-row size-5" />
            </span>
            <div className="flex gap-x-12">
                {
                    K.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )
                }
                <button onClick={() => navigate("/contact")} className="btn bg-[#D87357] w-32 shadow-md text-white rounded-lg">Add School</button>
            </div>
        </div>
    )
}

export default Navbar