import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';

const Service = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl text-sky-400 font-bold items-center'> {data.hospital_name}</h1>

            <div className='flex justify-around items-center'>
                <div className='space-y-2 font-semibold text-lg '>
                    <p>{data.address.street}</p>
                    <p>{data.address.city}</p>
                    <p>{data.address.zip_code}</p>
                </div>
                <div className='space-y-2 font-semibold text-lg '>
                    <p>{data.phone_number}</p>
                    <p>{data.email}</p>
                </div>

            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    data.services?.map(service => <Services key={service} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;