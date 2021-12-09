import { Fragment } from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import HowWork from "../../components/HowWork/HowWork";


const Home = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
            <HowWork/>
        </Fragment>
        
    )
}

export default Home;