import React from 'react';
import style from "./Header.module.css"

import {Nav} from "./Nav/Nav";
import {HeaderIcon} from "./HeaderIcon/HeaderIcon";

export const Header = () => {
    return (
        <div className={style.header}>
            <HeaderIcon/>
            <Nav/>
        </div>
    );
};
