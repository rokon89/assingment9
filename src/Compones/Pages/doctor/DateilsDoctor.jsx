import { useLoaderData, useParams } from 'react-router-dom';

const DateilsDoctor = () => {

    const data = useLoaderData()
    const { doctor_id } = useParams();
    const filter = data.find(d => d.doctor_id === doctor_id)
    console.log(data)

    const { description, img_url, rating, working_hours, experience_years, specialty, name,  } = filter
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default DateilsDoctor;