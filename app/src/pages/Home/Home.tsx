import { Fragment } from "react";
import About from "../../components/Home/About/About";
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
        </Fragment>
        
    )
}

export default Home;