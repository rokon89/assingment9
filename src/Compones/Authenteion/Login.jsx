import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { Createcontext } from "../Fierbase/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";


const Login = () => {
    const [passwordshow, setpasswordshow] = useState(true)
    const nevigat = useNavigate()
    const location = useLocation()
    console.log(location)
    const { login, google } = useContext(Createcontext)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        console.log(email, password)
        login(email, password)
            .then(res => {
                console.log(res.user)
                nevigat(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div className="bg-slate-100  ">
                <div className="md:w-3/6 bg-white mx-auto ">
                    <h2 className="text-2xl font-bold text-center py-10 ">Login your Account</h2>
                    <hr />

                    <div className="my-6 bg-white">
                        <form onSubmit={handleSubmit(onSubmit)} className=" px-12">
                            <div className="space-y-4">
                                <div>
                                    <span className="font-semibold ">Enter your Email Address</span>
                                    <input className=" w-full py-2 pl-2 rounded-md bg-slate-100" type="email"
                                        {...register("email", { required: true })} name="email" placeholder="Enter your Email Address" id="1" />
                                    {errors.email && <span className="text-red-500  font-medium">This field is required</span>}
                                </div>


                                <div className=" relative" >
                                    <span className="font-semibold ">Enter your Password</span><br />
                                    <input className=" w-full py-2 pl-2 rounded-md bg-slate-100"
                                        type={passwordshow ? "password" : "text"}
                                        name="password" {...register("password", { required: true })} placeholder="Enter your Password" id="2" />
                                    <span onClick={() => setpasswordshow(!passwordshow)} className=" absolute right-3 bottom-3 ">{passwordshow ? <IoMdEyeOff /> : <FaEye />}</span>
                                    {errors.password && <span className="text-red-500  font-medium">This field is required</span>}
                                </div>


                            </div>
                            <div className="mt-10">
                                <button type="submit" className=" btn btn-active btn-neutral bg-blue-400 w-full  ">Register</button>
                            </div>
                        </form>
                        <div onClick={google} className="text-4xl w-12 mx-auto my-6">
                            <FaGoogle className="" />
                        </div>
                        <p className=" my-4 font-semibold text-center ">{"Don't Have An Account ? "}<Link to="/register" className="text-blue-700" > Register </Link></p>

                    </div>
                </div >
                <br /><br /><br /><br /><br />
            </div >
        </div>
    );
};

export default Login;