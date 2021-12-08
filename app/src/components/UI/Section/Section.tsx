import { FC } from "react";
import classes from "./Section.module.scss";

const Section:FC<{nameClass:string}> = ({children,nameClass}) => {
    let classSection = classes.section;
    classSection += nameClass ? ` ${classes["section--"+nameClass]}`: "";

    return <section className={classSection}>{children}</section>
}

export default Section