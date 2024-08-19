import { Outlet } from "react-router-dom";
import Manenav from "../Nav/Manenav";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Manenav></Manenav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;