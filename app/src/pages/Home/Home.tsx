import { Fragment } from "react";
import About from "../../components/Home/About/About";
import Hero from "../../components/Home/Hero/Hero";
import HowWork from "../../components/Home/HowWork/HowWork";


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