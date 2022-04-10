import React from 'react';
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
                <div className={style.copyright__text}>
                    <div>Copyright © 2022 Portfolio. All Rights Reserved</div>
                    <div>Made with <span className={style.copyright__header}> &#10084; </span>
                        <span> by Oleg Veremyev</span></div>
                </div>
        </div>
    );
};
