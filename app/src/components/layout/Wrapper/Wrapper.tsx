import { FC } from "react";
import classes from "./Wrapper.module.scss";

const Wrapper:FC<{
    nameClass:string|null
}> = ({children, nameClass}) => {
    
    return <div className={`${classes.wrapper}${nameClass? " "+classes[`wrapper__${nameClass}`]:""}`}>{children}</div>
}

export default Wrapper;