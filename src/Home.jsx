import react from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/illustration-1.svg"
import Comman from "./Comman";
const Home = () => {
    return (
        <>
            <Comman
                title="Grow Your bussiness with "
                imgsrc={web}
                visit='/service'
                btnname="Get started"
            />
        </>
    )
}
export default Home;