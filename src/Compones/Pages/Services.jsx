import { FaAmbulance } from "react-icons/fa";

const Services = ({ service }) => {
    console.log(service)
    return (
        <div>
            <p>{service.id}</p>

            <div className='w-96 space-y-3 p-4 border-2 shadow-md font-semibold text-lg shadow-gray-300'>
                <FaAmbulance className="text-9xl text-center" />

                <h3 className='text-center text-2xl font-bold'>{service.service_name}</h3>
                <h3 className=' text-lg'>{service.department_head}</h3>
                <p>{service.description}</p>
                <hr className='border' />
                <div className='flex justify-around'>
                    <div><p className="text-base">{service.contact_number}</p> </div>
                    <div><p className="text-base">{service.availability}</p></div>
                </div>
            </div>
        </div>
    );
};

export default Services;