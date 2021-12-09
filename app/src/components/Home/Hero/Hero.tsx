import Wrapper from "../../layout/Wrapper/Wrapper";
import heroImg from "../../../images/img_hero.png";
import Section from "../../layout/Section/Section";
import TextSection from "../TextSection/TextSection";
import ImgSection from "../ImgSection/ImgSection";

const Hero = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi quasi placeat voluptatum vitae architecto a repellendus est aperiam aliquam."
    return (
        <Section nameClass="hero">
            <Wrapper nameClass="grid">
                <TextSection text={text} textBtn="Commander">
                    <h1 className="heading">Beautiful food & takeaway, <span className="word-color">delivered</span> to your door</h1>
                </TextSection>
                <ImgSection image={heroImg}/>
            </Wrapper>
        </Section>
    )
}

export default Hero; 