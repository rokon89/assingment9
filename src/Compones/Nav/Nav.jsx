import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const routers = [
        { id: "1", name: "Doctor", path: "/doctor" },
        { id: "2", name: "Contact", path: "/contact" },
        { id: "3", name: "Services", path: "/services" },
    ];

    return (

        <div>
            <ul className='hidden md:flex space-x-5'>
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

    );
};

export default Nav;


