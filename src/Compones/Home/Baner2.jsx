import React from 'react';
import "../../App.css"
const Baner2 = () => {
    return (
        <div className='background-img font-serif w-full container mx-auto '>
            <h1 className='text-center text-2xl md:text-3xl text-sky-400 font-bold pt-16 '>Urgent Care | Minute Care</h1>
            <h1 className='text-center text-5xl md:text-7xl text-sky-400 font-semibold py-10'>Immediate Care <br /> Close to Home</h1>
            <hr className='w-2/4 mx-auto  border border-t-sky-300' />
            <p className='text-center text-2xl md:text-3xl text-sky-400 font-bold pb-14 pt-5'>
                3517 S Jefferson Street <br />
                Falls Church, VA 22041<br />
                844-XCEL-CARE</p>
        </div>
    );
};

export default Baner2;