import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Createcontext } from "../Fierbase/AuthContext";

const Private = ({ children }) => {
    const location = useLocation()
    const { User, loading } = useContext(Createcontext)
    // console.log(User)
    if (loading) {
        return <p>loading..</p>
    }
    if (User) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate >

};

export default Private;