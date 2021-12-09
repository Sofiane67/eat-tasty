import Section from "../../layout/Section/Section";
import Wrapper from "../../layout/Wrapper/Wrapper";
import TextSection from "../TextSection/TextSection";
import ImgSection from "../ImgSection/ImgSection";
import storeImg from "../../../images/store-img.png";

const Contact = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi quasi placeat voluptatum vitae architecto a repellendus est aperiam aliquam."
    return (
        <Section nameClass="shape">
            <Wrapper nameClass="grid">
                <TextSection text={text} textBtn="+333 88 00 00 00">
                    <h2 className="heading heading--h2">Call our store and takeaway when it suits you best</h2>
                </TextSection>
                <ImgSection image={storeImg} />
            </Wrapper>
        </Section>
    )
}

export default Contact;