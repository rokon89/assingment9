import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Doctor from "../Pages/doctor/Doctor";
import DateilsDoctor from "../Pages/doctor/DateilsDoctor";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Service from "../Pages/service";
import Login from "../Authenteion/Login";
import Register from "../Authenteion/Register";
import Private from "../Pages/Private";

export const router = createBrowserRouter([{
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/contact",
            element: <Private> <Contact></Contact> </Private>
        },
        {
            path: "/services",
            loader: () => fetch("public/service.json"),
            element: <Private> <Service></Service> </Private>
        },
        {
            path: "/doctor",
            loader: () => fetch("public/doctor.json"),
            element: <Private> <Doctor></Doctor>  </Private>,
        },
        {
            path: "/details/:doctor_id",
            loader: () => fetch("public/doctor.json"),
            element: <DateilsDoctor></DateilsDoctor>
        }


    ]
}])

