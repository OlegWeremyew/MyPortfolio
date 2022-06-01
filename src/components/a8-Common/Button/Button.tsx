import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    activeClass?: boolean
}

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