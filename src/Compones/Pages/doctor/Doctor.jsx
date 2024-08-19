import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Doctors from './Doctors';

const Doctor = () => {
    const doctor = useLoaderData()
    console.log(doctor)
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    doctor?.map(doctors => <Doctors key={doctors.doctor_id} doctors={doctors}></Doctors>)
                }
            </div>
        </div>
    );
};

export default Doctor;