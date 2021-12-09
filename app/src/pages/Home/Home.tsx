import { Fragment } from "react";
import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";
import Faq from "../../components/Home/Faq/Faq";
import Hero from "../../components/Home/Hero/Hero";
import HowWork from "../../components/Home/HowWork/HowWork";


const Home = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
            <HowWork/>
            <Faq/>
            <Contact/>
        </Fragment>
        
    )
}

export default Home;