import Section from "../../layout/Section/Section";
import Wrapper from "../../layout/Wrapper/Wrapper";
import TextSection from "../TextSection/TextSection";
import ImgSection from "../ImgSection/ImgSection";
import phoneImg from "../../../images/phone-img.png";

const Faq = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi quasi placeat voluptatum vitae architecto a repellendus est aperiam aliquam."
    return (
        <Section nameClass="">
            <Wrapper nameClass="grid">
                <ImgSection image={phoneImg} />
                <TextSection text={text} textBtn="Voir la FAQ">
                    <h2 className="heading heading--h2">The home offresh products</h2>
                </TextSection>
            </Wrapper>
        </Section>
    )
}

export default Faq;