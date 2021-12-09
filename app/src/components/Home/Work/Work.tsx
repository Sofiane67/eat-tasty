import { FC } from "react";
import classes from "./Work.module.scss";

const Work:FC<
{
    image:string,
    title: string,
    text:string
}> = ({image, title, text}) => {
    return (
        <div className={classes.work}>
            <div className={classes["work__img-box"]}>
                <img src={image} alt="" className={classes["work__img"]}/>
            </div>
            <h3 className={`${classes["work__title"]} heading`}>{title}</h3>
            <p className={classes["work__text"]}>{text}</p>
        </div>
    )
}

export default Work;