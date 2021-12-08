import { FC } from "react";
import classes from "./Icon.module.scss";
import sprite from "../../../images/icon/sprite.svg";

const Icon:FC<{
    icon:string,
    color: string
}> = ({icon, color}) => {

    const iconClass = color ? `${classes["icon"]} ${classes[`icon--${color}`]}`: classes["icon"]
    return (
        <svg className={iconClass}>
            <use href={`${sprite}${icon}`}/>
        </svg>
    )
}

export default Icon;