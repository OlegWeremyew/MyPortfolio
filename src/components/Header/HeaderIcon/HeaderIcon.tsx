import React from 'react';
import style from "./HeaderIcon.module.css"
import PortfolioIcon from "../../../assets/images/PortfolioIcon.png"

export const HeaderIcon = () => {
    return (
        <div className={style.headerIcon}>
            <img className={style.headerIcon__image}  src={PortfolioIcon} alt="PortfolioIcon" title="PortfolioIcon"/>
        </div>
    )
}
