import Section from "../../layout/Section/Section";
import Wrapper from "../../layout/Wrapper/Wrapper";
import groupFriend from "../../../images/group-friend.png";
import classes from "./Cta.module.scss";

const Cta = () => {
    return (
        <Section nameClass="">
            <Wrapper nameClass="grid">
                <div className={classes["cta__img-box"]}>
                    <img src={groupFriend} alt="" className={classes["cta__img"]}/>
                </div>  
                <div className={classes["cta__text-box"]}>
                    <h2 className={classes["cta__title"]}><span className={classes["cta__blue-word"]}>Support</span> good food and local business</h2>
                    <a href="#" className={classes["cta__btn"]}>Order Now</a>
                </div>              
            </Wrapper>
        </Section>
    )
}

export default Cta;