import React from 'react';
import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={style.navbar}>
            <a className={style.navbar__link} href="#">Home</a>
            <a className={style.navbar__link} href="#">Services</a>
            <a className={style.navbar__link} href="#">About me</a>
            <a className={style.navbar__link} href="#">Skills</a>
            <a className={style.navbar__link} href="#">Portfolio</a>
            <a className={style.navbar__link} href="#">Contacts</a>
        </nav>
    );
};
