import react from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/illustration-2.svg"
import Comman from "./Comman";
const About = (props) => {
    return (
        <>
            <Comman
                title="Welcome to About page "
                imgsrc={web}
                visit='/contact'
                btnname="Contact now"
            />
        </>
    )
}


export default About;