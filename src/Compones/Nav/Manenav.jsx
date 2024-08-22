import Nav from './Nav';
import Flexnav from './Flexnav';
import { Link } from 'react-router-dom';
import { Createcontext } from '../Fierbase/AuthContext';
import { useContext } from 'react';

const Manenav = () => {
    const { User, logout } = useContext(Createcontext);
    // console.log(User)
    return (
        <div className='flex justify-around items-center my-6'>
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
                {
                    User ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={User.photoURL}/>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li className=' font-semibold text-xl '><a>{User.displayName}</a></li>
                                <li className=' font-semibold text-xl '><button onClick={logout}>logout</button></li>
                            </ul>
                        </div> :
                        <Link to="login">
                            <button className='btn btn-primary'> Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Manenav;