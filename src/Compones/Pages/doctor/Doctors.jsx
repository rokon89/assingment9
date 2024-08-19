import { Link } from "react-router-dom";

const Doctors = ({ doctors, }) => {
    const { description, img_url, rating, working_hours, experience_years, specialty, name, doctor_id, } = doctors
    console.log(doctors)

     return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl font-serif">
                <figure>
                    <img className="h-72"
                        src={img_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-slate-800 text-lg font-medium "> <span className="font-semibold">specialty</span> : {specialty}</h2>
                    <h2 className=" font-semibold text-3xl ">{name}</h2>
                    <p className="text-lg">{description.slice(0, 70)}...</p>
                    <hr />
                    <div className="card-actions justify-end items-center">
                        <p className="text-lg"> Experience  : {experience_years} years</p>
                        <Link to={`/details/${doctor_id}`}><button className="btn btn-accent hover:scale-110"> Doctor Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;