import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Doctor from "../Pages/doctor/Doctor";
import DateilsDoctor from "../Pages/doctor/DateilsDoctor";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Service from "../Pages/service";

export const router = createBrowserRouter([{
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/services",
            loader: () => fetch("public/service.json"),
            element: <Service></Service>
        },
        {
            path: "/doctor",
            loader: () => fetch("public/doctor.json"),
            element: <Doctor></Doctor>,
        },
        {
            path: "/details/:doctor_id",
            loader: () => fetch("public/doctor.json"),
            element: <DateilsDoctor></DateilsDoctor>
        }


    ]
}])

