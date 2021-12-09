import Wrapper from "../../layout/Wrapper/Wrapper";
import aboutImg from "../../../images/img_about.png";
import Section from "../../layout/Section/Section";
import TextSection from "../TextSection/TextSection";
import ImgSection from "../ImgSection/ImgSection";

const About = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi quasi placeat voluptatum vitae architecto a repellendus est aperiam aliquam."
    return (
        <Section nameClass="shape">
            <Wrapper nameClass="grid">
                <TextSection text={text} textBtn="En savoir plus">
                    <h2 className="heading heading--h2">The home offresh products</h2>
                </TextSection>
                <ImgSection image={aboutImg}/>
            </Wrapper>
        </Section>
    )
}

export default About; 