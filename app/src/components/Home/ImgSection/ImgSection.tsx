import { FC } from "react";
import classes from "./ImgSection.module.scss";

const ImgSection:FC<{
    image:string
}> = ({image}) => {
    return (
        <div className={classes.imgSection}>
            <img src={image} className={classes["imgSection__img"]}/>
        </div>
    )
}

export default ImgSection