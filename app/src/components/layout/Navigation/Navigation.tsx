import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { links } from "../../../utils/links";
import Icon from "../../UI/Icon/Icon";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes["navigation__list"]}>
                {
                    links.map((link, index) => <li key={index} className={classes["navigation__list-item"]}><NavLink className={(navData) => (navData.isActive ? classes["navigation__link--active"] : "")} to={link.url}>{link.name}</NavLink></li>)
                }
            </ul>

            <button className={classes["navigation__btn-cart"]}>
                <Icon icon="#icon-cart" color="white"/>
            </button>
        </nav>
    )
}

export default Navigation;