import { useState } from "react";
import { ImCross} from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Flexnav = () => {
    const [open, setopen] = useState(true)

    const routers = [
        { id: "4", name: "Doctor", path: "/doctor" },
        { id: "4", name: "Contact", path: "/contact" },
        { id: "3", name: "Services", path: "/services" },
        { id: "2", name: "About Us", path: "/about" },
    ]
    return (
        <div>
            <div className="text-3xl   "  onClick={() => setopen(!open)} > {open ? <TfiMenuAlt /> : <ImCross />}</div>
            <div className={` duration-1000 absolute  ${open ? "-top-40" : "top-20"}`}>
                <ul className=' space-y-1'>
                    {
                        routers.map(route => <li className="text-lg font-medium" key={route.id}>
                            <NavLink className={({ isActive }) => isActive ?
                                `"text-lg  text-green-400  border border-green-500 p-2 rounded-md "` : ``}
                                to={route.path}>
                                {route.name} </NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Flexnav;