import { useLoaderData, useParams } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiAddressBookFill } from "react-icons/pi";


const DateilsDoctor = () => {

    const data = useLoaderData()
    const { doctor_id } = useParams();

    const filter = data?.find(d => d.doctor_id === doctor_id)
    console.log(data)


    const { description, contact, img_url, rating, working_hours, experience_years, specialty, name, } = filter
    return (
        <div>

            <div className='flex space-x-3'>
                <div className='w-1/3'>
                    <img src={img_url} alt="" />
                </div>
                <div className='w-2/3 space-y-3 '>
                    <div>
                        <p className='text-2xl font-semibold '>Name :  {name}</p>
                        <p className='text-xl py-3 font-semibold'>Specialty : {specialty}</p>
                        <p className='text-lg py-3 font-semibold'> {description}</p>
                        <hr className='border-1 py-2' />

                        <div className='w-full items-center flex justify-normal font-semibold '>
                            <div className='ml-10'>
                                <p className='flex items-center space-x-1'> <span className='pr-1'><IoStar /></span> Rating : {rating}</p>

                                <p >Working Hours : {working_hours}</p>
                                <p> Experience Years : {experience_years}</p>
                            </div>

                            <div className='ml-20'>
                                <p className='flex items-center space-x-1'> <span className='pr-1'><MdEmail />
                                </span> Rating : {contact.email}</p>
                                <p className='flex items-center space-x-1'> <span className='pr-1'><FaPhoneAlt /></span> Rating : {contact.phone}</p>
                                <p className='flex items-center space-x-1'> <span className='pr-1'><PiAddressBookFill /></span> Rating : {contact.address}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateilsDoctor;