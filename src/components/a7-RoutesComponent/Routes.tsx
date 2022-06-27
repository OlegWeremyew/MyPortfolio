import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATH} from "./constants";
import {AboutMe} from "components/a3-AboutMe/AboutMe";
import {Portfolio} from "components/a4-Portfolio/Portfolio";
import {Contacts} from "components/a5-Contacts/Contacts";

export const RoutesComponent: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.ABOUT} element={<AboutMe/>}/>
                <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            </Routes>
        </div>
    );
}