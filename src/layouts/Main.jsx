import { Outlet } from "react-router-dom";
import NavItems from "../components/Share/NavItems";
import Footer from "../components/Share/Footer";


const Main = () => {
    return (
        <div>
            
            <NavItems ></NavItems>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;