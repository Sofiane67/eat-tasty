import Wrapper from "../../layout/Wrapper/Wrapper";
import Section from "../../layout/Section/Section";
import workImg1 from "../../../images/work_1.png";
import workImg2 from "../../../images/work_2.png";
import workImg3 from "../../../images/work_3.png";
import Work from "../Work/Work";

const HowWork = () => {
    const contents = [
        {
            image:workImg1,
            title: "Adapt your menu items",
            text: "Easily adapt your menu using the webflow CMS and allow customers to browse your items."
        },
        {
            image:workImg2,
            title: "Accept online orders & takeout",
            text: "ELet your customers order and pay via the powerful ecommerce system, or simple let them call your store."
        },
        {
            image:workImg3,
            title: "Manage delivery or takeout",
            text: "Manage your own logistics and take orders simply through the ecommerce system."
        }
    ];
    return (
        <Section nameClass="how-work">
            <h2 className="heading heading--h2">How it works</h2>
            <Wrapper nameClass="grid--col-3">
                {
                    contents.map((content,index) => <Work key={index} image={content.image} title={content.title} text={content.text}/>)
                }
            </Wrapper>
        </Section>
    )
}

export default HowWork;