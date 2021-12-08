import logo from "../../images/logo/logo.svg";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes["logo__box"]}>
                <img src={logo} alt="Logo de l'entreprise" className={classes["logo__img"]}/>
            </div>
            <span className={classes["logo__text"]}>Eat Tasty</span>
        </div>
    )
}

export default Logo;