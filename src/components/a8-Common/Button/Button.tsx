import React from "react";
import s from "./Button.module.scss";
import {SuperButtonPropsType} from "./types";

const Button: React.FC<SuperButtonPropsType> = (
    {
        activeClass, className,
        ...restProps
    }
) => {
    const finalClassName = `${activeClass ? s.activeClass : s.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
}

export default Button;