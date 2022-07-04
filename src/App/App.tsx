import React, {FC} from 'react';
import s from './App.module.scss';
import {Menu} from "components/a6-Menu/Menu";
import {RoutesComponent} from "components/a7-RoutesComponent/Routes";
import {Avatar} from "components/a1-Avatar";

export const App: FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.leftBox}>
                <Avatar/>
            </div>
            <div className={s.rightBox}>
                <Menu/>
                <RoutesComponent/>
            </div>
        </div>
    );
}
