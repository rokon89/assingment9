import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { Createcontext } from "../Fierbase/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Register = () => {
    const [errortext, seterrortext] = useState("")
    const [passwordshow, setpasswordshow] = useState(true)

const nevigat = useNavigate()

    const { create, update } = useContext(Createcontext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        const { email, password, Name, photo } = data;
        console.log(data)

        if (password.length < 6) {
            seterrortext("Password Must Be 6 Character or Longer")
            return toast.error(errortext)
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            seterrortext("Password Must Be 1 Uppercase & 1 Lowercase")
            return toast.error(errortext)

        }
        seterrortext("")

        create(email, password)
            .then(res => {
                console.log(res.user)
                update(Name, photo)
                    .then(res => {
                        console.log(res?.User)
                        nevigat("/")
                    })
                toast.success("successfully!")
            })
            .catch(error => {
                seterrortext(error)
                toast.error(errortext)
                console.error(error)
            })
    }
    return (
        <div>
            <div>
                <div className="bg-slate-100  ">
                    <div className="md:w-3/6 bg-white mx-auto ">
                        <h2 className="text-2xl font-bold text-center py-10 ">create your Account</h2>
                        <hr />

                        <div className="my-6 bg-white">
                            <form onSubmit={handleSubmit(onSubmit)} className=" px-12">
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-semibold ">Enter your Name</span>
                                        <input className=" w-full py-2 pl-2 rounded-md bg-slate-100" type="text" name="Name" placeholder="Enter your Name" id="6"
                                            {...register("Name")}
                                        />
                                    </div>
                                    <div>
                                        <span className="font-semibold ">Enter your Photo url</span>
                                        <input className=" w-full py-2 pl-2 rounded-md bg-slate-100" type="text" name="photo" placeholder=" Enter yourPhoto url" id="5"
                                            {...register("photo")}
                                        />
                                    </div>
                                    <div>
                                        <span className="font-semibold ">Enter your Email Address</span>
                                        <input className=" w-full py-2 pl-2 rounded-md bg-slate-100" type="email"
                                            {...register("email")}
                                            name="email" placeholder="Enter your Email Address" id="1" />
                                    </div>


                                    <div className="relative">
                                        <span className="font-semibold ">Enter your Password</span>
                                        <input className=" w-full py-2 pl-2 rounded-md bg-slate-100"
                                            {...register("password")}
                                            type={passwordshow ? "password" : "text"}
                                            name="password" placeholder="Enter your Password" id="2" />
                                        <span onClick={() => setpasswordshow(!passwordshow)} className="absolute bottom-3 right-3 text-lg ">{passwordshow ? <IoMdEyeOff /> : <FaEye />}</span>
                                    </div>


                                    {/* <div>
                                        <span className="font-semibold ">Enter your conform Password</span>
                                        <input className=" w-full py-2 pl-2 rounded-md bg-slate-100"
                                            {...register("conformpassword")}
                                            type="password" name="conformpassword" placeholder="Enter your Conform Password" id="3" />
                                    </div> */}
                                    <div>
                                        <input type="checkbox" name="check" id="checked" />
                                        <label className="pl-2" htmlFor="checked">Accept Term & Conditions</label>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button type="submit" className=" btn btn-active btn-neutral  bg-blue-400 w-full  ">Register</button>
                                </div>
                                <p className=" my-4 font-semibold text-center ">Already Have An Account ? <Link to="/login" className="text-blue-700" > Login </Link></p>
                                <br />
                                {/* <p className="text-center text-xl text-red-500 font-semibold">{errortext}</p> */}

                            </form>
                            <p className="text-center text-xl text-red-600 "> </p>
                        </div>
                    </div >
                    <br /><br />
                </div >
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;