import { FC } from "react";
import classes from "./TextSection.module.scss";

const TextSection:FC<{
    text: string,
    textBtn: string
}> = ({children,text,textBtn}) => {
    return (
        <div className={classes.textSection}>
            {children}
            <p className={classes["textSection__text"]}>{text}</p>
            <button className={classes["textSection__btn"]}>{textBtn}</button>
        </div>
    )
}

export default TextSection;