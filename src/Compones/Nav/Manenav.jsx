import React from 'react';
import Nav from './Nav';
import Flexnav from './Flexnav';
import { Link } from 'react-router-dom';

const Manenav = () => {
    return (
        <div className='flex justify-around items-center'>
            <div className='md:hidden'>
                <Flexnav></Flexnav>
            </div>
            <div>
                <Link to="/"><h1 className='text-center text-3xl text-sky-400 font-bold '>Xcel Urgent Care</h1></Link>
            </div>
            <div>
                <Nav></Nav>
            </div>
            <div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Manenav;