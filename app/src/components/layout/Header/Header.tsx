import Wrapper from "../Wrapper/Wrapper";
import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";
import Logo from "../../Logo/Logo";

const Header = () => {
    return (
        <header className={classes.header}>
            <Wrapper nameClass="header">
                <Logo/>
                <Navigation/>
            </Wrapper>
        </header>
    )
}

export default Header;